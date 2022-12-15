import { Link } from "react-router-dom"
const Article = ({ id, articleData, delArticle }) => {

  const { title, _id, date, content, author } = articleData

  const formatDate = (date) => {
    return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4)
  }


  const del = () => {
    delArticle(id)
  }

  return (

    <div className="col">
      <div className="card mx-auto mb-3">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="card-header">
          <h3 className="card-title">{_id}</h3>
        </div>
        <div className="card-body">
          <label htmlFor="" className="card-text text-start">{content}</label>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-pub list-group-item">Publicado el: {formatDate(date)}</li>
          <li className="list-pub list-group-item">Autor: {author}</li>
        </ul>
        <div className="card-footer">
          <button className="btn btn-danger btn-sm " type="button" onClick={del}>Eliminar</button>
        </div>

        {/* <div className="card-footer">
          <button className="btn btn-danger btn-sm " type="button" >comments</button>
        </div> */}

        <Link to={`/Verarticle/${_id}`}><li className="btn btn-info">Ver</li></Link>



      </div>
    </div>

  )

}


export default Article