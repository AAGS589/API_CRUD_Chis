import React from 'react'
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";



class Cuenta extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: window.localStorage.getItem("user"),
            nombre:'',
            apellidoPaterno:'',
            cuenta : []
        }

        let username = window.localStorage.getItem("user")
        APIInvoker.invokeGET(`/users/getUser/${username}`, data => {
            this.setState({
                cuenta : data.data,

            })
            console.log(this.state.cuenta)
        }, error => {

        })

    }



    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }



    render() {
        return (
            <>
                <div className="container my-3 ">
                    <div className="row justify-content-md-center">
                        <div className="col-10">
                <h2>Mi cuenta</h2>
                <For each="item" index="idx" of={ this.state.cuenta } >
                </For>
                <div className="form-floating mb-3">
                    <input  type="email" className="form-control" name="username" id="username"
                           placeholder="Nombre de usuario" value={this.state.username}
                           onChange={this.changeField.bind(this)}/>
                    <label htmlFor="floatingInput">Nombre de usuario</label>
                </div>
                <div className="form-floating mb-3">
                    <For each="item" index="idx" of={ this.state.cuenta } >
                    <input  type="email" className="form-control" name="name" id="name"
                         value={item.nombre}    onChange={this.changeField.bind(this)}/>
                    </For>
                    <label htmlFor="floatingInput">nombre</label>

                </div>
                <div className="form-floating">
                    <For each="item" index="idx" of={ this.state.cuenta } >
                    <input key={idx} type="email" className="form-control" name="apellidoPaterno" id="apellidoPaterno"
                           value={item.apellidoPaterno} onChange={this.changeField.bind(this)}/>
                    </For>
                    <label htmlFor="floatingInput">Apellido Pateno</label>
                </div>

                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary btn-sm my-1"
                    >Actualizar
                    </button>
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary btn-sm my-1"
                    >Cambiar contraseña
                    </button>
                </div>

                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-danger btn-sm my-1"
                    >Eliminar Cuenta
                    </button>

                </div>

                        </div>
                    </div>
                </div>
            </>

        )
    }
}
export default Cuenta;