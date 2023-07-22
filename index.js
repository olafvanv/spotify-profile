require('dotenv').config();

const REDIRECT_URI = process.env.REDIRECT_URI;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const PORT = process.env.PORT || 8080;

const express = require("express");
const querystring = require("querystring");
const cors = require('cors');
const request = require('request');
const path = require('path');
const utils = require('./utils/functions')

const app = express();

app.use(cors());
app.use(express.static('client/build'));


app.get("/login", (req, res) => {
  var state = utils.generateRandomString(16);
  const scope = 'user-top-read user-read-recently-played user-follow-read playlist-read-private';
  res.redirect("https://accounts.spotify.com/authorize?" + querystring.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: scope,
    state: state,
    show_dialog: true
  }));
});

app.get("/account", (req, res) => {
  const code = req.query.code || null;

  const postOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
    },
    json: true
  };

  request.post(postOptions, (err, response, body) => {
    if(!err && res.statusCode === 200) {
      const access_token = body.access_token;
      const refresh_token = body.refresh_token;

      res.redirect(`/dashboard#` + querystring.stringify({access_token, refresh_token}));
    }
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => console.log("Server is running on port " + PORT));
