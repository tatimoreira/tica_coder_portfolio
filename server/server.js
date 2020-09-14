const express = require("express");
const next = require("next");
const i18next = require("i18next");
const middleware = require("i18next-http-middleware");

const { nextI18next } = require("../utils/i18n");

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  //server.use(nextI18NextMiddleware(nextI18next));

  server.use(
    middleware.handle(i18next, {
      ignoreRoutes: ["/foo"], // or function(req, res, options, i18next) { /* return true to ignore */ }
    })
  );

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
})();
