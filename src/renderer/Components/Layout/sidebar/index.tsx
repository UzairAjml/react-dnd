
import { Layout, Menu } from 'antd';
import PanelDesign from 'renderer/Components/PanelDesign';
const { Sider } = Layout;
//const { SubMenu } = Menu;


const Sidebar = () => {
  return (
    <>
      <Sider
        trigger={null}
        className="customSider"
        style={{
          overflow: 'auto',
          height: '100vh',
          zIndex: 20,
          maxWidth: '300px',
          width: '300px'
        }}
      >
        <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']} style={{height:'60px'}}>
          <div>
            <PanelDesign/>
            </div>
           <div>
             <PanelDesign/>
            </div>
          </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
