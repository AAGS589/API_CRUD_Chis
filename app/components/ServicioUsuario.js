import React from 'react'
import Header from "./Header";
import {Link} from "react-router-dom";
import IconTable from "../assets/icons/table_rows_black_24dp.svg";
import IconAdd from "../assets/icons/add_black_24dp.svg";

class ServicioUsuario extends React.Component{

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
                            <h1 className="text-center my-4">Usuarios</h1>

                            <h3 className="text-center my-4"> Elegir Servicio</h3>
                            <div className="row row-cols-1 row-cols-md-3 g-7">
                                <div>
                                    <div className="card my-4 ">
                                        <Link to='/tablausuarios'>
                                            <img src={IconTable} className="card-img-top" alt="..." width="250" height="180"/>
                                        </Link>
                                        <div className="card-body">
                                            <h6 className="card-text">Tabla Usuarios</h6>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card my-4 ">
                                        <Link to='/agregarusuario'>
                                            <img src={IconAdd} className="card-img-top" alt="..." width="250" height="180"/>
                                        </Link>
                                        <div className="card-body">
                                            <h6 className="card-text">Agregar Usuario</h6>
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
export default ServicioUsuario;