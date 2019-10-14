const functions = require('firebase-functions');
const express = require('express');
const fetch = require("node-fetch");

const app = express();

app.get('/authenticate', async (req, res) => {
    const response = await fetch("https://untappd.com/oauth/authorize/" +
        "?client_id=EF65DE994C929A1C4DAA6B75040BA76D2487DDFF" +
        "&client_secret=64D3BDA4489097388BEB62C9815054316F0EF4CC" +
        "&response_type=code" +
        "&redirect_url=https://us-central1-hopsightbeer.cloudfunctions.net/app/authenticate" +
        "&code=" + req.query.code);
    const json = await response.json();
    const access_token = json.response.access_token;
    res.redirect("https://hopsightbeer.firebaseapp.com/login?access_token=" + access_token);
});

exports.app = functions.https.onRequest(app);
