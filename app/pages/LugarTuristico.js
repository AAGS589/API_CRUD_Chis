import React from 'react'
import Header from "../components/Header";
import CardLugar from '../components/CardLugar'
import Footer from "../components/Footer";
import Lugar from "../components/Lugar";
import ValoracionEstrellas from "../components/ValoracionEstrellas";
import APIInvoker from "../utils/APIInvoker";
import update from "immutability-helper";
import DetallesLugar from "../components/DetallesLugar";
import CalificarComentar from "../components/CalificarComentar";

class LugarTuristico extends React.Component {
    constructor(props) {
        super(props);
       this.state={
           idLugares : props.match.params.idLugares
       }
    }
    //props.match.params.idLugares
    render() {
        return(
            <>
            <Header/>
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <center><DetallesLugar  idLugares={this.state.idLugares}/></center>
                        </div>
                    </div>
                </div>

                <CalificarComentar/>





                <Footer/>
</>
        )
    }
}
export default LugarTuristico;

