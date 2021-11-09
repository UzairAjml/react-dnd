import { SET_PANEL_THEME } from './actionTypes';

const initialState = {
  panelTheme: 'white',
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    case SET_PANEL_THEME:
      return { ...state, panelTheme: action.payload };
    default:
      return { ...state };
  }
};

export default theme;
