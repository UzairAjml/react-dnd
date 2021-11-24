import { SET_PANEL_DIMENSIONS } from './actionTypes';

const initialState = {
  panelDimensions:{
    length:100,
    height:100,
    thickness:1,
    diameter:1,
    rows:2
  },
};

const panelDimensions = (state = initialState, action) => {
  switch (action.type) {
    case SET_PANEL_DIMENSIONS:
      return { ...state, panelDimensions: action.payload };
    default:
      return { ...state };
  }
};

export default panelDimensions;
