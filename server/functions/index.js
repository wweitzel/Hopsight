const api_keys = require('./api_keys/keys');
const functions = require('firebase-functions');
const express = require('express');
const fetch = require("node-fetch");

const app = express();

app.get('/authenticate', async (req, res) => {
    const response = await fetch("https://untappd.com/oauth/authorize/" +
        "?client_id=" + api_keys.UNTAPPD_CLIENT_ID +
        "&client_secret=" + api_keys.UNTAPPED_CLIENT_SECRET +
        "&response_type=code" +
        "&redirect_url=" + api_keys.REDIRECT_URL +
        "&code=" + req.query.code);
    const json = await response.json();
    const access_token = json.response.access_token;
    res.redirect("https://hopsightbeer.firebaseapp.com/login?access_token=" + access_token);
});

exports.app = functions.https.onRequest(app);
