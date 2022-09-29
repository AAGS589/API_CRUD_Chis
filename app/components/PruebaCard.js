import React from 'react'
import {Link} from "react-router-dom";
import APIInvoker from "../utils/APIInvoker";
import update from 'immutability-helper'



class PruebaCard extends React.Component{

    constructor(props) {
        super(props)
        this.state  = {
            idLugares : '',
            nombre : '',
            descripcion : '',
            imagen : '',
            listalugares: []
        }
        //Extraer el catálogo de roles del backend
        APIInvoker.invokeGET('/lugares/getAllLugares',data => {  //Entrará acá cuando status = true
            this.setState({
                listalugares : data.data

            })
        }, error => { //Entrará acá cuando status = false
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

<div>
    <div> <select name="nombre" id="nombre" value={this.state.nombre} onChange={this.changeField.bind(this)}>
        <For each="item" index="idx" of={ this.state.listalugares }>
            <option key={idx} value={item.nombre}>{item.nombre}</option>
        </For>
    </select>
    </div>

    <div>
            <select name="idLugares" id="idLugares" value={this.state.idLugares} onChange={this.changeField.bind(this)}>
                <For each="item" index="idx" of={ this.state.listalugares }>
                    <option key={idx} value={item.idLugares}>{item.idLugares}</option>
                </For>
            </select>
    </div>
</div>




        )
    }



}
export default PruebaCard;