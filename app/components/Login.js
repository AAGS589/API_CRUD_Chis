import React from 'react'
import update from 'immutability-helper'
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";
import Cuenta from "./Cuenta";
import '../estilos/login.css'

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }
//   if(window.localStorage.getItem("token")) {
//             this.props.history.push('/main')
//         }
//         else {

    componentDidMount() {

            if(!window.localStorage.getItem("token")){
                this.props.history.push('/')
            }

        if(window.localStorage.getItem("token")){
            this.props.history.push('/main')
        }


    }

    usernameValidate(e){
        let username = this.state.username
        APIInvoker.invokeGET(`/users/usernameValidate/${username}`,
            data => {
                //Primera forma de obtener la referencia de un control en el DOM
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = ''
            },
            error => {
                //let label = document.getElementById('usernameMessage')
                this.label.innerHTML = 'La cuenta de usuario no existe'
            })
    }

    iniciarSesion(e){
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        http://localhost:3000/users/login
        APIInvoker.invokePOST('/users/login',user,data => {
            window.localStorage.setItem('token',data.token)
            window.localStorage.setItem('user',user.username)
            this.props.history.push('/main')

        }, error =>{
            this.pass.innerHTML = error.message
        })




    }


    render() {
        return(
            <div className="body-login">
                <h1 className="titulo-login">CONOCE CHIAPAS</h1>
                <div className="row justify-content-center pt-4 mt-4 mr-1">
                    <div className="col-md-4 formulario">
                        <form action="">
                            <div className="form-group text-center">
                                <h2 className="h2Login">Iniciar sesion</h2>
                            </div>
                            <div className="form-group">
                                <label className="label" htmlFor="username">Nombre de usuario</label>
                                <input className="input inputLogin" type="text"
                                       name="username"
                                       id="username"
                                       placeholder="Nombre de Usuario"
                                       value={this.state.username}
                                       onChange={this.changeField.bind(this)}
                                       onBlur={this.usernameValidate.bind(this)}/>
                                <div className="label-error" ref={ self => this.label = self}></div>
                            </div>
                            <div className="form-group ">
                                <label className="label " htmlFor="password">Contraseña</label>
                                <input className="input inputLogin" type="password"
                                       name="password"
                                       id="password"
                                       placeholder="Contraseña"
                                       value={this.state.password}
                                       onChange={this.changeField.bind(this)}/>
                                <div className="label-error" ref={ self => this.pass = self}> </div>
                            </div>
                            <div className="form-group pt-4">
                                <button type="button" className="btn btn-login" onClick={this.iniciarSesion.bind(this)}>Iniciar
                                    sesión
                                </button>
                            </div>
                            <div className="form-group pt-4">
                                <Link to='/register'>
                                    <button type="button" className="btn btn-login">Registrarse</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;