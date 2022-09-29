import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import Header from "./Header";


class AgregarRestaurante extends React.Component{

    constructor() {
        super();
        this.state =
            {
                idRestaurantes: '',
                nombre: '',
                descripcion: '',
                ubicacion: '',
                horarios: '',
                imagen: ''


            }
        this.status = false
    }


    crearRestaurante(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status) {
            let restaurante = {
                idRestaurantes: 0,
                nombre: this.state.nombre,
                descripcion: this.state.descripcion,
                horarios: this.state.horarios,
                imagen: this.state.imagen,
                ubicacion: this.state.ubicacion,
            }
            APIInvoker.invokePOST('/restaurantes/agregar',restaurante,data=>{
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

        if (this.state.nombre.length === 0) {
            this.nombre.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.nombre.innerHTML = ''

        if (this.state.descripcion.length === 0) {
            this.descripcion.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.descripcion.innerHTML = ''

        if (this.state.imagen.length === 0) {
            this.imagen.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.imagen.innerHTML = ''

        if (this.state.ubicacion.length === 0) {
            this.ubicacion.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.ubicacion.innerHTML = ''

        if (this.state.horarios.length === 0) {
            this.horarios.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.horarios.innerHTML = ''



        if (estado === false)
            this.status = false
        else
            this.status = true
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
                <div>
                    <div className="container my-3 ">
                        <div className="row justify-content-md-center">
                            <div className="col">
                                <h3>Agregar Restaurante</h3>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre del Restaurante</label>
                                    <input type="email" className="form-control" name="nombre" id="nombre"
                                           placeholder="Nombre del hospedaje" value={this.state.nombre} onChange={this.changeField.bind(this)} />
                                    <div>  <label ref={self => this.nombre = self}></label></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Ubicacion</label>
                                    <input type="email" className="form-control" name="ubicacion" id="ubicacion"
                                           placeholder="Agregue la ubicacion" value={this.state.ubicacion} onChange={this.changeField.bind(this)} />
                                    <div>  <label ref={self => this.ubicacion = self}></label></div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Agregue Horarios</label>
                                    <textarea className="form-control" name="horarios" id="horarios" rows="4" value={this.state.horarios} onChange={this.changeField.bind(this)} ></textarea>
                                    <div>  <label ref={self => this.horarios = self}></label></div>
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Imagen</label>
                                    <input type="email" className="form-control" name="imagen" id="imagen"
                                           placeholder="Agrege la imagen" value={this.state.imagen} onChange={this.changeField.bind(this)} />
                                    <div>  <label ref={self => this.imagen = self}></label></div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label"> Descripcion</label>
                                    <textarea className="form-control"  name="descripcion" id="descripcion" rows="7"  value={this.state.descripcion} onChange={this.changeField.bind(this)} ></textarea>
                                    <div>  <label ref={self => this.descripcion = self}></label></div>
                                </div>
                                <div className="d-grid gap-2 my-3">
                                <button className="btn btn-outline-dark"  onClick={this.crearRestaurante.bind(this)}>
                                    Agregar
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
export default AgregarRestaurante;