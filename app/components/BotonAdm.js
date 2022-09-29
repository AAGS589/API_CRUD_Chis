import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";




class BotonAdm extends React.Component{

    constructor(props) {
        super(props);
        this.state =
            {
                Rol: []

            }

        let username = window.localStorage.getItem("user")
        APIInvoker.invokeGET(`/users/getIdRol/${username}`, data => {
                this.setState({
                    Rol : data.data
                })
                console.log(this.state.Rol)

  let userRol = this.state.Rol.map(Rol => Rol.idRol)
                window.localStorage.setItem('idRol',userRol)


            },
            error => {
                this.label.innerHTML = 'La cuenta de usuario no existe'
            })






//{this.state.Rol.map(IdRol => <label key={IdRol} >{IdRol.idRol}</label>)}
        //{IdRol.idRol}
    }


    render() {
        return(
            <>
                {
                    this.state.Rol.map(IdRol  =>
                        <Choose>
                            <When key={IdRol} condition={IdRol.idRol===2} >
                                <Link key={IdRol} to='/pageadm' >
                                            <button  className="btn btn-dark" type="button">Administracion</button>
                                        </Link>
                                   </When>
                            <Otherwise> </Otherwise>
                        </Choose>


                    )
                }
            </>



        )
    }
}
export default BotonAdm;