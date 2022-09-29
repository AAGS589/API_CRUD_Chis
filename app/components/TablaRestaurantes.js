import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import Header from "./Header";
import {Link} from "react-router-dom";

class TablaRestaurantes extends React.Component{
    constructor(props) {
        super(props);
        this.state =
            {
                idRestaurantes : '',
                nombre : '',
                descripcion : '',
                ubicacion: '',
                horarios : '',
                imagen : '',
                restaurantes : []

            }

        this.restaurantes = []
        APIInvoker.invokeGET('/restaurantes/getAllRestaurantes' , data => {
            this.setState({
                restaurantes : data.data

            })
            console.log(this.state.restaurantes)
        }, error => {

        })

    }
    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Se hizo un cambio en el componente')
    }
    componentWillUnmount() {

    }



    delete(idRestaurante,e) {
        e.preventDefault()
        let idRestaurantes = idRestaurante

        APIInvoker.invokeDELETE(`/restaurantes/deleteRestaurante/${idRestaurantes}`,idRestaurantes,data=>{
            alert(data.message)
        }, error => {
            alert(error.message )
        })


        APIInvoker.invokeGET('/restaurantes/getAllRestaurantes' , data => {
            this.setState({
                restaurantes : data.data

            })
            console.log(this.state.restaurantes)
        }, error => {

        })

    }


    render() {


        return (
            <>
                <Header />
                <div>
                    <div className="container my-3 ">
                        <div className="row justify-content-md-center">
                            <div className="col">
                                <div className="row">
                                    <div className="col-12">
                                        <h1>Restaurantes <i className="fa fa-box"></i></h1>
                                        <h3>Tabla de Restaurantes<i className="fa fa-box"></i></h3>
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>idRestaurantes</th>
                                                    <th>Nombre del Restaurante</th>
                                                    <th>Descripcion del Restaurante</th>
                                                    <th>Ubicacion</th>
                                                    <th>Horarios</th>
                                                    <th>Imagen del restaurante por URL</th>
                                                    <th>Editar</th>
                                                    <th>Eliminar</th>
                                                </tr>
                                                </thead>
                                                <tbody onChange={this.changeField.bind(this)} >
                                                <For each="item" index="idx" of={ this.state.restaurantes } >
                                                    <tr>

                                                        <td key={idx}  name="idRestaurantes" id="idRestaurantes"  onChange={this.changeField.bind(this)}>{item.idRestaurantes}</td>
                                                        <td key={idx}  name="nombre" id="nombre"  onChange={this.changeField.bind(this)}>{item.nombre}</td>
                                                        <td key={idx}  name="descripcion" id="descripcion"  onChange={this.changeField.bind(this)}>{item.descripcion}</td>
                                                        <td key={idx}  name="ubicacion" id="ubicacion"  onChange={this.changeField.bind(this)}>{item.ubicacion}</td>
                                                        <td key={idx}  name="horarios" id="horarios"  onChange={this.changeField.bind(this)}>{item.horarios}</td>
                                                        <td  name="imagen" id="imagen" value={this.state.imagen} onChange={this.changeField.bind(this)}>
                                                            <img key={idx} value={item.imagen}  src={item.imagen}  alt="..." width="250" height="150"/>
                                                        </td>
                                                        <td>
                                                                <a type="submit" className="btn btn-warning"  >
                                                                    <i className="fa fa-edit" >Editar</i>
                                                                </a>
                                                        </td>
                                                        <td >

                                                            <button type='submit' className="btn btn-danger" onClick={this.delete.bind(this,item.idRestaurantes)} >
                                                                <i >Eliminar</i>
                                                            </button>

                                                        </td>

                                                    </tr>
                                                </For>
                                                </tbody>
                                            </table>



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
export default TablaRestaurantes;