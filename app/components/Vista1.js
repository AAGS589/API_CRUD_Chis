import React from "react";
import '../estilos/header.css'
import webpack from '../assets/icons/bootstrap-5-1.svg'
class Vista1 extends React.Component{
constructor() {
    super();
    this.state = {
        imagen1 : 'https://www.travelreport.mx/wp-content/uploads/2017/12/CHIAPA-PRINCIPAL.jpg',
        imagen2 : 'https://i1.wp.com/www.turimexico.com/wp-content/uploads/2015/07/el-chiflon.jpg?fit=640%2C425&ssl=1',
        imagen3: 'https://www.gob.mx/cms/uploads/article/main_image/64813/17504476_1398845653492275_4976373153928193777_o.jpg'

    }
}


    render() {

        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={this.state.imagen1} alt="..." className="d-block w-100" height="500px"/>
                    </div>
                    <div className="carousel-item ">
                        <img src={this.state.imagen2} alt="..." className="d-block w-100" height="500px"/>
                    </div>
                    <div className="carousel-item ">
                        <img src={this.state.imagen3} alt="..." className="d-block w-100" height="500px"/>
                    </div>
                </div>

            </div>


        )
    }
}
export default Vista1;