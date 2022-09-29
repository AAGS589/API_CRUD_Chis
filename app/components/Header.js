import React from 'react'

import {Link} from "react-router-dom";
import Lugar from "./Lugar";
import LogoPagina from '../assets/icons/LogoPagina.png'
import Account from '../assets/icons/account_circle_black_24dp.svg'
import IconHome from '../assets/icons/home_black_24dp.svg'
import IconPlace from '../assets/icons/place_black_24dp.svg'
import IconHotel from '../assets/icons/hotel_black_24dp.svg'
import IconRestaurant from '../assets/icons/restaurant_black_24dp.svg'
import APIInvoker from "../utils/APIInvoker";
import BotonAdm from "./BotonAdm";
class Header extends React.Component {
    //  <a className="nav-link active " aria-current="page" href="#">Mi cuenta</a>
    cerrarSesion(){
        window.localStorage.clear()
    }
    render() {
        return(
            <header>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to='/main' class="d-grid gap-2">
                                <button className="btn navbar-brand" type="button"> <img  src={LogoPagina}  alt="..." width="90" height="40"/></button>
                            </Link>

                            <Choose>
                                <When  condition={window.localStorage.getItem("token")} >
                                    <div className="btn-group dropstart navbar-brand">
                                        <button className="btn" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            <img src={Account} alt="..." width="50" height="60"/>
                                        </button>
                                        <ul className="dropdown-menu">

                                            <li><a className="dropdown-item" href="#">
                                                <div className="d-grid gap-2">
                                                    <Link to='/micuenta'>
                                                        <button className="btn " type="button">Mi cuenta</button>
                                                    </Link>
                                                </div>
                                            </a></li>


                                            <li><a className="dropdown-item" href="#">
                                                <div className="d-grid gap-2">
                                                    <BotonAdm/>
                                                </div>
                                            </a></li>


                                            <li><a className="dropdown-item" href="#">
                                                <div className="d-grid gap-2">
                                                    <Link to='/login'>
                                                        <button className="btn " type="button"  onClick={this.cerrarSesion.bind(this)}>Cerrar Sesion</button>
                                                    </Link>
                                                </div>
                                            </a></li>

                                        </ul>
                                    </div>

                                </When>
                                <Otherwise>  <button className="btn btn-outline-dark my-3">Iniciar Sesion</button> <button className="btn btn-outline-dark">Registrarse</button> </Otherwise>
                            </Choose>




                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        </div>
                    </nav>
                </div>



                <div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light " >
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/main' class="d-grid gap-2">   <a className="nav-link active" aria-current="page" href="#">

                                        <button type="button" className="btn ">

                                            <img  src={IconHome}  alt="..." width="40" height="40"/>
                                        </button>  Inicio </a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/lugarespage'>
                                        <a className="nav-link active" aria-current="page" href="#">
                                            <button type="button" className="btn ">
                                                <img  src={IconPlace}  alt="..." width="40" height="40"/>
                                            </button>   Turismo  </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/hospedajespage'>
                                        <a className="nav-link active" aria-current="page" href="#">
                                            <button type="button" className="btn ">
                                                <img  src={IconHotel}  alt="..." width="40" height="40"/>
                                            </button>      Hospedajes  </a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/restaurantepage'>
                                        <a className="nav-link active" aria-current="page" href="#">
                                            <button type="button" className="btn ">
                                                <img  src={IconRestaurant}  alt="..." width="40" height="40"/>
                                            </button>  Restaurantes </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar..."
                                   aria-label="Search">
                            </input>
                            <button className="btn btn-outline-dark " type="submit">Buscar</button>
                        </form>

                    </nav>

                </div>

            </header>

        )
    }
};

export default Header;