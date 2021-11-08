//import icon from '../../assets/icon.svg';
import './App.css';
import LayoutMain from './Components/Layout';
import PanelBox from './Components/Smart/GridBox';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <LayoutMain>
      <PanelBox />
    </LayoutMain>
    </DndProvider>
  );
}
