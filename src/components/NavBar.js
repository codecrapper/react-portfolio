import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar-main">
            <div className="main-logo">
                <Link to="/"><img className="logo" src="https://spring.io/img/homepage/icon-spring-framework.svg" alt="logo" /></Link>
            </div>
            <ul className="nav-list">
                <li className="nav-list__item"><Link to="/#work" className="navbar-a">Work</Link></li>
                <li className="nav-list__item"><Link to="/#projects" className="navbar-a">Projects</Link></li>
                <li className="nav-list__item"><Link to="#contact" className="navbar-a">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;