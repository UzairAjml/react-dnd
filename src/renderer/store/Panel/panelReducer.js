import { SET_DELETE_MODE, SET_GRID_MODE } from './actionTypes';
const initialState = {
  isDelete: false,
  isGrid: false,
};

const panelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DELETE_MODE:
      return { ...state, isDelete: action.payload };
    case SET_GRID_MODE:
      return { ...state, isGrid: action.payload };
    default:
      return state;
  }
};
export default panelReducer;
