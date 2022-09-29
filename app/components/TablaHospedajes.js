import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import AgregarLugar from "./AgregarLugar";
import {Link} from "react-router-dom";
import EditarLugar from "./EditarLugar";
import Header from "./Header";


class TablaHospedajes extends React.Component{

    constructor(props) {
        super(props);
        this.state =
            {
                idHospedajes : '',
                nombre : '',
                descripcion : '',
                ubicacion: '',
                costo : '',
                imagen : '',
                tipoHospedaje : '',
                hospedajes : []

            }

        this.hospedajes = []
        APIInvoker.invokeGET('/hospedajes/getAllHospedajes' , data => {
            this.setState({
                hospedajes : data.data

            })
            console.log(this.state.hospedajes)
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
        console.log('antes del componente')
    }



    delete(idHospedaje,e) {
        e.preventDefault()
        let idHospedajes = idHospedaje

        APIInvoker.invokeDELETE(`/hospedajes/deleteHospedaje/${idHospedajes}`,idHospedajes,data=>{
            alert(data.message)
        }, error => {
            alert(error.message )
        })


        APIInvoker.invokeGET('/hospedajes/getAllHospedajes' , data => {
            this.setState({
                hospedajes : data.data

            })
            console.log(this.state.hospedajes)
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
                                        <h1>Hospedajes <i className="fa fa-box"></i></h1>
                                        <h3>Tabla de hospedajes<i className="fa fa-box"></i></h3>
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>idHospedajes</th>
                                                    <th>Nombre del hospedaje</th>
                                                    <th>Descripcion del hospedaje</th>
                                                    <th>Ubicacion</th>
                                                    <th>Tipo de Hospedaje</th>
                                                    <th>Costos</th>
                                                    <th>Imagen del hospedaje por URL</th>
                                                    <th>Editar</th>
                                                    <th>Eliminar</th>
                                                </tr>
                                                </thead>
                                                <tbody onChange={this.changeField.bind(this)} >
                                                <For each="item" index="idx" of={ this.state.hospedajes } >
                                                    <tr>

                                                        <td key={idx}  name="idHospedajes" id="idHospedajes"  onChange={this.changeField.bind(this)}>{item.idHospedajes}</td>
                                                        <td key={idx}  name="nombre" id="nombre"  onChange={this.changeField.bind(this)}>{item.nombre}</td>
                                                        <td key={idx}  name="descripcion" id="descripcion"  onChange={this.changeField.bind(this)}>{item.descripcion}</td>
                                                        <td key={idx}  name="ubicacion" id="ubicacion"  onChange={this.changeField.bind(this)}>{item.ubicacion}</td>
                                                        <td key={idx}  name="tipoHospedaje" id="tipoHospedaje"  onChange={this.changeField.bind(this)}>{item.tipoHospedaje}</td>
                                                        <td key={idx}  name="costo" id="costo"  onChange={this.changeField.bind(this)}>{item.costo}</td>
                                                        <td  name="imagen" id="imagen" value={this.state.imagen} onChange={this.changeField.bind(this)}>
                                                            <img key={idx} value={item.imagen}  src={item.imagen}  alt="..." width="250" height="150"/>
                                                        </td>
                                                        <td>

                                                            <Link to={/editarlugar/+item.idHospedajes} >

                                                                <a type="submit" className="btn btn-warning"  >
                                                                    <i className="fa fa-edit" >Editar</i>
                                                                </a>
                                                            </Link>
                                                        </td>
                                                        <td >

                                                            <button type='submit' className="btn btn-danger" onClick={this.delete.bind(this,item.idHospedajes)} >
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

export default TablaHospedajes;