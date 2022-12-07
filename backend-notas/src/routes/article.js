'use strict'

var express = require('express');
var Article = require('../controllers/article');

//llamamos al objeto router de express:
var router = express.Router();

//Rutas para los artículos:

router.post('/saveA', Article.saveA);

router.get('/articles', Article.getArticles);

router.delete('/deleteA/:id', Article.deleteA);


module.exports = router;