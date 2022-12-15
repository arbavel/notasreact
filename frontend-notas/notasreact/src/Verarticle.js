import { useParams } from "react-router-dom"

console.log("verarticle.js new")
function Verarticle(){

  const params = useParams()
  console.log(params)

  return(
    <div>
      <h2>verarticle en vistas</h2>
      <h3>el id es : {params.id}</h3>
    </div>
  )
}


export default Verarticle