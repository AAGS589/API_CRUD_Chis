import React from 'react'
import Header from "../components/Header";
import Vista1 from "../components/Vista1";
import Lugar from "../components/Lugar";
import Hoteles from "../components/Hoteles";
import RestauranteCardHome from "../components/RestauranteCardHome";
import Footer from "../components/Footer";


class HomeSinUsuario extends React.Component{


    componentDidMount() {

        let user = window.localStorage.getItem("user")
        console.log('nombre de usuario   ' + user)

        let Rol = window.localStorage.getItem("idRol")
        console.log('Rol de usuario ' + Rol)

        if(window.localStorage.getItem("token")){
            this.props.history.push('/main')
        }




    }


    render() {

        return (
            <>
                <Header />

                <center><h1> Bienvenido</h1></center>
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-2">

                        </div>

                        <div className="col">
                            <Vista1/>
                        </div>
                        <div className="col-2">

                        </div>
                    </div>
                </div>

                <div className="container my-3">
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <h6 className="text-center">Ven y visita ala tierra del cafe</h6>

                        </div>
                    </div>
                </div>

                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <h4 class="text-center my-4"> Los mejores lugares ecoturisticos en chiapas</h4>
                            <Lugar/>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <h4 class="text-center my-4"> Los mejores hoteles de chiapas para que puedas hospedarte</h4>
                            <Hoteles/>

                        </div>
                    </div>
                </div>





                <div className="container my-5">
                    <div className="row justify-content-md-center">
                        <div className="col-10">

                            <RestauranteCardHome/>
                        </div></div></div>
                <Footer/>
            </>



        )
    }
}
export default HomeSinUsuario;