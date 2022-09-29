import React from "react";
import CardRestaurantes from "./CardRestaurantes";
import APIInvoker from "../utils/APIInvoker";
import CardHospedajes from "./CardHospedajes";


class Restaurante extends React.Component {
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

    render() {
        return(
            <div className="row row-cols-1 row-cols-md-2 g-2  " >
                <For each="item" index="index" of={this.state.restaurantes} >
                    <CardRestaurantes key={index} value={this.idRestaurantes} idRestaurantes={item.idRestaurantes}  imagen={item.imagen} nombre={item.nombre} descripcion={item.descripcion} ubicacion={item.ubicacion} />
                </For>
            </div>
        )
    }


}

export default Restaurante;