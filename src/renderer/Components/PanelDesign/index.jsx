import { Card, Button,Radio} from 'antd';
import DropDown from '../DropDown';
import './PanelDesign.scss';
import React from 'react';

const PanelDesign = () => {
  const options=['item1','item2'];
  return (
    <Card style={{ width: 180,borderRadius:'7%',  border:'2px solid black',margin:'5px'}}>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <div style={{display:'flex',flexDirection:'column',marginBottom:'20px'}}>

      <h3>Dimensions</h3>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <Button size='small' className='dimension-class' >100</Button>
      <Button size='small' className='dimension-class' >200</Button>
      <Button size ='small'className='dimension-class' >300</Button>
      </div>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <span>L</span>
        <span>M</span>
        <span>S</span>
      </div>
      </div>
     <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

     <div className='dropdown-section'>
     <h4>Material</h4>
      <DropDown options={options}/>
     </div>
     <div className='dropdown-section'>
      <h4>color</h4>
      <DropDown options={options}/>
      </div>
      <div className='dropdown-section'>
      <h4>corner diameter</h4>
      <DropDown options={options}/>
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
