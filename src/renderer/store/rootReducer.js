import { combineReducers } from 'redux';
import panelThemeReducer from './panelTheme/panelThemeReducers';
import panelDimensionsReducer from './panelDimensions/panelDimensionsReducer';
import panelMaterialsReducer from './panelMaterial/materialDimensionsReducer';

const reducers = combineReducers({
  panelTheme: panelThemeReducer,
  panelDimensions: panelDimensionsReducer,
  panelMaterials: panelMaterialsReducer,
});

export default reducers;
