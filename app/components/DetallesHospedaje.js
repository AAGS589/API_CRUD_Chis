import React from "react";
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";

class DetallesHospedaje extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            nombre : '',
            descripcion : '',
            imagen : '',
            ubicacion: '',
            costo: '',
            hospedajes : []
        }

        this.hospedajes = []

        let idHospedaje = this.props.idHospedajes;
        APIInvoker.invokeGET(`/hospedajes/getHospedaje/${idHospedaje}` , data => {
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


    render(){
        return(


            <div >
                <For each="item" index="idx" of={ this.state.hospedajes }>
                    <h2 name="nombre" id="nombre" onChange={this.changeField.bind(this)} >{item.nombre}</h2>
                </For>

                <For each="item" index="idx" of={ this.state.hospedajes }>
                    <img  name="imagen" id="imagen" key={idx} value={item.imagen}  src={item.imagen}  alt="..." width="600" height="400" onChange={this.changeField.bind(this)}/>
                </For>

                <For each="item" index="idx" of={ this.state.hospedajes }>
                    <p name="descripcion" id="descripcion" onChange={this.changeField.bind(this)} >{item.descripcion}</p>
                </For>

                <h4>Ubicacion</h4>
                <For each="item" index="idx" of={ this.state.hospedajes }>
                    <h3  class="text-secondary" name="ubicacion" id="ubicacion" onChange={this.changeField.bind(this)} >{item.ubicacion}</h3>
                </For>
                <h4>Costos</h4>
                <For each="item" index="idx" of={this.state.hospedajes}>
                    <h5 className="text-secondary" name="costo" id="costo"
                        onChange={this.changeField.bind(this)}>{item.costo}</h5>
                </For>

            </div>

        )
    }
}
export default DetallesHospedaje;