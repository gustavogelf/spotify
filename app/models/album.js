'use strict';

let mongoose = require('mongoose');
let {Schema} = mongoose;

let schema = new Schema({
  album_type: String,
  artists: Object,
  available_markets: [String],
  external_urls: {
    spotify: String
  },
  images: {
    height: Number,
    url: String,
    width: Number,
  },
  href: String,
  id: String,
  release_date: String,
  release_date_precision: String,
  type: String,
  name: String,
  uri: String,
});

Object.assign(schema.statics, {
  updateOrCreate
});

async function updateOrCreate(data) {
  let {id} = data;
  let options = {
    new: true,
    upsert: true,
    runValidators: true
  };
  return await this.findOneAndUpdate({id}, {$set: data}, options);
}

module.exports = mongoose.model('Albums', schema);
