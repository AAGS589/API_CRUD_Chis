import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import Header from "./Header";


class TablaUsuarios extends React.Component{
    constructor(props) {
        super(props);
        this.state =
            {
                idUser : '',
                idRol : '',
                nombre : '',
                apellidoPaterno : '',
                username: '',
                users : []

            }

        this.users = []
        APIInvoker.invokeGET('/users/getAllUsers' , data => {
            this.setState({
                users : data.data

            })
            console.log(this.state.users)
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



    delete(idUsers,e) {
        e.preventDefault()
        let idUser = idUsers

        APIInvoker.invokeDELETE(`/users/deleteUser/${idUser}`,idUser,data=>{
            alert(data.message)
        }, error => {
            alert(error.message )
        })


        APIInvoker.invokeGET('/users/getAllUsers' , data => {
            this.setState({
                users : data.data

            })
            console.log(this.state.users)
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
                                        <h1>Usuarios <i className="fa fa-box"></i></h1>
                                        <h3>Tabla de Usuarios<i className="fa fa-box"></i></h3>
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>idUsuario</th>
                                                    <th>idRol</th>
                                                    <th>Nombre Completo</th>
                                                    <th>ApellidoPaterno</th>
                                                    <th>Nombre de usuario</th>
                                                    <th>Editar</th>
                                                    <th>Eliminar</th>
                                                </tr>
                                                </thead>
                                                <tbody onChange={this.changeField.bind(this)} >
                                                <For each="item" index="idx" of={ this.state.users } >
                                                    <tr>
                                                        <td key={idx}  name="idUser" id="idUser"  onChange={this.changeField.bind(this)}>{item.idUser}</td>
                                                        <td key={idx}  name="idRol" id="idRol"  onChange={this.changeField.bind(this)}>{item.idRol}</td>
                                                        <td key={idx}  name="nombre" id="nombre"  onChange={this.changeField.bind(this)}>{item.nombre}</td>
                                                        <td key={idx}  name="apellidoPaterno" id="apellidoPaterno"  onChange={this.changeField.bind(this)}>{item.apellidoPaterno}</td>
                                                        <td key={idx}  name="username" id="username"  onChange={this.changeField.bind(this)}>{item.username}</td>
                                                        <td>
                                                            <a type="submit" className="btn btn-warning"  >
                                                                <i className="fa fa-edit" >Editar</i>
                                                            </a>
                                                        </td>
                                                        <td >

                                                            <button type='submit' className="btn btn-danger" onClick={this.delete.bind(this,item.idUser)} >
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
export default TablaUsuarios;