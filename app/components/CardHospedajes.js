import React from 'react'
import update from "immutability-helper";
import {Link} from "react-router-dom";

class CardHospedajes extends React.Component{
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
//boton config class="d-grid gap-2"
    render() {
        return(

            <React.Fragment>

                <div className="col-md-2" >
                    <img  src={this.props.imagen} className="card-img-top" alt="..."/>
                </div>

                <div className="col-md-2">
                    <div className="card-body "   >
                        <h5 className="card-title"   >{this.props.nombre} </h5>
                        <small className="text-muted" >{this.props.ubicacion}</small>
                        <div>
                            <Link to={/paginahospedajes/+this.props.idHospedajes}>
                            <button  type="button"   class="btn btn-dark btn-sm">Ver Hotel </button>
                            </Link>
                        </div>


                    </div>

                </div>


            </React.Fragment>
        )
    }
}
export default CardHospedajes;