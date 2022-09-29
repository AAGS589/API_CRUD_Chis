import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import Header from "./Header";

class AgregarUsuario extends React.Component{
    constructor() {
        super();
        this.state =
            {

                idUser : '',
                idRol : '',
                nombre : '',
                apellidoPaterno : '',
                username: '',
                password: ''

            }
        this.status = false
        this.usernameOk = false
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


    crearUsuario(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status && this.usernameOk) {
            let user = {
                idUser: 0,
                idRol: this.state.idRol,
                nombre: this.state.nombre,
                apellidoPaterno: this.state.apellidoPaterno,
                username: this.state.username,
                password: this.state.password,
            }
            APIInvoker.invokePOST('/users/agregar',user,data=>{
                alert(data.message)
            }, error => {
                alert(error.message + error.error)
            })
        } else
            this.messageError.innerHTML = 'Los campos marcados con * son obligatorios'
        e.preventDefault()
    }
    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }
    validarCampos(){
        let estado = true;
        if (this.state.idRol.length === 0) {
            this.idRol.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.idRol.innerHTML = ''

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
        } else
            this.username.innerHTML = ''

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



    render() {
        return(
            <>
                <Header />
                <div>
                    <div className="container my-3 ">
                        <div className="row justify-content-md-center">
                            <div className="col">
                                <h3>Agregar Usuario</h3>


                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombres</label>
                                    <input type="email" className="form-control" name="nombre" id="nombre"
                                           placeholder="Agregue sus nombres" value={this.state.nombre} onChange={this.changeField.bind(this)} />
                                    <div>  <label ref={self => this.nombre = self}></label></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Apellido Paterno</label>
                                    <input type="email" className="form-control" name="apellidoPaterno" id="apellidoPaterno"
                                           placeholder="Agregue su apellido paterno" value={this.state.apellidoPaterno} onChange={this.changeField.bind(this)} />
                                    <div>  <label ref={self => this.apellidoPaterno = self}></label></div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Nombre de usuario</label>
                                    <input type="email" className="form-control" name="username" id="username"
                                           placeholder="Agregue su nombre de usuario" value={this.state.username} onChange={this.changeField.bind(this)}  onBlur={this.validateUsername.bind(this)}/>
                                    <div>  <label ref={self => this.username = self}></label></div>
                                </div>


                                <select className="form-select" aria-label="Default select example" name="idRol" id="idRol" value={this.state.idRol} onChange={this.changeField.bind(this)} >
                                    <option selected>Seleccione el rol de Usuario</option>
                                    <option value="1">Usuario Normal</option>
                                    <option value="2">Administrador</option>
                                </select>
                                <div>  <label ref={self => this.idRol = self}></label></div>


                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" name="password" id="password"
                                           placeholder="Agregue su contraseña" value={this.state.password} onChange={this.changeField.bind(this)} />
                                    <div>  <label ref={self => this.password = self}></label></div>
                                </div>
                                <div className="d-grid gap-2 my-3">
                                <button className="btn btn-outline-dark"  onClick={this.crearUsuario.bind(this)}>
                                    Agregar Cuenta
                                </button>
                                <div ref={self => this.messageError = self}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default AgregarUsuario;