
import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import GlobalA from '../GlobalA'

const New = () => {

  const url = GlobalA.url

  const [article, setArticle] = useState({
    title: null,
    content: null,
    author: null,
    photo: null
  })

  const [redirect, setRedirect] = useState(false)


  //Referencia de los datos del formulario:
  let titleRef = React.createRef()
  let contentRef = React.createRef()
  let authorRef = React.createRef()
  let photoRef = React.createRef()

  const changeState = () => {

    setArticle({
      title: titleRef.current.value,
      content: contentRef.current.value,
      author: authorRef.current.value,
      photo: photoRef.current.value
    });
    console.log("estamos en new.js 32:  " + article);
  }

  const sendData = (e)=>{
    //Evitamos que al recibir los datos se recargue la pantalla:
    e.preventDefault();

    changeState()
    //console.log("url en New.js 39: " + url)
    //Petición HTTP por POST para guardar el artículo:
    axios.post(url + 'saveA', article).then(res=>{
      setRedirect(true)
      //console.log("en New.js 44: "+res.data);
    })
  }

  if(redirect){
    console.log("en New.js 49: " + url)
    return <Navigate to="articles" />
  }

  return (

    <div className="nueva-publicacion">

      <div id="formulario" className="card mx-auto mb-2 mt-5" style={{ width: '30em' }}>

        <div id="card-header"  className="card-header text-dark">

          <h4>Publicar nuevo artículo</h4>

        </div>

        <div className="card-body">

          <form onSubmit={sendData} >

            <div className="mb-3">
              <label htmlFor="">Título</label>
              <input type="text" className="form-control" id="title" name="title" ref={titleRef} onChange={changeState} required />

            </div>
            

            <div className="mb-3">
              <label htmlFor="">Contenido</label>
              <textarea className="form-control" id="content" name="content" rows="3" cols="30" ref={contentRef} onChange={changeState} required />
            </div>

            <div className="mb-3">
              <label htmlFor="">Autor</label>
              <input type="text" className="form-control" id="autor" name="autor" ref={authorRef} onChange={changeState} required />
            </div>



            <div className="mb-3">
              <label htmlFor="">Foto</label>
              <input type="text" className="form-control" id="photo" name="photo" ref={photoRef} onChange={changeState} required />
            </div>



            <div className="mb-3">
              <input type="submit" className="form-control btn btn-primary" id="publish" value="Publicar" />
            </div>

          </form>

        </div>

      </div>

    </div>

  )

}


export default New