import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GlobalC from '../GlobalC'
import Comment from './Comment'

const Comments =()=>{

  const [comments, setComments] = useState([])
  const url = GlobalC.url

  useEffect(() => {
    getComments()
    console.log(comments)

  }, [comments.length])


  //Obtenemos los comments
  console.log("19 Comments.js comments.length: "+comments.length)
  const getComments=()=>{
    axios.get(url + 'comments').then(res=>{
      setComments(res.data.comments)
    })
  }

  //Eliminamos un comment a través de su id:
  const deleteComment=(id)=>{
    const idComment=comments[id]._id
    axios.delete(url + 'deleteC/' + idComment).then(res => {
      getComments()
    })
  }


  return(
    <div className="publicaciones">

      <h1 className="mt-5">Comments</h1>

      <div className="container mt-3">

        <div className="row rowcols-1 row-cols-md-2 row-cols-lg-2">

          {
            comments.length > 0 ? (

              comments.map((comment, i)=>{

                return(

                  <Comment
                    key={i}
                    id={i}
                    commentData={comment}
                    delComment={deleteComment}
                  />

                )

              })
            ) : (
              <h3 className='mx-auto'>No hay comentarios que mostrar</h3>
            )
          }

        </div>

      </div>
    </div>
  )
}


export default Comments