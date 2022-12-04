'use strict'

const express = require('express')
const bodyParser = require('body-parser')
//const { json } = require('express')
const mongoose = require('mongoose')


const app = express()

const port = 3900

var url = 'mongodb://127.0.0.1:27017/api_rest_reactnotas';

mongoose.Promise = global.Promise;

var article_routes = require('./routes/article')
var comment_routes = require('./routes/comment')

//para analizar la informacion que estamos enviando y recibiendo a traves de url
app.use(bodyParser.urlencoded({extended: false})) 

//para convertir todo tipo de informacion a json
app.use(bodyParser.json())

//Activamos el CORS para permitir las peticiones AJAX y HTTP desde el frontend:
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

app.use('/api', article_routes);
app.use('/apiC', comment_routes);

mongoose.connect(url, {useNewUrlParser: true}).then(()=>{
  console.log('Conexión a la bd realizada con éxito');
  app.listen(port, ()=>{
    console.log('Lanzando la aplicación en el puerto ' + port);
  })
})