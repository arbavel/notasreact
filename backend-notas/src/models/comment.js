'use strict'

const mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  articletitle: String,
  articleId: {type: Schema.ObjectId, ref: "Article"},
  date: {type:Date, default: Date.now},
  contentC: String,
  authorC: String
})

module.exports = mongoose.model('Comment', CommentSchema)