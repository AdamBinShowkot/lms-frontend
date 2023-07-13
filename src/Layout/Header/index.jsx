import React,{
  useState,
  useEffect
} from 'react';
import {
    Layout,
    Row,
    Col,
    Button,
    Drawer,
    Radio,
    Space,
    Divider,
    Tabs
} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UserSwitchOutlined
} from '@ant-design/icons';
import HOne from './Heading/HOne';
import HTwo from './Heading/HTwo'
import './index.css'
const { Header, Sider, Content } = Layout;

const HeaderMain=({collapsed,setCollapsed,colorBgContainer})=>{
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    //console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const items = [
    {
      key: '1',
      label: `H1`,
      children: <HOne/>,
    },
    {
      key: '2',
      label: `H2`,
      children: <HTwo/>,
    },
    {
      key: '3',
      label: `H3`,
      children: <HTwo/>,
    },
    {
      key: '4',
      label: `H4`,
      children: <HTwo/>,
    },
    {
      key: '5',
      label: `H5`,
      children: <HTwo/>,
    },
    {
      key: '6',
      label: `H6`,
      children: <HTwo/>,
    },
    {
      key: '7',
      label: `P`,
      children: <HTwo/>,
    },
    {
      key: '8',
      label: `SPAN`,
      children: <HTwo/>,
    },
  ];
  return(
    <>
      <Header
      className='top-header-container'
      id={`${collapsed?"collapsed-header":"expand-header"}`}
      style={{
          padding: 0,
          background: '#f2f3f8',
      }}
      >
        <Row>
          <Col span={12}>
            <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          </Col>

          <Col span={12} style={{textAlign:'right'}}>
            <UserSwitchOutlined 
            style={{
              fontSize:'20px',
              marginRight:'15px'
            }}
            onClick={() =>{
              localStorage.clear();
              window.location.href="/"
             // setOpen(true)
            }}
            />
            <SettingOutlined 
            style={{
              fontSize:'20px',
              marginRight:'16px'
            }}
            onClick={() =>{
              // localStorage.clear();
              // window.location.href="/"
              setOpen(true)
            }}
            />
          </Col>
        </Row>
      </Header>


      {/* Drawer Section */}
      <Drawer
      className='settings-drawer'
      title={<Row>
        <Col 
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
        span={24}>
          <span className='setting-title'>Basic Theme Settings</span>
        </Col>
      </Row>}
      placement="right"
      width={500}
      onClose={()=>{
        setOpen(!open)
      }}
      open={open}
      >
        <Row>
          <Col 
          span={24}
          className='body-container'
          >
            <Row>
              <Col span={24}>
                <p className='inner-title'>
                  Theme Color
                </p>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1} style={{}}>Dark</Radio>
                  <Radio value={2}>White</Radio>
                  <Radio value={3}>Yellow</Radio>
                  <Radio value={4}>Dark</Radio>
                </Radio.Group>
              </Col>
            </Row>
            <Divider/>

            <Row>
              <Col span={24}>
                <p className='inner-title'>
                  Typography
                </p>
                <Row>
                  <Col span={24}>
                    <Tabs 
                    defaultActiveKey="1"
                    size='small' 
                    items={items} 
                    onChange={onChange}
                    type='card'
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider/>
          </Col>
        </Row>
      </Drawer>
    </>
  )
}
export default HeaderMain;