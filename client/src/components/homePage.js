import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="jumbotron container mt-4">
            <h1 className="display-3">WERCHOW - S.R.A</h1>
            <p className="lead">Sistema para el registro de la atencion al cliente</p>
            <hr className="my-4" />
            <p> Toda atencion que se efectue al cliente puede registrarse en el sistema, mediante un formulario detallando datos personales del cliente, fecha, motivo y operador que lo atendio.  </p>
            <p className="lead">
                <Link to="/atencion/nueva" className="btn btn-primary btn-lg">Registrar Atencion</Link>
            </p>

        </div>
    )
}

export default HomePage
