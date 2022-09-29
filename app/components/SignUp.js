import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'
import '../estilos/signUp.css'
class SignUp extends React.Component {

    constructor() {
        super()
        this.state  = {
            nombre : '',
            apellidoPaterno : '',
            username : '',
            password : '',

        }
        this.status = false
        this.usernameOk = false


    }

    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    validateUsername(e) {
        let username = this.state.username
        if (username) {
            APIInvoker.invokeGET(`/users/usernameValidate/${username}`,data => {
                this.username.innerHTML = '* El nombre de usuario no está disponible'
                this.usernameOk = false
            }, error => {
                this.username.innerHTML = '* El nombre de usuario está disponible'
                this.usernameOk =  true
            })
        } else
            this.usernameOk = false
    }

    crearCuenta(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status && this.usernameOk) {
            let user = {
                idRol: 1,
                nombre: this.state.nombre,
                apellidoPaterno: this.state.apellidoPaterno,
                username: this.state.username,
                password: this.state.password
            }

            APIInvoker.invokePOST('/users/signup',user,data=>{
                alert(data.message)
                this.usernameOk = false
            }, error => {
                alert(error.message + error.error)
            })
        } else
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
        e.preventDefault()
    }

    validarCampos(){
        let estado = true;


        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.apellidoPaterno.length === 0) {
            this.apellidoPaterno.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.apellidoPaterno.innerHTML = ''

        if (this.state.username.length === 0) {
            this.username.innerHTML = '* Campo obligatorio'
            estado = false;
        }

        if (this.state.password.length === 0) {
            this.password.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.password.innerHTML = ''

        if (estado === false)
            this.status = false
        else
            this.status = true
    }

    render(){
        return (
            <div className="body-sign">
                <div className="titulo">
                    <h1>Registro de usuarios</h1>
                </div>
                <div className="main">
                <form onSubmit={this.crearCuenta.bind(this)}className="Formulario">

                    <div>
                        <label className="label" htmlFor='nombre'>Nombre</label>
                        <input className="input" type='text'
                               id='nombre'
                               name='nombre'
                               placeholder='Ingrese su nombre'
                               value={this.state.nombre}
                               onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.nombre = self}></label>
                    </div>

                    <div>
                        <label className="label" htmlFor='apellidoPaterno'>Apellido paterno</label>
                        <input  className="input" type='text'
                                id='apellidoPaterno'
                                name='apellidoPaterno'
                                placeholder='Ingrese sus apellidos'
                                value={this.state.apellidoPaterno}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.apellidoPaterno = self}></label>
                    </div>

                    <div>
                        <label className="label" htmlFor='username'>Nombre de usuario</label>
                        <input  className="input" type='text'
                                id='username'
                                name='username'
                                placeholder='Ingrese su nombre de usuario'
                                value={this.state.username}
                                ref={self => this.inputUsername = self}
                                onChange={this.changeField.bind(this)}
                                onBlur={this.validateUsername.bind(this)}/>
                        <label ref={self=> this.username = self}></label>
                    </div>

                    <div>
                        <label className="label" htmlFor='password'>Contraseña</label>
                        <input  className="input" type='password'
                                id='password'
                                name='password'
                                placeholder='Ingrese su contraseña'
                                value={this.state.password}
                                onChange={this.changeField.bind(this)}/>
                        <label ref={self=> this.password = self}></label>
                    </div>

                    <div className="boton-registro">
                    <button  className="btn btn-sign"
                        onClick={this.crearCuenta.bind(this)}>
                        Registrarse
                    </button>
                    </div>
                    <div ref={self => this.messageError = self}></div>
                </form>
                </div>
            </div>
        )
    }
}

export default SignUp;