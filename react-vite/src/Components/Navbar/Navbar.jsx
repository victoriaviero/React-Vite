import React from "react"
import './Navbar.css'
 function Navbar () {

    return (
        <nav className="navbar">
            <div >
                <div className="navbar-logo">logo</div>
            </div>
            <ul className="navbar-menu">
                <li className="hogar"></li>
                <li className="computacion"></li>
                <li className="set/stream"></li>
            </ul>
        </nav>
    )
 }
 export default Navbar