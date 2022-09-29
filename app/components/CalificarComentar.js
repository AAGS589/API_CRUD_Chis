import React from 'react'
import ValoracionEstrellas from "./ValoracionEstrellas";

class CalificarComentar extends React.Component{
    render() {
        return(
            <div>


                <div>
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" data-bs-whatever="@mdo">Califica el lugar ★ :)
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Calificar</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="recipient-name"
                                                   className="col-form-label">Califica el lugar!!</label>
                                           <ValoracionEstrellas/>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message-text" className="col-form-label">Escribe tu opinion</label>
                                            <textarea className="form-control" id="message-text"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar
                                    </button>
                                    <button type="button" className="btn btn-primary">Calificar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container my-3 ">
                            <div className="row justify-content-md-center">
                                <div className="col">
                                    <div className="mb-3">
                                        <h6  className="form-label">Usuario</h6>
                        <label  className="form-label">Comentar o preguntar</label>
                        <textarea className="form-control"  rows="3"></textarea>
                                        <button className="btn btn-outline-dark " type="submit">Enviar</button>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
export default CalificarComentar;