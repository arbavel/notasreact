
import logo from '../assets/images/logo.svg'
import {NavLink} from 'react-router-dom'

const Header = () => {

  return(

    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">
        <NavLink to="A" className="navbar-brans">crear
          <img className='App-logo' src={logo} alt='logo' width='40' />artículo
        </NavLink>
        <NavLink to="C" id='com' className="navbar-brans">crear
          <img className='App-logo' src={logo} alt='logo' width='40' />comentario
        </NavLink>
        <ul className='navbar-nav'>
          <li className='nav-item'>
          <NavLink to="/A/articles" className="nav-link">Articles</NavLink>

          <NavLink to="/C/comments" className="nav-link">Comments</NavLink>

          </li>
        </ul>
      </div>

    </nav>
  );

}


export default Header