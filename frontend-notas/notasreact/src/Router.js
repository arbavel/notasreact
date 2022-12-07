
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import New from './components/New'
import NewC from './components/NewC'
import Articles from './components/Articles'
import Comments from './components/Comments'


const Router = ()=>{

console.log("Router ")

  return(
    <BrowserRouter>

      <Header />

      <Routes>

        <Route exact path='/A' element={<New />} />
        <Route exact path='/C' element={<NewC />} />
        <Route exact path='/A/articles' element={<Articles />} />
        <Route exact path='/C/comments' element={<Comments />} />
        
      </Routes>

    </BrowserRouter>
  )
}

export default Router