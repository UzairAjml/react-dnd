import React from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {Button,Dropdown,Menu,message} from 'antd';
import './dropdown.scss';

const DropDown = ({options}) => {
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      {options.map((item,index) => {
        return <Menu.Item key={index} icon={<UserOutlined />}>
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
        Button <DownOutlined />
      </Button>
    </Dropdown>
    </div>
  )
}

export default DropDown
