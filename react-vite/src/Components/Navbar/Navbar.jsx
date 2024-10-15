import './Navbar.css'
import imagenCarrito from '../../assets/img/carrito.png'
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom"


function Navbar({Carrito, totalCarrito}) {

    return (
        <nav className="navbar">
            <img className="nav-logo" src={logo} alt="logo" />
            <div className="nav-carrito-content">
                <img className="nav-carrito" src={imagenCarrito} alt="carrito" />
                <span className="nav-carrito-total"> {totalCarrito}</span>
            </div>
            <div className="nav-button">
                <Link to='/'> Gaming </Link>
                <Link to='/pagerandom'> Random </Link>
            </div>
        </nav>
    )
}
export default Navbar