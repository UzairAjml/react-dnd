import { SET_DELETE_MODE , SET_DISTRIBUTE_MODE} from "./actionTypes"
const initialState = {
    isDelete  : false,
    isDistribute: false
}

 const panelReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DELETE_MODE :
            return{...state,isDelete:action.payload}
        case SET_DISTRIBUTE_MODE :
            return{...state,isDistribute:action.payload}
        default :
            return state;          
    }
};
export default panelReducer;