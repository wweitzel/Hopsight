const api_keys = require('./api_keys/keys');
const functions = require('firebase-functions');
const express = require('express');
const fetch = require("node-fetch");

const app = express();

app.get('/authenticate', async (req, res) => {
    let response = await fetch("https://untappd.com/oauth/authorize/" +
        "?client_id=" + api_keys.api_keys.UNTAPPD_CLIENT_ID +
        "&client_secret=" + api_keys.api_keys.UNTAPPED_CLIENT_SECRET +
        "&response_type=code" +
        "&redirect_url=" + api_keys.api_keys.REDIRECT_URL +
        "&code=" + req.query.code);
    let json = await response.json();
    const access_token = json.response.access_token;

    response = await fetch("https://api.untappd.com/v4/user/info?access_token=" + access_token);
    json = await response.json();
    const username = json.response.user.user_name;

    res.redirect("https://hopsightbeer.firebaseapp.com/login" +
                 "?access_token=" + access_token +
                 "&username=" + username);
});

exports.app = functions.https.onRequest(app);
