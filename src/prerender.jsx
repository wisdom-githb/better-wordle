import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

function toHeadElements(helmet) {
  // react-helmet-async can give React elements; convert them into
  // { type, props } objects that vite-prerender-plugin expects.
  const reactEls = [
    ...(helmet?.meta?.toComponent?.() || []),
    ...(helmet?.link?.toComponent?.() || []),
    ...(helmet?.script?.toComponent?.() || []),
  ].flat().filter(Boolean);

  return new Set(
    reactEls.map((el) => ({
      type: el.type,
      props: el.props,
    }))
  );
}

export async function prerender(data) {
  const url = data?.url || "/";
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url} basename="/better-wordle">
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  return {
    html,
    links: new Set(["/", "/game", "/leaderboard", "/faq", "/profile"]),
    head: {
      lang: "en",
      title: helmet?.title?.toString?.().replace(/<\/?title>/g, "") || "Better Wordle",
      elements: toHeadElements(helmet),
    },
  };
}
