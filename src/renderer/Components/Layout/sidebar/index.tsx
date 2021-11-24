
import { Layout } from 'antd';
import PanelDesign from 'renderer/Components/Smart/PanelDesign';
import EquipmentsPanel from 'renderer/Components/Smart/EquipmentsPanel';
 
const { Sider } = Layout;
//const { SubMenu } = Menu;


const Sidebar = () => {
  return (
    <>
      <Sider
      width={300}
        style={{
          height: '100vh',
          zIndex: 20,
        }}
      >
          <div style={{height:"47%"}}>
          <EquipmentsPanel/>
          </div>
          
           <div style={{height:"20%"}}>
             <PanelDesign/>
            </div>
      </Sider>
    </>
  );
};

export default Sidebar;
