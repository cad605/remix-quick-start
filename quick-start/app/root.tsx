import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type {MetaFunction} from 'remix'

export const meta: MetaFunction = () => {
  return {title: 'New Remix App'}
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}