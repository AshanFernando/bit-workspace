import React from 'react';
// eslint-disable-next-line import/extensions
import { renderToStringWithData } from '@apollo/client/react/ssr/index.js';
// eslint-disable-next-line import/extensions
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client/index.js';
import ReactDOMServer from 'react-dom/server';
import {
  createStaticRouter,
  createStaticHandler,
  type StaticHandlerContext,
  StaticRouterProvider,
} from 'react-router-dom/server.js';
import * as express from 'express';
import { routes } from './acme-web.js';

interface IRenderProps {
  path: string;
  cookie: string;
  req: Request;
  res: Response;
}

function createFetchRequest(
  req: express.Request,
  res: express.Response
): Request {
  const origin = `${req.protocol}://${req.get('host')}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  res.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values as string);
      }
    }
  }

  const init = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    (init as any).body = req.body;
  }

  return new Request(url.href, init);
}

const handler = createStaticHandler(routes);

export const render = async ({ cookie, req, res }: IRenderProps) => {
  const fetchRequest = createFetchRequest(req as any, res as any);
  const context = (await handler.query(fetchRequest)) as StaticHandlerContext;

  const router = createStaticRouter(handler.dataRoutes, context);

  const gatewayUri = process.env.BACKEND_URL ?? 'http://localhost:5000';
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: true,
    link: createHttpLink({
      uri: `${gatewayUri}/graphql`,
      credentials: 'same-origin',
      headers: {
        cookie,
      },
    }),
  });

  const App = () => {
    return (
      <ApolloProvider client={client}>
        <StaticRouterProvider router={router} context={context} />
      </ApolloProvider>
    );
  };

  const content = await renderToStringWithData(<App />);
  const initialState = client.extract();

  const stateString = `window.__APOLLO_STATE__=${JSON.stringify(
    initialState
  ).replace(/</g, '\u003c')};`;

  return {
    script: `<script>${stateString}</script>`,
    html: ReactDOMServer.renderToString(
      // eslint-disable-next-line react/no-danger
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
    ),
  };
};

/**
 * implement loadScripts() to inject scripts to the head
 * during SSR.
 */
// export const loadScripts = async () => {
//   return '<script></script>';
// }
