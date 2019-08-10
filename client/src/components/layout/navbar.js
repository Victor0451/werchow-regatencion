import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import RegisterModal from '../auth/RegisterModal';
import Logout from '../auth/logout';
import LoginModal from '../auth/LoginModal';

import { connect } from "react-redux";


class Navbar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (

            <Fragment >
                <span className="badge badge-light text-uppercase mt-2">
                    {user   ? `Bienvenido  ${user.usuario}`   : ''}
                </span>

                {user && user.perfil === 'admin' ? <RegisterModal /> : ''}

                <Logout />

            </Fragment>


        );

        const guestLinks = (
            <Fragment >

                <LoginModal />
                
            </Fragment>
        );




        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                <Link to="/" className="navbar-brand">Registro de Atencion</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">

                        {isAuthenticated ?
                            <li className="nav-item dropdown">
                                <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Atenciones</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">



                                    <Link to="/atencion/listado" className="dropdown-item">Listado de Atenciones</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/atencion/nueva" className="dropdown-item">Registrar Atencion</Link>
                                </div>
                            </li>
                            : ''}

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item active d-flex justify-content-between">
                            {isAuthenticated ? authLinks : guestLinks}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
    mapStateToProps,
    null
)(Navbar)
