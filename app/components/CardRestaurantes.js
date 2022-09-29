import React from 'react'
import webpack from '../assets/icons/bootstrap-5-1.svg'
import {Link} from "react-router-dom";
import update from "immutability-helper";
class CardRestaurantes extends React.Component{
    constructor(props) {
        super(props);

    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    render() {
        return(
            <div>
                <React.Fragment>

                    <div className="col-md-2" >
                        <img  src={this.props.imagen} className="card-img-top" alt="..."/>
                    </div>


                    <div className="col-md-2">
                        <div className="card-body ">
                            <h5 className="card-title">{this.props.nombre} </h5>
                            <small className="text-muted">{this.props.ubicacion}</small>
                            <div>
                                <Link to={/paginarestaurantes/+this.props.idRestaurantes}>
                                    <button type="button" className="btn btn-dark btn-sm">Ver Restaurante</button>
                                </Link>
                            </div>


                        </div>
                    </div>

                </React.Fragment>
            </div>
        )
    }


}

export default CardRestaurantes;