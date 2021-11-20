import { SET_DELETE_MODE } from "./actionTypes"
export const deleteAction = (payload) => {
    return {
        type : SET_DELETE_MODE,
        payload
    }
}
