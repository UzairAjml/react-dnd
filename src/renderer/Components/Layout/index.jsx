  import { Layout } from 'antd';
  import Navbar from './header';
  import Sidebar from './sidebar';
  import './Layout.scss';
  
  const LayoutMain = ({children}) => {
  
    return (
      <Layout style={{overflow:"hidden"}}>
           <Navbar />
       
        <Layout >
        <Sidebar   />
          <div className="mainContent">
              {children}
          </div>
        </Layout>
      </Layout>
    );
  };
  
  export default LayoutMain;
  