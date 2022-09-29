import React from "react";
import Header from "../components/Header";
import DetallesLugar from "../components/DetallesLugar";
import CalificarComentar from "../components/CalificarComentar";
import Lugar from "../components/Lugar";
import Footer from "../components/Footer";
import DetallesHospedaje from "../components/DetallesHospedaje";

class PaginaHospedajes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            idHospedajes : props.match.params.idHospedajes
        }
    }

    render() {
        return(
            <>
                <Header/>
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <center><DetallesHospedaje  idHospedajes={this.state.idHospedajes}/></center>
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