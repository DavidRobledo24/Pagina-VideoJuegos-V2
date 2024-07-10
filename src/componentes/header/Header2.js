import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LoginIcon from '@mui/icons-material/Login';
import Cookie from 'universal-cookie';
import { Link } from "react-router-dom"


function Header2() {

    const cookie = new Cookie();
    const email = cookie.get('email');
    const nombres = cookie.get('nombres');
    const apellidos = cookie.get('apellidos');

    return (
        <div className="contenedor">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="logo" src="logo2.jpg" alt="logo"/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <AttachMoneyIcon/>
                                <a className="nav-link"> Ofertas </a>
                            </li>
                            <li className="nav-item">
                                <AddIcCallIcon/> 
                                <a className="nav-link"> Contacto </a>
                            </li>
                            <Link to="/">
                            <li className="nav-item">
                                <LoginIcon/>
                                <a className="nav-link"> cerrar sesion</a>
                            </li>
                            </Link>
                        </ul>
                            <p><h4>Bienvenudo</h4> <br/>{nombres}<br/>{apellidos}<br/>{email}</p>
                        <form className="d-flex" role="search">
                            
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header2