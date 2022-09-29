import React from "react";
import Header from "../components/Header";
import DetallesLugar from "../components/DetallesLugar";
import CalificarComentar from "../components/CalificarComentar";
import Lugar from "../components/Lugar";
import Footer from "../components/Footer";
import DetallesRestaurante from "../components/DetallesRestaurante";

class PaginaHospedajes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            idRestaurantes : props.match.params.idRestaurantes
        }
    }

    render() {
        return(
            <>
                <Header/>
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <center><DetallesRestaurante  idRestaurantes={this.state.idRestaurantes}/></center>
                        </div>
                    </div>
                </div>

                <CalificarComentar/>



                <Footer/>
            </>
        )
    }
}
export default PaginaHospedajes;