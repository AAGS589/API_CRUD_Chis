import React from 'react'
import webpack from '../assets/icons/bootstrap-5-1.svg'
import {Link} from "react-router-dom";

class Card extends React.Component {
    constructor(props) {
        super(props);

}

    render(){
        return (
<div>

    <div className="card" >
        <Link to={'hospedajespage'}>
        <img src={this.props.imagen} className="card-img-top" alt="..." width="1000" height="250"/>
        </Link>
            <div className="card-body">
                <h6 className="card-text">{this.props.title}</h6>
            </div>
    </div>


</div>


        )
    }
};

export default Card;