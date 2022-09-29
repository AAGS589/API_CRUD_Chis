import React from "react";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";
import {Link} from "react-router-dom";
class EditarLugar extends React.Component{

constructor(props) {
    super(props);
    this.state = {
        idLugares : '36',
        nombre : 'beta',
        descripcion : 'a',
        imagen : 'b',
        ubicacion: 'c',

    }

let idLugar = props.match.params.idLugares;
    APIInvoker.invokeGET(`/lugares/getLugar/${idLugar}` , data => {
        this.setState({
          idLugares : '36',
            nombre : 'beta',
descripcion: 'a',
            imagen : 'b',
            ubicacion : 'c'

        })

    }, error => {

    })


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

    editarLugar(e){

            let lugar = {
                idLugares: this.state.idLugares,
                nombre: this.state.nombre,
                descripcion: this.state.descripcion,
                imagen: this.state.imagen,
                ubicacion: this.state.ubicacion
            }
            APIInvoker.invokePUT('/lugares/editar',lugar,data=>{
                alert(data.message)
            }, error => {
                alert(error.message + error.error)
            })


        e.preventDefault()
    }




    changeField(e) {
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }





    render() {

        return(

            <div >
<div><h2>Editar Lugar</h2></div>
                <div className="mb-3">

                    <label   className="form-label">id</label>

                    <input   name="idLugares" id="idLugares" type="email" className="form-control"
                           placeholder="Id definido "  value={this.state.idLugares} onChange={this.changeField.bind(this)}/>

                </div>

                <div className="mb-3">

                <label  className="form-label">Nombre del Lugar</label>
                <input  name="nombre"  type="email" className="form-control" id="nombre"
                       placeholder="Escriba el nombre "  value={this.state.nombre} onChange={this.changeField.bind(this)}/>
            </div>

                <div className="mb-3">
                    <label  className="form-label">Ubicacion</label>

                    <input name="ubicacion" type="email" className="form-control" id="ubicacion"
                           placeholder="Escriba la ubicacion "  value={this.state.ubicacion} onChange={this.changeField.bind(this)} />

                </div>
                <div className="mb-3">
                    <label  className="form-label">Imagen por url</label>

                    <input name="imagen"  type="email" className="form-control" id="imagen"
                           placeholder="Añade la ubicacion "  value={this.state.imagen} onChange={this.changeField.bind(this)}/>

                </div>
                <div className="mb-3">
                    <label  className="form-label">Descripcion</label>

                    <textarea  name="descripcion" className="form-control" id="descripcion" rows="3"
                               placeholder="Escriba la descripcion "  value={this.state.descripcion} onChange={this.changeField.bind(this)}/>

                </div>
<div className="d-grid my-2">
    <button type="button" className="btn btn-primary btn-sm"  onClick={this.editarLugar.bind(this)}
>Actualizar
</button>    </div>

                <div className="d-grid">
                    <button type="button" className="btn btn-primary btn-sm"
                    >Cancelar
                    </button> </div>

            </div>

        )
    }
}
export default EditarLugar;