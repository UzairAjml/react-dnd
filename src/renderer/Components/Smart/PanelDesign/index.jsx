import { Card, Button,Radio,InputNumber} from 'antd';
import DropDown from '../../Presentational/DropDown';
import { useDispatch } from 'react-redux';
import './PanelDesign.scss';
import React, { useState,useEffect } from 'react';
import { testAction } from 'renderer/store/panelTheme/themeActions';
import { dimensionAction } from 'renderer/store/panelDimensions/dimensionActions';
import { materialAction } from 'renderer/store/panelMaterial/materialAcions';

const PanelDesign = () => {
  const colors=['red','black'];
  const materials=['Plexiglass (gloss)','Plexiglass (matte)', 'Anodised aluminium'];
  const cornerDiameter=[42,23];
  const rows=[1,2,3];

  const [length, setLength] = useState(300);
  const [height, setHeight] = useState(200);
  const [thickness, setThickness] = useState(1);

  const [color,setColor]=useState('#171717');
  const [material,setMaterial]=useState('');
  const [diameter,setDiameter]=useState(10);
  const [noOfRows,setRows]=useState(2);

  const dispatch = useDispatch();

  const handleActions=()=>{
    const dimensions={
      length:length,
      height:height,
      thickness:thickness,
      diameter:diameter,
      rows:noOfRows
    };
    dispatch(testAction(color));
    dispatch(dimensionAction(dimensions));
    dispatch(materialAction(material));
  };

  useEffect(() => {
    handleActions();
  }, [color,diameter,material,length,height,thickness,noOfRows])

  return (
    <Card style={{ borderRadius:'7%',  border:'2px solid black',margin:'5px',overflow:'auto'}}>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <div style={{display:'flex',flexDirection:'column',marginBottom:'20px'}}>

      <h3>Dimensions</h3>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <InputNumber min={1} max={500} value={length} onChange={setLength}/>
      <InputNumber min={1} max={500} value={height} onChange={setHeight}/>
      <InputNumber min={1} max={300} value={thickness} onChange={setThickness}/>
      </div>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <span>L</span>
        <span>H</span>
        <span>T</span>
      </div>
      </div>
     <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

     <div className='dropdown-section'>
     <h4>Material</h4>
      <DropDown options={materials} callBack={(targetValue)=>setMaterial(targetValue)}/>
     </div>
     <div className='dropdown-section'>
      <h4>color</h4>
      <DropDown options={colors} callBack={(targetValue)=>setColor(targetValue)}/>
      </div>
      <div className='dropdown-section'>
      <h4>corner diameter</h4>
      <DropDown options={cornerDiameter} callBack={(targetValue)=>setDiameter(targetValue)}/>
      </div>
      <div className='dropdown-section'>
      <h4>Rows in Grid</h4>
      <DropDown options={rows} callBack={(targetValue)=>setRows(targetValue)}/>
      </div>
      <div className='dropdown-section'>
      <h4>Confirm Edges</h4>
      <Radio>Yes</Radio>
      </div>
      
     </div>

    </div>
  </Card>
  );
};

export default PanelDesign;
