import React, {Component} from 'react';
import logo from '../../images/icons/logo.png';
import search from '../../images/icons/search-icon.png';
import cart from '../../images/icons/cart.png';
import Mac from '../MyComponents/pages/Mac';
import {Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
        <div>
            <header className="header-wrapper container-fluid">
      <div className="header-internal-wrapper container py-4 py-md-1 py-lg-2">
        <nav className="d-none d-md-block">
          <ul>
            <li>
              <Link to="/"><img src={logo} alt="apple" /></Link>
            </li>
            <li>
              <Link to='/mac'>Mac</Link>
            </li>
            <li>
              <Link to='/iphone'>iPhone</Link>
            </li>
            <li>
              <Link>iPod</Link>
            </li>
            <li>
              <Link>Watch</Link>
            </li>
            <li>
              <Link>TV</Link>
            </li>
            <li>
              <Link>Music</Link>
            </li>
            <li>
              <Link>Support</Link>
            </li>
              <li><a href="#"
                ><img src={search} alt="search"
              /></a>
            </li>
            <li>
              <a href="#"><img src={cart} alt="cart" /></a>
            </li>
          </ul>
        </nav>

        <nav className=" d-md-none navbar navbar-expand-md navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

      </div>
    </header>
        </div>
    );
}
}
export default Header;
