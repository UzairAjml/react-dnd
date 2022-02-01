import { SET_DELETE_MODE,SET_GRID_MODE } from "./actionTypes"
export const deleteAction = (payload) => {
    return {
        type : SET_DELETE_MODE,
        payload:payload
    }
}
export const gridAction = (payload) => {
    return {
        type : SET_GRID_MODE,
        payload:payload
    }
}
