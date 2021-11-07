
  import {
    Layout
  } from 'antd';


  
  const { Header } = Layout;
  

  
  const Navbar = () => {
  
  
  
    return (
      <Header className="site-layout__navbar" style={{ padding: '10px' }}>
          <div className="Logo">
              Toolbar `{'>'}`
          </div>
      </Header>
    );
  };
  
  export default Navbar;