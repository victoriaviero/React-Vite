import React from "react"
import './Navbar.css'
import imagenCarrito from '../../assets/img/carrito.png'
import logo from '../../assets/img/logo.png'
function Navbar() {

    return (
        <nav className="navbar">
            <img className="nav-logo" src={logo} alt="logo" />
            <img className="nav-carrito" src={imagenCarrito} alt="carrito" />
            <div className="nav-button">
                <button className="button1">Gaming</button>
                <button className="button2">Escritorios Gaming</button>
            </div>
        </nav>
    )
}
export default Navbar