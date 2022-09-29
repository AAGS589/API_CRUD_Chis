import React from "react";
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";

class DetallesRestaurante extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            nombre : '',
            descripcion : '',
            imagen : '',
            ubicacion: '',
            horarios: '',
            restaurantes : []
        }

        this.restaurantes = []
        let idRestaurante = this.props.idRestaurantes;
        APIInvoker.invokeGET(`/restaurantes/getRestaurante/${idRestaurante}` , data => {
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


    render(){
        return(
            <div >
                <For each="item" index="idx" of={ this.state.restaurantes }>
                    <h2 name="nombre" id="nombre" onChange={this.changeField.bind(this)} >{item.nombre}</h2>
                </For>

                <For each="item" index="idx" of={ this.state.restaurantes }>
                    <img  name="imagen" id="imagen" key={idx} value={item.imagen}  src={item.imagen}  alt="..." width="600" height="400" onChange={this.changeField.bind(this)}/>
                </For>

                <For each="item" index="idx" of={ this.state.restaurantes }>
                    <p name="descripcion" id="descripcion" onChange={this.changeField.bind(this)} >{item.descripcion}</p>
                </For>

                <h4>Ubicacion</h4>
                <For each="item" index="idx" of={ this.state.restaurantes }>
                    <h3  class="text-secondary" name="ubicacion" id="ubicacion" onChange={this.changeField.bind(this)} >{item.ubicacion}</h3>
                </For>

                <h4>Horarios</h4>
                <For each="item" index="idx" of={this.state.restaurantes}>
                    <h6 className="text-secondary" name="horarios" id="horarios"
                        onChange={this.changeField.bind(this)}>{item.horarios}</h6>
                </For>


            </div>

        )
    }
}
export default DetallesRestaurante;