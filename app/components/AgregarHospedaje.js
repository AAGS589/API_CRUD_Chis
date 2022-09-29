import React from 'react'
import Header from "./Header";
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";

class AgregarHospedaje extends React.Component{
    constructor() {
        super();
        this.state =
            {
                idHospedajes: '',
                nombre: '',
                descripcion: '',
                ubicacion: '',
                costo: '',
                imagen: '',
                tipoHospedaje: '',

            }
        this.status = false
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
    crearHospedaje(e){
        this.messageError.innerHTML = ''
        this.validarCampos()
        if (this.status) {
            let hospedaje = {
                idHospedajes: 0,
                nombre: this.state.nombre,
                descripcion: this.state.descripcion,
                costo: this.state.costo,
                imagen: this.state.imagen,
                ubicacion: this.state.ubicacion,
                tipoHospedaje: this.state.tipoHospedaje
            }
            APIInvoker.invokePOST('/hospedajes/agregar',hospedaje,data=>{
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

        if (this.state.costo.length === 0) {
            this.costo.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.costo.innerHTML = ''

        if (this.state.tipoHospedaje.length === 0) {
            this.tipoHospedaje.innerHTML = '* Campo obligatorio'
            estado = false;
        } else
            this.tipoHospedaje.innerHTML = ''


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
                                <h3>Agregar Hospedaje</h3>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre del hospedaje</label>
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
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Agregue costos</label>
                                    <textarea className="form-control" name="costo" id="costo" rows="4" value={this.state.costo} onChange={this.changeField.bind(this)} ></textarea>
                                    <div>  <label ref={self => this.costo = self}></label></div>
                                </div>


                                <select className="form-select" aria-label="Default select example" name="tipoHospedaje" id="tipoHospedaje" value={this.state.tipoHospedaje} onChange={this.changeField.bind(this)} >
                                    <option selected>Seleccione el tipo de hospedaje</option>
                                    <option value="1">Hotel</option>
                                    <option value="2">Cabaña</option>
                                    <option value="3">Casa de playa</option>
                                </select>
                                <div>  <label ref={self => this.tipoHospedaje = self}></label></div>


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

                                <button className="btn btn-outline-dark"  onClick={this.crearHospedaje.bind(this)}>
                                    Agregar
                                </button>
                                <div ref={self => this.messageError = self}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AgregarHospedaje;