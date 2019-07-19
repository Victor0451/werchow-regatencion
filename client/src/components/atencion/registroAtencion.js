import React, { Component } from 'react';
import FormRegistoAtencion from './formRegistoAtencion';
import toastr from '../../utils/toastr'

//redux
import { connect } from "react-redux";
import { agregarAtencion } from "../../actions/atencionActions";


class RegistroAtencion extends Component {

    state = {
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
        celular: '',
        motivo: '',
        operador: '',
        detalle_motivo: '',
        error: false

    };

    operadorRef = React.createRef();

    leerDatos = e => {

        this.setState({ [e.target.name]: e.target.value })

    }

    registrarAtencion = e => {
        e.preventDefault();

        const {
            nombre,
            apellido,
            dni,
            telefono,
            celular,
            motivo,
            detalle_motivo,
        } = this.state


        if (nombre === "" || apellido === "" || dni === "" || telefono === "" || celular === "" || motivo === "" || detalle_motivo === "") {
            this.setState({ error: true });
            return;
        }
        this.setState({ error: false });

        const atencion = {
            nombre,
            apellido,
            dni,
            telefono,
            celular,
            motivo,
            operador: this.operadorRef.current.value,
            detalle_motivo
        }


        this.props.agregarAtencion(atencion);

        toastr.success("Se registro la atencion con exito", "ATENCION")

        e.target.reset();

    }

    render() {
        const token = sessionStorage.getItem('token')

        if (!token) return (
            <div class="container alert alert-dismissible alert-warning mt-4">                
                <h4 class="alert-heading text-center">INICIA SESSION PARA PODER REGISTRAR LA ATENCION</h4>
            </div>)

        const { usuario } = this.props.user
        return (
            <div>
                <FormRegistoAtencion
                    leerDatos={this.leerDatos}
                    error={this.state.error}
                    registrarAtencion={this.registrarAtencion}
                    usuario={usuario}
                    operadorRef={this.operadorRef} />
            </div>
        )
    }
}

//state
const mapStateToProps = state => ({
    atencion: state.atencion.atencion,
    user: state.auth.user,

});

export default connect(
    mapStateToProps,
    { agregarAtencion }
)(RegistroAtencion);
