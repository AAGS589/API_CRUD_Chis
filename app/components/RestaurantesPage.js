import React from 'react'

import Restaurante from "./Restaurante";
import Header from "./Header";
import Footer from "./Footer";

class RestaurantesPage extends React.Component{


render() {
    return(

        <>
            <Header/>
            <div className="container ">
                <div className="row justify-content-md-center">
                    <div className="col">
        <Restaurante/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
}
export default RestaurantesPage;