import { SET_PANEL_DIMENSIONS } from './actionTypes';

export const dimensionAction = (panelDimensions) => (dispatch) => dispatch({
  type: SET_PANEL_DIMENSIONS,
  payload: panelDimensions
});
