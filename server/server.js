// require("@zeit/next-preact/alias")();
require("dotenv").config();
const next = require("next");

const { parse } = require("url");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare()
	.then(() => {
		const express = require("express");
		const jwt = require("express-jwt");
		const log4js = require("log4js");
		const appName = require("./../package").name;
		const bodyParser = require("body-parser");
		const compression = require("compression");
		const cors = require("cors");
		const cookieParser = require("cookie-parser");

		const server = express();
		const auth = jwt({
			secret: process.env.JWT_SECRET,
			credentialsRequired: true
		});

		const logger = log4js.getLogger(appName);
		logger.level = process.env.LOG_LEVEL || "debug";

		server.use(log4js.connectLogger(logger, { level: "debug" }));
		server.use(bodyParser.urlencoded({ extended: true })); // TODO: Is it necessary?
		server.use(bodyParser.json()); // TODO: Is it necessary?
		server.use(compression()); // TODO: Is it necessary?
		server.use(cors());
		server.use(cookieParser());

		// passport.use(
		// 	new WebAppStrategy({
		// 		tenantId:
		// 			"6730bc5d-75ae-460a-890d-9da",
		// 		clientId: "7f9fe18d-9e69-4c8e-ab6d-16d508256b7c",
		// 		secret: "MmEwNjczNDMtY2M5MC00NjA4LWE0MmEtZjJjYWYxOTg1M2Qw",
		// 		oauthServerUrl:
		// 			"https://appid-oauth.ng.bluemix.net/oauth/v3/6730bc5d-75ae-460a-890d-9dab022ac9da",
		// 		redirectUri: `http${!dev ? "s" : ""}://${HOST}${CALLBACK_URL}`
		// 	})
		// );

		// Authentication
		server.use("/api", auth, (err, req, res, next) => {
			const path = url.parse(req.url).pathname;
			if (
				err.name === "UnauthorizedError" &&
				path !== "/login" &&
				path !== "/metadata" &&
				path !== "/assert"
			) {
				logger.warn(
					`Unauthorized ${req.method} to ${req.baseUrl}: ${
						err.message
					}`
				);
				responseService.json(res, 401, { message: err.message });
			} else {
				next();
			}
		});

		// Set API endpoint
		const apiRouter = require('./routers/api');
		server.use('/api', apiRouter);

		if (!dev) {
			server.enable("trust proxy");

			server.use((req, res, next) => {
				if (req.secure) next();
				else res.redirect(`https://${req.headers.host}${req.url}`);
			});

			// Redirect to W3 login page if not logged in
			server.use((req, res, next) => {
				if (!req.cookies.token) {
					res.cookie("redirectTo", req.originalUrl);
					res.redirect(`${req.baseUrl}/api/login`);
				} else {
					next();
				}
			});
		}

		server.get("*", (req, res) => {
			const parsedUrl = parse(req.url, true);
			return handler(req, res, parsedUrl);
		});

		server.listen(port, err => {
			if (err) throw err;
			// logger.info(`CWD: ${cwd}`);
			logger.info(`> Ready on port ${port}`);
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
