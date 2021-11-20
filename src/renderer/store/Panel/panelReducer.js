import { SET_DELETE_MODE } from "./actionTypes"
const initialState = {
    isDelete  : false
}

 const panelReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DELETE_MODE :
            return{...state,isDelete:action.payload}
        default :
            return state;          
    }
};
export default panelReducer;