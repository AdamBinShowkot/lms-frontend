import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    UndoOutlined
  } from '@ant-design/icons';
  import { 
    Button, 
    Layout, 
    Menu,
    Row,
    Col,
    Card,
    theme 
  } from 'antd';
  import { useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  import SiderMain from './Sider';
  import ContentMain from './Content';
  import HeaderMain from './Header';
  const { Header, Sider, Content } = Layout;


  const MainLayout = ({}) => {
    const [collapsed, setCollapsed] = useState(false);
    const history=useNavigate();
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    return (
      <>
        <Layout 
        style={{ minHeight: "100vh",overflow:"hidden" }}
        >
          <SiderMain collapsed={collapsed} />
          <Layout>
            <HeaderMain 
            collapsed={collapsed} 
            setCollapsed={setCollapsed}
            colorBgContainer={colorBgContainer}
            />

            <ContentMain 
            collapsed={collapsed}
            colorBgContainer={colorBgContainer}
            />
          </Layout>
        </Layout>
      </>
    );
  };
  export default MainLayout;