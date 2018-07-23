'use strict';

const {URLSearchParams} = require('url');
const axios = require('axios');
const url = 'https://accounts.spotify.com/api/token';
const query = 'https://api.spotify.com/v1/search';
const {CLIENT_ID, CLIENT_SECRET} = process.env;

let token;

module.exports = {
  search,
  getAccessToken
};

async function search(q) {

  let {access_token} = await getAccessToken();
  try {
    let {data} = await axios.get(query, {
      params: {
        q,
        type: 'album'
      },
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    });

    return data;
  } catch (err) {
    if (err.response.status === 401) {
      token = null;
      return search(q);
    } else {
      return Promise.reject(err);
    }
  }
}

async function getAccessToken() {
  if (token) {
    return token;
  }

  let params = new URLSearchParams();
  params.append('client_id', CLIENT_ID);
  params.append('grant_type', 'client_credentials');
  params.append('client_secret', CLIENT_SECRET);
  let {data} = await axios.post(url, params.toString(), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return token = data;
}
