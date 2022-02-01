import {Layout, Switch} from 'antd';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAction,distributeAction, gridAction } from 'renderer/store/Panel/panelActions';
import './header.scss'
  const { Header } = Layout;
  const Navbar = () => {
    const [checked,setChecked] = useState(false);
    const [gridOn,setGridOn]=useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(checked) {
          dispatch(deleteAction(true));
        }
        else {
          dispatch(deleteAction(false));
        }
    },[checked])
    useEffect(()=>{
      if(gridOn) {
        dispatch(gridAction(true));
      }
      else {
        dispatch(gridAction(false));
      }
  },[gridOn])
    return (
      <Header className="site-layout__navbar" style={{ padding: '10px' }}>
          <div className="container">
            <div className="title">CUSTOM SWITCH PANELS</div>
          </div>
          <div className="tools">
            <i className="fas fa-trash-alt"></i>
            <span className="Deletetag">Delete :</span>
          <Switch checked={checked} onChange={()=>setChecked(prevState=>!prevState)}/>

          
          </div>
          <div className="tools">
            <i className="fas fa-spider" style={{color:'gray',fontSize:'20px',paddingRight:'6px'}}></i>
            <span className="Deletetag">Grid :</span>
          <Switch checked={gridOn} onChange={()=>setGridOn(prevState=>!prevState)}/>

          
          </div>
         
      </Header>
    );
  };
  
  export default Navbar;