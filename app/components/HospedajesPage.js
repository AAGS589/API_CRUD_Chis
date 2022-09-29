import React from  'react'
import Hospedaje from "./Hospedajes";
import Header from "./Header";
import CalificarComentar from "./CalificarComentar";
import Footer from "./Footer";

class HospedajesPage extends  React.Component{

    render() {
        return(
            <><Header/>
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col">
                <Hospedaje/>
                        </div>
                    </div>
                </div>
                </>

        )
    }
}
export default HospedajesPage;