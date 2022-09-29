import React from 'react'


class RestaurantesCard extends React.Component{

    render() {
        return(
            <div>
                <React.Fragment>
                    <div className="container my-3">
                        <div className="row justify-content-md-center">
                            <div className="col-10">
                                <div className="card bg-dark text-white">
                                    <img src='https://i2.wp.com/www.cuboinformativo.top/wp-content/uploads/2020/05/platillos-tipicos-de-chiapas.jpg?resize=1024%2C576&ssl=1' className="card-img" alt="..."  width="1500" height="250"/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title text-light bg-dark" >Titulo</h5>
                                        <p className="card-text text-light bg-dark">Decripcion</p>
                                        <p className="card-text text-light bg-dark">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
export default RestaurantesCard;