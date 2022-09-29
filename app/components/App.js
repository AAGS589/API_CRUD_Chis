import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import ValoracionEstrellas from "./ValoracionEstrellas";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AgregarLugar from "./AgregarLugar";
import Home from '../pages/Home'
import LugarTuristico from '../pages/LugarTuristico'
import NotFound from '../pages/NotFound'
import MiCuenta from "../pages/MiCuenta";
import TablaLugares from "./TablaLugares";
import EditarLugar from "./EditarLugar";
import PageAdm from "./PageAdm";
import ServicioLugar from "./ServicioLugar";
import HospedajesPage from "./HospedajesPage";
import AgregarHospedaje from "./AgregarHospedaje";
import ServicioHospedaje from "./ServicioHospedaje";
import TablaHospedajes from "./TablaHospedajes";
import ServicioRestaurante from "./ServicioRestaurante";
import AgregarRestaurante from "./AgregarRestaurante";
import RestaurantesPage from "./RestaurantesPage";
import TablaRestaurantes from "./TablaRestaurantes";
import TablaUsuarios from "./TablaUsuarios";
import ServicioUsuario from "./ServicioUsuario";
import AgregarUsuario from "./AgregarUsuario";
import BotonAdm from "./BotonAdm";
import LugaresPage from "./LugaresPage";
import DetallesHospedaje from "./DetallesHospedaje";
import DetallesRestaurante from "./DetallesRestaurante";
import PaginaRestaurantes from "../pages/PaginaRestaurantes";
import PaginaHospedajes from "../pages/PaginaHospedajes";
class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/main' component={Home}/>
                    <Route exact path='/pageadm' component={PageAdm}/>

                    <Route exact path='/lugarespage' component={LugaresPage}/>
                    <Route exact path='/serviciolugar' component={ServicioLugar}/>
                    <Route exact path='/lugarturistico/:idLugares' component={LugarTuristico}/>
                    <Route exact path='/agregarlugar' component={AgregarLugar}/>
                    <Route exact path='/tablalugares' component={TablaLugares}/>
                    <Route exact path='/editarlugar/:idLugares' component={EditarLugar}/>

                    <Route exact path='/tablahospedajes' component={TablaHospedajes}/>
                    <Route exact path='/detalleshospedaje/:idHospedajes' component={DetallesHospedaje}/>
                    <Route exact path='/serviciohospedaje' component={ServicioHospedaje}/>
                    <Route exact path='/agregarhospedaje' component={AgregarHospedaje}/>
                    <Route exact path='/hospedajespage' component={HospedajesPage}/>
                    <Route exact path='/paginahospedajes/:idHospedajes' component={PaginaHospedajes}/>

                    <Route exact path='/tablarestaurantes' component={TablaRestaurantes}/>
                    <Route exact path='/detallesrestaurante/:idRestaurantes' component={DetallesRestaurante}/>
                    <Route exact path='/paginarestaurantes/:idRestaurantes' component={PaginaRestaurantes}/>
                    <Route exact path='/serviciorestaurante' component={ServicioRestaurante}/>
                    <Route exact path='/agregarrestaurante' component={AgregarRestaurante}/>
                    <Route exact path='/restaurantepage' component={RestaurantesPage}/>

                    <Route exact path='/tablausuarios' component={TablaUsuarios}/>
                    <Route exact path='/serviciousuario' component={ServicioUsuario}/>
                    <Route exact path='/agregarusuario' component={AgregarUsuario}/>


                    <Route exact path='/valoracion' component={ValoracionEstrellas}/>
                    <Route exact path='/micuenta' component={MiCuenta}/>

                    <Route exact path='/register' component={SignUp}/>
                    <Route exact path='/notfound' component={NotFound}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }




}

export default App;