import React from "react";
import SupervisorAccounts from '../assets/icons/supervisor_account_black_24dp.svg'
import IconPlaces from '../assets/icons/place_black_24dp.svg'
import Iconhoteles from '../assets/icons/hotel_black_24dp.svg'
import IconRestaurant from '../assets/icons/restaurant_black_24dp.svg'
import Lugar from "./Lugar";
import Hoteles from "./Hoteles";
import {Link} from "react-router-dom";
import Header from "./Header";

class PageAdm extends React.Component{
constructor() {
    super();
    this.state={
        servicio: 'lugares'

    }
}

componentDidMount() {
    let Rol = window.localStorage.getItem("idRol")
    if(Rol !=2) {
        this.props.history.push('/main')
    }
    else {
        if(!window.localStorage.getItem("token") && Rol !=2){
            this.props.history.push('/main')
        }
    }

}

    render() {
        return(
            <>
            <Header />
            <div className="container my-3 ">
                <div className="row justify-content-md-center">
                    <div className="col-10">
                        <h3 className="text-center my-4"> Administracion</h3>

                <div className="row row-cols-1 row-cols-md-3 g-7">
                    <div>
                <div className="card my-4 " >
                    <Link to={'/serviciolugar'}>
                    <img src={IconPlaces} className="card-img-top" alt="..." width="250" height="180"/>
                    </Link>
                    <div className="card-body">
                        <h6 className="card-text">Lugares</h6>
                    </div>
                </div>
                    </div>
                    <div>

                        <div className="card my-4 " >
                            <Link to={'/serviciohospedaje'}>
                            <img src={Iconhoteles} className="card-img-top" alt="..." width="250" height="180"/>
                            </Link>
                            <div className="card-body">
                                <h6 className="card-text">Hospedajes</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card my-4" >
                            <Link to={'/serviciorestaurante'}>
                            <img src={IconRestaurant} className="card-img-top" alt="..." width="250" height="180"/>
                            </Link>
                            <div className="card-body">
                                <h6 className="card-text">Restaurantes</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card my-4 " >
                            <Link to={'/serviciousuario'}>
                            <img src={SupervisorAccounts} className="card-img-top" alt="..." width="250" height="180"/>
                            </Link>
                            <div className="card-body">
                                <h6 className="card-text">Usuarios</h6>
                            </div>
                        </div>
                    </div>


                </div>
                </div>
                </div>
            </div>
            </>
        )
    }
}
export default PageAdm;