'use strict'

//const article = require('../models/article')
var Comment = require('../models/comment')

//Creamos un objeto para disponer de todos los métodos de ruta que vamos a definir

var controller = {

  //Método para guardar un comentario:

  save: (req, res) => {
    var params = req.body

    var comment = new Comment()
    //Asignamos los valores:
    comment.articletitle = params.articletitle
    comment.contentC = params.contentC
    comment.authorC = params.authorC
    //Guardamos el comentario
    comment.save((err, commentStored)=>{

      if(err || !commentStored){
        return res.status(404).send({
          status: 'error',
          message: 'El comentario no se ha guardado'
        })
      }

      return res.status(200).send({
        status:'success',
        commentStored
      })

    })

  },


  //Método para listar los comentarios:

  getComments: (req, res) => {
    var query = Comment.find({})

    query.sort('-date').exec((err, comments)=>{

      if(err){
        return res.status(500).send({
          status: 'error',
          message: 'Error al extraer los datos'
        })
      }

      if(!comments){
        return res.status(404).send({
          status: 'error',
          message: 'No hay comments para mostrar'
        })
      }

      return res.status(200).send({
        status: 'success',
        comments
      })
    })

  },


  //Método para eliminar un commentario:

  delete: (req, res)=>{
    //Recoger el id a través de la url:
    var commentId = req.params.id

    Comment.findOneAndDelete({_id: commentId},
      (err, commentRemoved)=>{
        if(err){
          return res.status(500).send({
            status: 'error',
            message: 'Error al eliminar el comentario'
          })
        }

        if(!commentRemoved){
          return res.status(404).send({
            status: 'error',
            message: 'No se ha encontrado el comment a eliminar'
          })
        }

        return res.status(200).send({
          status: 'success',
          comment: commentRemoved
        })
      })
  }

}

module.exports = controller