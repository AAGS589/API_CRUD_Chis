import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import CardLugar from "./CardLugar";
import CardHospedajes from "./CardHospedajes";


class Hospedaje extends React.Component{
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

    render() {
        return(
            <div className="row row-cols-1 row-cols-md-2 g-2  " >
                <For each="item" index="index" of={this.state.hospedajes} >
                    <CardHospedajes key={index} value={this.idHospedajes} idHospedajes={item.idHospedajes}  imagen={item.imagen} nombre={item.nombre} descripcion={item.descripcion} ubicacion={item.ubicacion} />
                </For>
            </div>
        )
    }


}
export default Hospedaje;