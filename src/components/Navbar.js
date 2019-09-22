import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../youth_logo.png'

const Navbar = () => {
    return(
    <nav className="navbar navbar-light navbar-expand-md navbar-light bg-white justify-content-center">
        <div className="container">
            <NavLink className="navbar-brand" to="/">
                <img className="navlogo" height="70" src={Logo} alt="Logo" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" activeClassName="active">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/payment">Payment <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/account">Account <span className="sr-only">(current)</span></NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav w-100 justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Mitiku Wubetie <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Log out <span className="sr-only">(current)</span></NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar