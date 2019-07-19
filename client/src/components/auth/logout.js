import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { logout } from '../../actions/authActions'

import PropsTypes from 'prop-types';

class Logout extends Component {

    static propsTypes = {
        logout: PropsTypes.func.isRequired
    };

    render() {
        return (
            <Fragment>
                <Link className="nav-link" onClick={this.props.logout} to="#">Logout</Link>
            </Fragment>
        )
    }
}

export default connect(
    null,
    { logout }
)(Logout);
