import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Vista1 from '../components/Vista1'
import Restaurante from "../components/Restaurante";
import Footer from "../components/Footer";
import Hoteles from "../components/Hoteles";
import Lugar from "../components/Lugar";
import CardLugar from "../components/CardLugar";
import PruebaCard from "../components/PruebaCard";
import PruebasCard from "../components/PruebasCard";
import RestauranteCardHome from "../components/RestauranteCardHome";
import LugaresRecomendados from "../components/LugaresRecomendados";
class Home extends React.Component {



componentDidMount() {

    if(!window.localStorage.getItem("token")){
        this.props.history.push('/')
    }




}

    componentWillUnmount() {
        if(!window.localStorage.getItem("token")){
            this.props.history.push('/')
        }
    }
    render() {

        return (
            <>
            <Header />


                <div >
                    <div >
                        <div >

                        </div>

                        <div >
                            <Vista1/>
                        </div>
                        <div >

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
                            <h4 class="text-center my-4"> Los mejores lugares ecoturisticos en chiapas</h4> <Link to='/lugarespage'  >
                            <button  type="button"   class="btn btn-dark btn-sm my-2">Ver mas lugares </button>
                        </Link>
                            <LugaresRecomendados/>
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
                <div className="container my-8">
                    <div className="row justify-content-md-center">
                        <div className="col">

                            <Footer/>
                        </div></div></div>



                </>



        )
    }
}
//btn-outline-secondary
export default Home;