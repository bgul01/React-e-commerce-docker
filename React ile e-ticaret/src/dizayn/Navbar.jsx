import React, { useState } from 'react'
import '../assets/navbar.css'
import { IoCartOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)





  return (
    <div className="container">
      <nav className="navbar Logo" role="navigation" aria-label="main navigation">
        <div className="navbar-brand Logo  ">

          <Link to="/"> <img src={Logo} className='logo' alt="Bulma Logo" /></Link>



          <a
            role="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`navbar-burger ${menuOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={menuOpen}
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu  ${menuOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">

            <Link className='navbar-item ' to="/">Anasayfa</Link>

            <Link className='navbar-item ' to="/Kolonya">Kolonya</Link>


            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Kişisel Bakım
              </a>
              <hr className="navbar-divider" />
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#">
                  Ağız Bakım
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#">
                  Saç Bakım
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#">
                  Parfüm
                </a>


              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">

                <Link className='button' to="/Login">   <IoPerson /></Link>



                <Link className='button' to="/Card"> <IoCartOutline /></Link>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>




  )
}

export default Navbar