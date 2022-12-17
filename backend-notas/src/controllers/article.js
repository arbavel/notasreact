'use strict'

var Article = require('../models/article')

//Creamos un objeto para disponer de todos los métodos de ruta que vamos a definir

var controller = {

  //Método para guardar un artículo:

  saveA: (req, res) => {
    var params = req.body;

    var article = new Article();
      //Asignamos los valores:
    article.title = params.title;
    article.content = params.content;
    article.author = params.author;
    article.photo = params.photo;
    //Guardamos el artículo
    article.save((err, articleStored)=>{

      if(err || !articleStored){
        return res.status(404).send({
          status: 'error',
          message: 'El artículo no se ha guardado'
        })
      }

      return res.status(200).send({
        status: 'success',
        articleStored
      })

    })

  },

  //Método para listar los artículos:

  getArticles: (req, res)=>{
    var query = Article.find({});

    query.sort('-date').exec((err, articles)=>{

      if (err){
        return res.status(500).send({
          status: 'error',
          message: 'Error al extraer los datos'
        })
      }

      if(!articles){
        return res.status(404).send({
          status: 'error',
          message: 'No hay artículos para mostrar'
        })
      }

      return res.status(200).send({
        status: 'success',
        articles
      })
      
    })
  },

  //Método para eliminar un artículo

  deleteA: (req, res)=>{
    // Recoger el id a través de la url:
    var articleId = req.params.id;

    Article.findOneAndDelete({_id: articleId}, (err, articleRemoved)=>{
      if(err){
        return res.status(500).send({
          status: 'error',
          message: 'Error al eliminar el artículo'
        })
      }

      if(!articleRemoved){
        return res.status(404).send({
          status: 'error',
          message: 'No se ha encontrado el artículo a eliminar'
        })
      }

      return res.status(200).send({
        status: 'success',
        article: articleRemoved
      })
    })
  }

}

module.exports = controller;