import React from 'react';
import './App.css';
import { Layout, Avatar, Input, Switch, Menu, Button, Dropdown } from 'antd';
import { SettingFilled, BellFilled, UserOutlined, DownOutlined, RightOutlined } from '@ant-design/icons'; 
import Title from 'antd/lib/typography/Title';
// import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Sider, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Layout>
        <Sider >
            <Avatar shape="square" style={{float:'left', margin:2 }} src='./logo1.png' />
            <Title style={{color:'#1C1919', textAlign:'left', margin:5}} level={4}>VYORIUS</Title>
            <img style={{textAlign:'center', height:100, width:100, borderRadius:'70%', margin:20, marginBottom:0}} alt='Michel' src='./guy.jpg' />
            <Title style={{marginBottom:30}}  level={4}>Michael</Title>
            <Dropdown style={{marginTop:30, marginBottom:30}} overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="1" onClick={e => e.preventDefault()}>
                <Avatar style={{marginRight:30}} src='./plane1.svg' />
                Drone 
                <DownOutlined style={{margin:'0px 10px 0px 40px'}}/>
              </a>
            </Dropdown>
            <Menu style={{textAlign: 'left', fontSize: 12}} theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<RightOutlined/>}>
              MAINTANCE SUMMARY
            </Menu.Item>
            <Menu.Item key="2" icon={<RightOutlined/>}>
              FLIGHT LOGS
            </Menu.Item>
            <Menu.Item key="3" icon={<RightOutlined/>}>
              DAILY REPORT
            </Menu.Item>
            <Menu.Item key="4" icon={<RightOutlined/>}>
              MAINTANCE REPORT
            </Menu.Item>
            <Menu.Item key="5" icon={<RightOutlined/>}>
              INSEPTION REPORT
            </Menu.Item>
            <Menu.Item key="6" icon={<RightOutlined/>}>
              INCIDENT REPORT
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header >
            <div className='container1' >
              <Title style={{ color:'grey', float:'left', height:25.6 }} level={3}>MAINTANCE SUMMARY</Title>
              <SettingFilled style={{float:'right', width:20, height:25.6, display: "flex", alignItems: 'center'}} />
              <BellFilled style={{float:'right', height:25.6, display: "flex", alignItems: 'center'}} />
              <UserOutlined style={{float:'right', height:25.6, display: "flex", alignItems: 'center'}} />
              <Input style={{float:'right', height:25.6, display: "flex", alignItems: 'center'}}  className='inp' placeholder="Search.." />
            </div>
            <div className='container2'>
              <div className='element' >
                <Avatar shape="square" src='./drone.png' />
                <p className='p-element'>Aircraft Down</p>
                <Switch defaultunchecked='true' />
              </div>
              <div className='element' >
                <Avatar shape="square" src='./drone.png' />
                <p className='p-element' >Inseption Due</p>
                <Switch defaultunchecked='true' />
              </div>
              <div className='element'>
                <Avatar shape="square" src='./drone.png' />
                <p className='p-element' >Aircraft Up</p>
                <Switch defaultunchecked='true' />
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              padding: 0,
              minHeight: 280,
              borderLeft: '1px grey solid',
            }}
          >
            <div className='eco'>
              <Title style={{width: '50%', display:'inline-block', color:'white', margin:'6px 0 8px 0'}} level={3}>Ecosystem</Title>
              <Button style={{float: 'right', margin: 6, backgroundColor: 'grey', color: 'white', border: 0}}>Find-Ecosystem</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
          }
}

export default App;
