import {
  type RouteObject,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  type RouterContextType,
  NavigationProvider,
} from '@bitdesign/sparks.navigation.link';
import { Header } from '@acme/acme.layout.header';
import { DiscussionFeed } from '@acme/discussions.discussion-feed';
import { AcmeTheme } from '@acme/design.acme-theme';
import { Card } from '@acme/design.content.card';

const routerAdapter: RouterContextType = {
  Link: ({ href, ...props }) => <Link to={href} {...props} />,
  useLocation,
  useNavigate,
};

function Layout() {
  return (
    <AcmeTheme>
      <NavigationProvider adapter={routerAdapter}>
        <Header />
        <Outlet />
      </NavigationProvider>
    </AcmeTheme>
  );
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Card>Welcome to Acme.</Card>,
      },
      {
        path: '/discussions',
        element: <DiscussionFeed />,
      },
    ],
  },
];
