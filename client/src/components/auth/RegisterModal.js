import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component {
    state = {
        modal: false,
        usuario: '',
        contrasena: '',
        nombre: '',
        apellido: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // If authenticated, close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
            }
        }
    }

    toggle = () => {
        // Clear errors

        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { usuario, contrasena, apellido, nombre } = this.state;

        // Create user object
        const newOperador = {
            usuario,
            contrasena,
            apellido,
            nombre
        }; 

        // Attempt to register
        this.props.register(newOperador);
     
    };

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href='#'>
                    Register
        </NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? (
                            <Alert color='danger'>{this.state.msg}</Alert>
                        ) : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='usuario'>Usuario</Label>
                                <Input
                                    type='text'
                                    name='usuario'
                                    id='usuario'
                                    placeholder='Usuario'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='contrasena'>Contraseña</Label>
                                <Input
                                    type='text'
                                    name='contrasena'
                                    id='contrasena'
                                    placeholder='Contraseña'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='nombre'>Nombre</Label>
                                <Input
                                    type='text'
                                    name='nombre'
                                    id='nombre'
                                    placeholder='Nombre'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />

                                <Label for='apellido'>Apellido</Label>
                                <Input
                                    type='text'
                                    name='apellido'
                                    id='apellido'
                                    placeholder='Apellido'
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }} block>
                                    Register
                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { register, clearErrors }
)(RegisterModal);