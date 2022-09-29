import React from 'react'
import IconPlace from '../assets/icons/place_black_24dp.svg'
import {Link} from "react-router-dom";
class RestauranteCardHome extends React.Component{

    render() {
        return(
            <div>   <Link to='/restaurantepage' ><div className="card bg-dark text-white">

                    <img src='https://i2.wp.com/www.cuboinformativo.top/wp-content/uploads/2020/05/platillos-tipicos-de-chiapas.jpg?resize=1024%2C576&ssl=1' className="card-img" alt="..." width="50" height="350"/>

                <div className="card-img-overlay">

                    <h1 className="card-title text-dark ">Vale la pena</h1>
                    <h1 className="card-title text-dark ">probar nuestra </h1>
                    <h1 className="card-title text-dark ">comida</h1>
                </div>

            </div>  </Link></div>

        )
    }

}
export default RestauranteCardHome;