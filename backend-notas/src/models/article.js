'use strict'

const mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  title: String,
  date: {type: Date, default: Date.now},
  content: String,
  author: String,
  photo: {
    type: String,
    trim:true,
    maxlength: 32
  }
});

module.exports = mongoose.model('Article', ArticleSchema);