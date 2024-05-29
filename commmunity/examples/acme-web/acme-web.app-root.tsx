import { StrictMode } from 'react';
import {
  createBrowserRouter,
  matchRoutes,
  RouterProvider,
} from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import { routes } from './acme-web.js';
import { AcmeApolloProvider } from './apollo-provider.js';

async function hydrate() {
  const element = document.getElementById('root');

  if (!element) {
    throw new Error('Element with id "root" not found');
  }

  // Determine if any of the initial routes are lazy
  const lazyMatches = matchRoutes(routes, window.location)?.filter(
    (m) => m.route.lazy
  );

  // Load the lazy matches and update the routes before creating your router
  // so we can hydrate the SSR-rendered content synchronously
  if (lazyMatches && lazyMatches?.length > 0) {
    await Promise.all(
      lazyMatches.map(async (m) => {
        const routeModule = await m.route.lazy!();
        Object.assign(m.route, { ...routeModule, lazy: undefined });
      })
    );
  }

  const router = createBrowserRouter(routes);

  hydrateRoot(
    element,
    <StrictMode>
      <AcmeApolloProvider>
        <RouterProvider router={router} fallbackElement={null} />
      </AcmeApolloProvider>
    </StrictMode>
  );
}

hydrate();
