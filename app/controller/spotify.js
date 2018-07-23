'use strict';

let spotifyHelper = require('../helpers/spotify');

module.exports = {
  searchAlbum
};

async function searchAlbum(req, res, next) {
  let {query} = req;
  let response = await spotifyHelper.search(query.q).catch(next);

  res.json(response.albums);
}
