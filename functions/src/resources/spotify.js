'use strict'

const functions = require('firebase-functions')
const SpotifyWebApi = require('spotify-web-api-node')

const firebaseConfig = functions.config()

const { spotify } = firebaseConfig

const clientId = spotify.clientid
const clientSecret = spotify.clientsecret

// Create the api object with the credentials
const Spotify = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: `https://disko.vip/authenticate/spotify`
})
// Want to get the uri the request is coming from so redirectUri can be set accordingly

const OAUTH_SCOPES = [
  'user-read-playback-state',
  'streaming',
  'user-modify-playback-state',
  'user-read-email',
  'app-remote-control'
]

module.exports = {
  Spotify,
  OAUTH_SCOPES
}

// // Retrieve an access token.
// Spotify.clientCredentialsGrant().then(
//   function(result) {
//     const body = result.body;
//     console.log('The access token expires in ' + body['expires_in']);
//     console.log('The access token is ' + body['access_token']);
//
//     // Save the access token so that it's used in future calls
//     Spotify.setAccessToken(body['access_token']);
//   },
//   function(err) {
//     console.log('Something went wrong when retrieving an access token', err);
//   }
// );
