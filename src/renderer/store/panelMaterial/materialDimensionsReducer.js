import { SET_PANEL_MATERIALS } from './actionTypes';

const initialState = {
  panelMaterials: 'plexiglass',
};

const panelMaterials = (state = initialState, action) => {
  switch (action.type) {
    case SET_PANEL_MATERIALS:
      return { ...state, panelMaterials: action.payload };
    default:
      return { ...state };
  }
};

export default panelMaterials;
