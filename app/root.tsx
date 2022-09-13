import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import GlobalStyle from '~/styles/GlobalStyle';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Somnium',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="ko">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <GlobalStyle />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
