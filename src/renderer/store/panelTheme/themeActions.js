import { SET_PANEL_THEME } from './actionTypes';

export const testAction = (theme) => (dispatch) => dispatch({
  type: SET_PANEL_THEME,
  payload: theme
});
