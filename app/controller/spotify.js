'use strict';

let Albums = require('../models/album.js');
let Promise = require('bluebird');
let spotifyHelper = require('../helpers/spotify');

module.exports = {
  searchAlbum
};

async function searchAlbum(req, res, next) {
  let {query} = req;
  let response = await spotifyHelper.search(query.q).catch(next);
  Promise.map(response.albums.items, function storeAlbums(album) {
  	return Albums.updateOrCreate(album);
  })
  res.json(response.albums);
}
