import { Link, Links, LiveReload, Meta, Outlet } from "remix";
import globalStylesSheet from "~/styles/global.css";

export const links = () => [{rel:"stylesheet", href:globalStylesSheet}]

export const meta = () => {
  const content = "A first cool app by remix";
  const keyWords = "remix javaScript react"
  return (
    {
      content,
      keyWords
    }
  )
}
export default function app() {
  return (
    <Document>
      <Navigation>
      <Outlet/>
      </Navigation>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Links/>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta/>
      <title>{title?title:'Remix App'}</title>
    </head>
    <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload/> : null}
    </body>
    </html>
  )
}

function Navigation({ children }) {
  return (
    <>
    <nav className="navbar">
      <Link to="/" className="logo">Remix</Link>
    <ul className="nav">
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/Blog"> Blog</Link>
          </li>
          <li>
            <Link to="/Blog/PopularBlog">Popular Blog</Link>
          </li>
          <li>
            <Link to="/Forums">Forums</Link>
          </li>
    </ul>
      </nav>
      <div className="container">
        {children}
      </div>
      </>
  )
}

export function ErrorBoundary({ error }) {
    console.log(error)
    return (
      <Document>
        <Navigation>
            <h2>Error</h2>
            <p>{error.message}</p>
        </Navigation>
        </Document>
    )
}