import React from 'react'

const FormRegistoAtencion = ({ leerDatos, error, registrarAtencion, usuario, operadorRef }) => {
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Registro de Atencion</h1>
            <form className="border border-secondary p-4" onSubmit={registrarAtencion}>
                <div className="row">
                    <div className="col-md-6 border-right">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext border-bottom" name="nombre" onChange={leerDatos} placeholder="Nombre" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Apellido</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext border-bottom" name="apellido" onChange={leerDatos} placeholder="Apellido" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">DNI</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext border-bottom" name="dni" onChange={leerDatos} placeholder="DNI" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Telefono</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext border-bottom" name="telefono" onChange={leerDatos} placeholder="Telefono" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Celular</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext border-bottom" name="celular" onChange={leerDatos} placeholder="Celular" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Operador</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control-plaintext border-bottom" name="operador" ref={operadorRef} placeholder="Operador" value={usuario} readOnly />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-2">
                                <label >Motivo</label>
                            </div>
                            <div className="col-10">
                                <select multiple="" className="form-control border-bottom " name="motivo" onChange={leerDatos}>
                                    <option value="">Eliga una Opcion...</option>
                                    <option value="1">Baja</option>
                                    <option value="2">Alta</option>
                                    <option value="3">Modificacion</option>
                                    <option value="4">Recuperacion</option>
                                    <option value="5">Prestamo</option>
                                    <option value="6">Reclamos</option>
                                    <option value="7">Otro Caso</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label ">Detalle</label>
                            <div className="col-sm-10">
                                <textarea className="form-control-plaintext border-bottom" name="detalle_motivo" onChange={leerDatos} placeholder="Detalle" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success btn-block mt-4">Registrar</button>
                    </div>
                </div>
                {error ? (
                    <div className="font-weight-bold alert alert-danger text-center mt-4">
                        Todos los campos son obligatorios
                </div>
                ) : (
                        ""
                    )}
            </form>
        </div>
    )
}

export default FormRegistoAtencion
