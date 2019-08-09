import { combineReducers } from "redux";
import atencionReducers from '../reducers/atencionReducers';
import authReducers from '../reducers/authReducers';
import errorReducers from '../reducers/errorReducers';




export default combineReducers({
    atencion: atencionReducers,
    auth: authReducers,
    error: errorReducers

});