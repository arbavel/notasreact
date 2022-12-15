
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import New from './components/New'
import NewC from './components/NewC'
import Articles from './components/Articles'
import VerArticle from './components/Articles'
import Verarticle from './Verarticle'
import Comments from './components/VerArticle'
import { MenuConceptos } from './MenuConceptos'


const Router = () => {

  console.log("Router ")

  return (
    <BrowserRouter>

      <Header />
      <MenuConceptos />

      <Routes>

        <Route exact path='/A' element={<New />} />
        <Route exact path='/C' element={<NewC />} />
        <Route exact path='/A/articles' element={<Articles />} />
        <Route exact path='/C/comments' element={<Comments />} />
        <Route exact path='/Verarticle/:id' element={<Verarticle />} />

      </Routes>

    </BrowserRouter>
  )
}

export default Router