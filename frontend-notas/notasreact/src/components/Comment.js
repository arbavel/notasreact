
const Comment = ({ id, commentData, delComment }) => {

  const { articleId, articletitle, date, contentC, authorC } = commentData


  const formatDate = (date) => {
    return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4)
  }

  const del = () => {
    delComment(id)
  }

  return (

    <div className="col">
      <div className="card mx-auto mb-3">
        <div className="card-header">
          <h3 className="card-title">{articletitle}</h3>
        </div>
        <div className="card-header">
          <h3 className="card-title">{articleId}</h3>
        </div>
        <div className="card-body">
          <label htmlFor="" className="card-text text-star">    {contentC}</label>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-pub list-group-item">Publicado el: {formatDate(date)}</li>
          <li className="list-pub list-group-item">Autor: {authorC}</li>
        </ul>
        <div className="card-footer">
          <button className="btn btn-danger btn-sm " type="button" onClick={del}>Eliminar</button>
        </div>
      </div>
    </div>

  )
}


export default Comment

