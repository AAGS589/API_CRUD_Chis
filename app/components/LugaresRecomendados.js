import React from "react";
import CardLugar from "./CardLugar";
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'

class LugaresRecomendados extends React.Component {


    constructor(props) {
        super(props);
        this.state =
            {
                idLugares : '',
                nombre : '',
                descripcion : '',
                imagen : '',
                ubicacion: '',
                lugares : []

            }

        this.lugares = []
        APIInvoker.invokeGET('/lugares/getLugaresRecomendados' , data => {
            this.setState({
                lugares : data.data

            })
            console.log(this.state.lugares)
        }, error => {

        })

    }

    render() {
        return(
            <div className="row row-cols-1 row-cols-md-2 g-2  " >
                <For each="item" index="index" of={this.state.lugares} >
                    <CardLugar key={index} value={this.idLugares} idLugares={item.idLugares}  imagen={item.imagen} nombre={item.nombre} descripcion={item.descripcion} ubicacion={item.ubicacion} />
                </For>
            </div>
        )
    }
}

export default LugaresRecomendados;