import {Layout, Switch} from 'antd';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAction } from 'renderer/store/Panel/panelActions';
import './header.scss'
  const { Header } = Layout;
  const Navbar = () => {
    const [checked,setChecked] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(checked) {
          dispatch(deleteAction(true));
        }
        else {
          dispatch(deleteAction(false));
        }
    },[checked])
    return (
      <Header className="site-layout__navbar" style={{ padding: '10px' }}>
          <div className="container">
            <div className="title">Design!!</div>
          </div>
          <div className="tools">
            <i class="fas fa-trash-alt"></i>
            <span className="Deletetag">Delete :</span>
          <Switch checked={checked} onChange={()=>setChecked(prevState=>!prevState)}/>
          </div>
      </Header>
    );
  };
  
  export default Navbar;