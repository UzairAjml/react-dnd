import { SET_DELETE_MODE,SET_DISTRIBUTE_MODE } from "./actionTypes"
export const deleteAction = (payload) => {
    return {
        type : SET_DELETE_MODE,
        payload:payload
    }
}

export const distributeAction = (payload) => {
    return {
        type : SET_DISTRIBUTE_MODE,
        payload:payload
    }
}
