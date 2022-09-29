import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import AgregarLugar from "./AgregarLugar";
import {Link} from "react-router-dom";
import EditarLugar from "./EditarLugar";
import Header from "./Header";


class TablaLugares extends React.Component{

constructor() {
    super();
    this.state =
        {
            idLugares : '',
            nombre : '',
            descripcion : '',
            imagen : '',
            ubicacion: '',
            lugares : []

        }

    APIInvoker.invokeGET('/lugares/getAllLugares' , data => {
        this.setState({
            lugares : data.data

        })
        console.log(this.state.lugares)
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
console.log('Se hizo un cambio en el componente componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('antes del componente componentWillUnmount')
    }



    delete(idlugar,e) {
        e.preventDefault()
        let idLugares = idlugar

        APIInvoker.invokeDELETE(`/lugares/deleteLugar/${idLugares}`,idLugares,data=>{
            alert(data.message)
        }, error => {
            alert(error.message )
        })


        APIInvoker.invokeGET('/lugares/getAllLugares' , data => {
            this.setState({
                lugares : data.data

            })
            console.log(this.state.lugares)
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
                        <h1>Lugares Turisticos <i className="fa fa-box"></i></h1>
                        <h3>Tabla de lugares<i className="fa fa-box"></i></h3>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>idLugar</th>
                                    <th>Nombre del lugar</th>
                                    <th>Descripcion del lugar</th>
                                    <th>Ubicacion</th>
                                    <th>Imagen del lugar por URL</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                                </thead>
                                <tbody onChange={this.changeField.bind(this)} >
                                <For each="item" index="idx" of={ this.state.lugares } >
                                <tr>

                                    <td key={idx}  name="idLugares" id="idLugares"  onChange={this.changeField.bind(this)}>{item.idLugares}</td>
                                    <td key={idx}  name="nombre" id="nombre"  onChange={this.changeField.bind(this)}>{item.nombre}</td>
                                    <td key={idx}  name="descripcion" id="descripcion"  onChange={this.changeField.bind(this)}>{item.descripcion}</td>
                                    <td key={idx}  name="ubicacion" id="ubicacion"  onChange={this.changeField.bind(this)}>{item.ubicacion}</td>
                                    <td  name="imagen" id="imagen" value={this.state.imagen} onChange={this.changeField.bind(this)}>
                                        <img key={idx} value={item.imagen}  src={item.imagen}  alt="..." width="250" height="150"/>
                                    </td>
                                    <td>

                                        <Link to={/editarlugar/+item.idLugares} >

                                        <a type="submit" className="btn btn-warning"  >
                                            <i className="fa fa-edit" >Editar</i>
                                        </a>
                                        </Link>
                                    </td>
                                    <td >

                                            <button type='submit' className="btn btn-danger" onClick={this.delete.bind(this,item.idLugares)} >
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

export default TablaLugares;