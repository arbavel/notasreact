'use strict'

var express = require('express')
var Comment = require('../controllers/comment')

//llamamos al objeto router de express:
var router = express.Router()

//Rutas para los comments:

console.log("Rutas para los comments: routes/comments.js ")

router.post('/saveC', Comment.save)

router.get('/comments', Comment.getComments)

router.delete('/deleteC/:id', Comment.delete)


module.exports = router