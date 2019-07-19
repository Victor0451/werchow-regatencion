import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Spinner from '../layout/Spinner';

import {
    Pagination,
    PaginationItem,
    PaginationLink,

} from "reactstrap";




//redux
import { connect } from "react-redux";
import { mostrarAtenciones } from "../../actions/atencionActions";


let prev = 0;
//let next = 0;
let last = 0;
//let first = 0;

class ListadoAtenciones extends Component {

    constructor() {
        super();
        this.state = {
            atenciones: [],
            currentPage: 1,
            todosPerPage: 100,

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleLastClick = this.handleLastClick.bind(this);
        this.handleFirstClick = this.handleFirstClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    handleLastClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: last
        });
    }
    handleFirstClick(event) {
        event.preventDefault();
        this.setState({
            currentPage: 1
        });
    }



    componentDidMount() {
        this.props.mostrarAtenciones();
    }

    componentWillReceiveProps(nextProps) {
        const { atencion } = nextProps;

        this.setState({
            atenciones: atencion
        })
    }

    render() {

        let { atenciones, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        let indexOfLastTodo = currentPage * todosPerPage;
        let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        let currentTodos = atenciones.slice(indexOfFirstTodo, indexOfLastTodo);
        prev = currentPage > 0 ? (currentPage - 1) : 0;
        last = Math.ceil(atenciones.length / todosPerPage);
        //   let next = (last === currentPage) ? currentPage : currentPage + 1;

        // Logic for displaying page numbers
        let pageNumbers = [];
        for (let i = 1; i <= last; i++) {
            pageNumbers.push(i);
        }
        console.log(this.props)

        if (Object.entries(atenciones).length === 0) return <Spinner />

        return (
            <div className="container">
                <h2 className="text-center my-5">Listado de Atenciones Registradas</h2>


                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">N° Atencion</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Motivo</th>
                            <th scope="col">Detalle</th>
                            <th scope="col">Operador</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTodos.map((atencion, index) => (
                            <tr key={index}>
                                <td >
                                    {atencion.id_atencion}
                                </td>
                                <td>
                                    {atencion.apellido}
                                </td>
                                <td>
                                    {atencion.nombre}
                                </td>
                                <td>
                                    {atencion.dni}
                                </td>
                                <td>
                                    {atencion.telefono}
                                </td>
                                <td>
                                    {atencion.celular}
                                </td>
                                <td>
                                    {atencion.motivo}
                                </td>
                                <td>
                                    {atencion.detalle_motivo}
                                </td>
                                <td>
                                    {atencion.operador}
                                </td>
                                <td>
                                    {atencion.createdAt}
                                </td>
                                <td>
                                    <Link to={`/atencion/${atencion.contrato}`} className="btn btn-primary">Mas Informacion</Link>
                                </td>
                            </tr>


                        ))}
                    </tbody>

                </table>

                <nav className="pagination justify-content-center ">
                    <Pagination>
                        <PaginationItem>
                            {prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
                                <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
                            }
                        </PaginationItem>
                        <PaginationItem>
                            {prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
                                <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
                            }
                        </PaginationItem>
                        {
                            pageNumbers.map((number, i) =>
                                <Pagination key={i}>
                                    <PaginationItem active={pageNumbers[currentPage - 1] === (number) ? true : false} >
                                        <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
                                            {number}
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            )}

                        <PaginationItem>
                            {
                                currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
                                    <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
                            }
                        </PaginationItem>

                        <PaginationItem>
                            {
                                currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
                                    <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
                            }
                        </PaginationItem>
                    </Pagination>
                </nav>

            </div>
        )
    }
}
//state
const mapStateToProps = state => ({
    atencion: state.atencion.atencion
});

export default connect(
    mapStateToProps,
    { mostrarAtenciones }
)(ListadoAtenciones);