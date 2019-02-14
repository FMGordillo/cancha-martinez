const express = require("express");
const router = express.Router();

// TODO: Create server-side routes here

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "beta") {
	const authCtrl = require("../controllers/auth");

	router.get("/login", authCtrl.login);
	router.get("/metadata", authCtrl.metadata);
	router.post("/assert", authCtrl.assert);
}

module.exports = router;
