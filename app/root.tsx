import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ParallaxProvider } from "react-scroll-parallax";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dobu Martial Arts",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full overflow-x-hidden">
        <ParallaxProvider>
          <Navbar />
          <div className="mt-16">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </div>
          <Footer
            title="DoBu is an award winning martial-arts gym which focuses on exploring
          our client’s inner power."
            titleDescription="DoBu Martial-Arts"
          />
        </ParallaxProvider>
      </body>
    </html>
  );
}
