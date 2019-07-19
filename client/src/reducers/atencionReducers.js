import { MOSTRAR_ATENCION, INSERTAR_ATENCION, MOSTRAR_ATENCIONES } from "../actions/types";

//CADA REDUCER TIENE SU ṔROPIO STATE

const initialState = {
    atencion: []
};

export default function (state = initialState, action) {
    switch (action.type) {

        case MOSTRAR_ATENCIONES:
            return {
                ...state,
                atencion: action.payload
            };

        case MOSTRAR_ATENCION:
            return {
                ...state,
                atencion: action.payload
            };

        case INSERTAR_ATENCION:

            return {
                ...state,
                atencion: [...state.atencion, action.payload]
            };


        //         case MOSTRAR_UNIDAD_FUNCIONAL:
        //             return {
        //                 ...state,
        //                 unidadFuncional: action.payload
        //             };

        // case BUSCAR_TITULAR:
        //     return {
        //         ...state,
        //         titular: action.payload
        //     };

        // case ELIMINAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: state.productos.filter(
        //             producto => producto.id !== action.payload
        //         )
        //     };


        // case EDITAR_PRODUCTO:
        //     return {
        //         ...state,
        //         productos: state.productos.map(producto =>
        //             producto.id === action.payload.id
        //                 ? (producto = action.payload)
        //                 : producto
        //         )
        //     };
        default:
            return state;
    }
}