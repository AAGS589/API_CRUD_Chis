import React from 'react'
import LogoPagina from "../assets/icons/LogoPagina.png";





class Footer extends React.Component{
    render() {
        return(

            <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                <label className="text-center">ACERCA DE NOSOTROS</label>
                    </div>
                    <div className="col-sm">
                        <label className="text-center">ASISTENCIA</label>
                    </div>
                    <div className="col-sm">
                        <label className="text-center">COMUNIDAD</label>
                    </div>
                </div>
            </div>
            </footer>
        )
    }
}
export default Footer;