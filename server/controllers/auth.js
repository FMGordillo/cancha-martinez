const saml2 = require("saml2-js");
const Saml2Parser = require("saml2js");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const isProd = process.env.NODE_ENV === "production";
const url = isProd
	? "https://cancha-martinez.mybluemix.net"
	: "https://cancha-martinez-test.mybluemix.net";
const w3idUrl = isProd
	? "https://w3id.sso.ibm.com"
	: "https://w3id.alpha.sso.ibm.com";
const partnerIDURL = `${url}/api/metadata`;
const ssoLoginURL = `${w3idUrl}/auth/sps/samlidp2/saml20/logininitial?RequestBinding=HTTPPost&PartnerId=${url}/api/metadata&NameIdFormat=email&Target=${url}`;
const ctrl = {};

// Create service provider
const spOptions = {
	entity_id: `${partnerIDURL}.xml`,
	private_key: fs.readFileSync("cert/key.pem").toString(), // TODO: Create file
	certificate: fs.readFileSync("cert/cert.pem").toString(), // TODO: Create file
	assert_endpoint: `${url}/api/assert` // TODO: Create endpoint
};

// Create identity provider
const idpOptions = {
	sso_login_url: ssoLoginURL,
	certificates: fs.readFileSync("cert/samlidp2_CIS_PROD.pem").toString() // TODO: Create file
};

const sp = new saml2.ServiceProvider(spOptions);
const idp = new saml2.IdentityProvider(idpOptions);

// Endpoint to retrieve metadata
ctrl.metadata = function(req, res) {
	res.type("application/xml");
	res.send(sp.create_metadata());
};

// Starting point for login
ctrl.login = function(req, res) {
	sp.create_login_request_url(idp, {}, (err, loginUrl, requestId) => {
		if (err) return res.send(500);
		res.redirect(loginUrl);
	});
};

// TODO: Check if necessary
ctrl.isAdmin = email => process.env.RECEPTOR_MAIL.includes(email.toLowerCase());

// Assert endpoint for when login completes
ctrl.assert = async function(req, res) {
	const response = new Buffer(
		req.body.SAMLResponse || req.body.SAMLRequest,
		"base64"
	);
	const parser = new Saml2Parser(response);
	const userFromW3 = parser.toObject();
	//const subscriber = await Subscriber.findById(userFromW3.uid); // TODO: Only with registered users

	const token = jwt.sign(
		{
			firstName: userFromW3.firstName,
			lastName: userFromW3.lastName,
			fullName: userFromW3.cn,
			email: userFromW3.emailaddress,
			isAdmin: ctrl.isAdmin(userFromW3.emailaddress), // TODO: Check if necessary
			isSubscriber: !!subscriber, // TODO: Check if necessary
			uid: userFromW3.uid
		},
		process.env.JWT_SECRET // TODO: Set this var
	);

	res.cookie("token", token);
	res.redirect(req.cookies.redirectTo || "/");
};

module.exports = ctrl;
