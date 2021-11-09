import { SET_PANEL_MATERIALS} from './actionTypes';

export const materialAction = (panelMaterials) => (dispatch) => dispatch({
  type: SET_PANEL_MATERIALS,
  payload: panelMaterials
});
