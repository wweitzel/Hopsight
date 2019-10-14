const functions = require('firebase-functions');
const express = require('express');
const fetch = require("node-fetch");

const app = express();

app.get('/authenticate', async (req, res) => {
    const response = await fetch("https://untappd.com/oauth/authorize/" +
        "?client_id=client_id" +
        "&client_secret=client_secret" +
        "&response_type=code" +
        "&redirect_url=redirect_url" +
        "&code=" + req.query.code);
    const json = await response.json();
    const access_token = json.response.access_token;
    res.redirect("https://hopsightbeer.firebaseapp.com/home?access_token=" + access_token);
});

exports.app = functions.https.onRequest(app);
