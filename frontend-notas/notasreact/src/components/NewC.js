import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import GlobalC from '../GlobalC'

const NewC = () => {

  const url = GlobalC.url

  const [comment, setComment] = useState({
    articletitle: null,
    articleId: null,
    contenC: null,
    authorC: null,
  })

  const [redirect, setRedirect] = useState(false)


  //Referencia de los datos del formulario
  let articletitleRef = React.createRef()
  let articleIdRef = React.createRef()
  let contentCRef = React.createRef()
  let authorCRef = React.createRef()

  const changeState = () => {

    setComment({
      articletitle: articletitleRef.current.value,
      articleId: articleIdRef.current.value,
      contentC: contentCRef.current.value,
      authorC: authorCRef.current.value
    })
    console.log("estamos en newC.js 32: " + comment)
  }

  const sendData = (e) => {
    //Evitamos que al recibir los datos se recargue la pantalla:
    e.preventDefault();

    changeState()
    console.log("url en NewC.js 39: " + url)
    //Peticion HTTP por POST para guardar el comment:
    axios.post(url + 'saveC', comment).then(res => {
      setRedirect(true)
      console.log("en NewC.js 43: " + res.data)
    })
  }

  if(redirect){
    console.log("en NewC.js 48: ")
    return <Navigate to="comments" />
  }

  return (

    <div className="nueva-publicacion">

      <div id='formulario' className="card mx-auto mb-2 mt-5"style={{ width: '30em' }}>

        <div id='card-header' className="card-header text-dark">

          <h4>Publicar nuevo comment</h4>

        </div>

        <div className="card-body">

          <form onSubmit={sendData}>

            <div className="mb-3">
              <label htmlFor="">articletitle</label>
              <input type="text" className='form-control' id='articletitle' name='articletitle' ref={articletitleRef} onChange={changeState} required />

            </div>

            <div className="mb-3">
              <label htmlFor="">articleId</label>
              <input type="text" className='form-control' id='articleId' name='articleId' ref={articleIdRef} onChange={changeState} required />

            </div>

            <div className="mb-3">
              <label htmlFor="">ContenidoC</label>
              <textarea className="form-control" id="contentC" name="contentC" rows="3" cols="30" ref={contentCRef} onChange={changeState} required />
            </div>

            <div className="mb-3">
              <label htmlFor="">AutorC</label>
              <input type="text" className="form-control" id="autorC" name="autorC" ref={authorCRef} onChange={changeState} required />
            </div>

            <div className="mb-3">
              <input type="submit" className="form-control btn btn-primary" id="publish" value="PublicarC" />
            </div>

          </form>
        </div>

      </div>

    </div>

  )

}


export default NewC