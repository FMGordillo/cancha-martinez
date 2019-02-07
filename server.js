require("@zeit/next-preact/alias")();
const next = require("next");
const { parse } = require("url");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare()
	.then(() => {
		const express = require("express");
		const session = require("express-session");
		const RedisStore = require("connect-redis")(session);
		const passport = require("passport");
		const WebAppStrategy = require("ibmcloud-appid").WebAppStrategy;

		const server = express();
		const HOST = process.env.HOSTNAME || `localhost:${port}`;
		const CALLBACK_URL = "/login/callback";

		console.log(HOST);

		server.use(
			session({
				// store: new RedisStore({
				// 	url:
				// 		"rediss://admin:b48892269d19d470ab2410360396d7ba5392bc24520d3ce68d1847b13dd7929e@bf80ee1e-43e2-4a06-9f63-0572ac2da014.b8a5e798d2d04f2e860e54e5d042c915.databases.appdomain.cloud:32368/0"
				// }),
				secret: "lolol",
				resave: true,
				saveUninitialized: true
			})
		);

		passport.use(
			new WebAppStrategy({
				tenantId:
					"<6730bc5d-75ae-460a-890d-9da></6730bc5d-75ae-460a-890d-9da>b022ac9da",
				clientId: "7f9fe18d-9e69-4c8e-ab6d-16d508256b7c",
				secret: "MmEwNjczNDMtY2M5MC00NjA4LWE0MmEtZjJjYWYxOTg1M2Qw",
				oauthServerUrl:
					"https://appid-oauth.ng.bluemix.net/oauth/v3/6730bc5d-75ae-460a-890d-9dab022ac9da",
				redirectUri: `http${!dev ? "s" : ""}://${HOST}${CALLBACK_URL}`
			})
		);

		server.use(passport.initialize());
		server.use(passport.session());

		passport.serializeUser(function(user, cb) {
			cb(null, user);
		});

		passport.deserializeUser(function(obj, cb) {
			cb(null, obj);
		});

		/**
		 * API Endpoints
		 */

		// server.get(
		// 	"/api/matches",
		// 	passport.authenticate(WebAppStrategy.STRATEGY_NAME),
		// 	(req, res) => api.getMatches()
		// );

		// server.post(
		// 	"/api/match",
		// 	passport.authenticate(WebAppStrategy.STRATEGY_NAME),
		// 	(req, res) => api.createMatch(req.body)
		// );

		/**
		 * Authentication and redirection
		 */
		server.get(
			"/login",
			passport.authenticate(WebAppStrategy.STRATEGY_NAME),
			function(req, res) {
				console.log(req.user);
				res.redirect("/");
			}
		);
		server.get('/logout', function(req, res) {
			req.logout();
			req.session.destroy()
			res.redirect('/login')
		})
		server.get(
			CALLBACK_URL,
			passport.authenticate(WebAppStrategy.STRATEGY_NAME)
		);

		/**
		 * Everything else
		 */
		server.get("*", (req, res) => {
			const parsedUrl = parse(req.url, true);
			return handler(req, res, parsedUrl);
		});

		server.listen(port, err => {
			if (err) throw err;
			console.log(`> Ready on port ${port}`);
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
