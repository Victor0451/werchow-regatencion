import { MOSTRAR_ATENCION, MOSTRAR_ATENCIONES, INSERTAR_ATENCION } from "./types";
import axios from "axios";
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions'

export const mostrarAtenciones = () => async dispatch => {
    const respuesta = await axios.get(`http://192.168.1.108:5000/api/atencion/atenciones`);

    dispatch({
        type: MOSTRAR_ATENCIONES,
        payload: respuesta.data
    });
}

export const mostrarAtencion = id => async dispatch => {
    const respuesta = await axios.get(`http://192.168.1.108:5000/getlocadorselect/${id}`);

    dispatch({
        type: MOSTRAR_ATENCION,
        payload: respuesta.data
    });
};

export const agregarAtencion = atencion => async (dispatch, getState) => {
    await axios.post("http://192.168.1.108:5000/api/atencion/postatencion", atencion, tokenConfig(getState))
        .then(res => dispatch({
            type: INSERTAR_ATENCION,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

// export const agregarAtencion = atencion => (dispatch, getState) => {
//     const respuesta = axios.post(
//         "192.168.1.108:5000/api/atencion/postatencion",
//         atencion,
//         tokenConfig(getState)
//     )

//     dispatch({
//         type: INSERTAR_ATENCION,
//         payload: respuesta.data
//     })

// };

// export const buscarTitular = id => async dispatch => {
//     const respuesta = await axios.get(`http://192.168.1.102:3002/getdatostitular/${id}`);

//     dispatch({
//         type: BUSCAR_TITULAR,
//         payload: respuesta.data
//     });
// };
// export const borrarProducto = id => async dispatch => {
//   await axios.delete(`http://192.168.1.108:5000/productos/${id}`);

//   dispatch({
//     type: ELIMINAR_PRODUCTO,
//     payload: id
//   });
// };



  // export const editarProducto = producto => async dispatch => {
  //   const respuesta = await axios.put(
  //     `http://192.168.1.108:5000/productos/${producto.id}`,
  //     producto
  //   );

  //   dispatch({
  //     type: EDITAR_PRODUCTO,
  //     payload: respuesta.data
  //   });
  // };