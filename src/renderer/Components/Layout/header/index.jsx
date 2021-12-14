import {Layout, Switch} from 'antd';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAction,distributeAction } from 'renderer/store/Panel/panelActions';
import './header.scss'
  const { Header } = Layout;
  const Navbar = () => {
    const [checked,setChecked] = useState(false);
    const [distribute,setDistribute] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(checked) {
          dispatch(deleteAction(true));
        }
        else {
          dispatch(deleteAction(false));
        }
        if(distribute){
          dispatch(distributeAction(true));
        }
        else {
          dispatch(distributeAction(false));
        }
    },[checked,distribute])
    return (
      <Header className="site-layout__navbar" style={{ padding: '10px' }}>
          <div className="container">
            <div className="title">Design!!</div>
          </div>
          <div className="tools">
            <i className="fas fa-trash-alt"></i>
            <span className="Deletetag">Delete :</span>
          <Switch checked={checked} onChange={()=>setChecked(prevState=>!prevState)}/>
          
          </div>
          <div className="tools">
            <i className="fas fa-trash-alt"></i>
            <span className="Deletetag">Distribute :</span>
          <Switch checked={distribute} onChange={()=>setDistribute(prevState=>!prevState)}/>
          
          </div>
      </Header>
    );
  };
  
  export default Navbar;