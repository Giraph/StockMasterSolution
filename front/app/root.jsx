import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react"
import Navbar from "./components/navbar"

import stylesheet from "./tailwind.css"

export const links = () => [{ rel: "stylesheet", href: stylesheet }]

export default function App() {
    return (
        <html>
            <head>
                <link rel="icon" href="data:image/x-icon;base64,AA" />
                <Meta />
                <Links />
            </head>
            <body>
                <Navbar />
                <Outlet />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
