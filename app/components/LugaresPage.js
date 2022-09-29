import React from "react";
import Header from "./Header";
import Restaurante from "./Restaurante";
import Lugar from "./Lugar";
import Footer from "./Footer";



class LugaresPage extends React.Component{

    render() {
        return(

            <>
                <Header/>
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-10">
                            <Lugar/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }

}

export default LugaresPage;