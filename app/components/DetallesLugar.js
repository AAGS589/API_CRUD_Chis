import React from 'react'
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import Header from "./Header";
import Lugar from "./Lugar";
import Footer from "./Footer";



class DetallesLugar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            nombre : '',
            descripcion : '',
            imagen : '',
            ubicacion: '',
            lugares : []
        }

        this.lugares = []

        let idLugar = this.props.idLugares;
        APIInvoker.invokeGET(`/lugares/getLugar/${idLugar}` , data => {
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


    render(){
        return(


                <div >
                    <For each="item" index="idx" of={ this.state.lugares }>
                        <h2 name="nombre" id="nombre" onChange={this.changeField.bind(this)} >{item.nombre}</h2>
                    </For>

                    <For each="item" index="idx" of={ this.state.lugares }>
                        <img  name="imagen" id="imagen" key={idx} value={item.imagen}  src={item.imagen}  alt="..." width="600" height="400" onChange={this.changeField.bind(this)}/>
                    </For>

                    <For each="item" index="idx" of={ this.state.lugares }>
                        <p name="descripcion" id="descripcion" onChange={this.changeField.bind(this)} >{item.descripcion}</p>
                    </For>

                    <h4>Ubicacion</h4>
                    <For each="item" index="idx" of={ this.state.lugares }>
                        <h3  class="text-secondary" name="ubicacion" id="ubicacion" onChange={this.changeField.bind(this)} >{item.ubicacion}</h3>
                    </For>


                </div>

        )
    }
}
export default DetallesLugar;