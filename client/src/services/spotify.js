import axios from "axios";
import { token } from "./authorization";

const SPOTIFY_API = 'https://api.spotify.com/v1';

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
}

export const getMe = () => axios.get(`${SPOTIFY_API}/me`, { headers });

export const getFollowing = () => axios.get(`${SPOTIFY_API}/me/following?type=artist`, { headers });

export const getPlaylists = () => axios.get(`${SPOTIFY_API}/me/playlists`, { headers });

export const getUserDetails = () => axios.all([getMe(), getFollowing(), getPlaylists()]).then(axios.spread((user, following, playlists) => ({
  user: user.data,
  following: following.data,
  playlists: playlists.data
})));


export const getRecentlyPlayed = () => axios.get('https://api.spotify.com/v1/me/player/recently-played', { headers });

export const getTopArtists = (range, limit) => axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=${limit}`, { headers });

export const getTopTracks = (range, limit) => axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${range}&limit=${limit}&offset=0`, { headers });
