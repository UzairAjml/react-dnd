import React, { useState } from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {Button,Dropdown,Menu} from 'antd';
import './dropdown.scss';

const DropDown = ({options,callBack}) => {
  const [topValue,setTopValue]=useState(null);
  function handleSelect(targetValue) {
    setTopValue(targetValue);
    callBack(targetValue);
  }
  const menu = (
    <Menu>
      {options.map((item,index) => {
        return <Menu.Item key={index}  onClick={()=>handleSelect(item)}>
        {item}
      </Menu.Item>
      })
    }
    </Menu>
  );
  return (
    <div >
       <Dropdown overlay={menu} >
      <Button className='btn'>
        {topValue ? topValue : 'Choose' } <DownOutlined />
      </Button>
    </Dropdown>
    </div>
  )
}

export default DropDown
