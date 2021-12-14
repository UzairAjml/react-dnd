//import icon from '../../assets/icon.svg';
import React , {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import './App.css';
import LayoutMain from './Components/Layout';
import PanelBox from './Components/Smart/GridBox';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
export default function App() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <DndProvider backend={HTML5Backend}>
    <LayoutMain>

    <button onClick={handlePrint}>Print this out!</button>
      <PanelBox ref={componentRef}/>
    </LayoutMain>
    </DndProvider>
  );
}
