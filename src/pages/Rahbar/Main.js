import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CrownOutlined,
  LogoutOutlined,
  SafetyCertificateOutlined
 
} from '@ant-design/icons';
import style from '../../css/Main.module.css'
import SinfBolalar from './SinfBolalar';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import SinfYutuqlari from './SinfYutuqlari';
import SinfBaholar from './SinfBaholar';

const { Header, Sider, Content } = Layout;


export default class Main extends Component {
    state = {
        collapsed: false,
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
      logout=()=>{
        var a=window.location.href.split('/')
        console.log(a)
        var b=''
        for(var i=0; i<a.length; i++){
            if(a[i]==='cabinet'){
                window.location.href=b+'cabinet/teacher/bolim'
            }
            else{
                b+=a[i]+'/'
        
            }
            }}
        
  render() {
    return (
      <div>
 <BrowserRouter>
<Layout style={{width:'100%', height:'635px', }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{backgroundColor:'#010531'}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}  style={{backgroundColor:'#010531'}}>
            <Menu.Item key="1" style={{fontSize:'17px', marginTop:'30px',}} icon={<UserOutlined style={{fontSize:'17px'}}/>}><Link to="/cabinet/teacher/rahbar">
             O'quvchilar</Link>
            </Menu.Item>
            <Menu.Item key="2" style={{fontSize:'17px', marginTop:'30px',}} icon={<CrownOutlined style={{fontSize:'17px'}}/>}>
            <Link to="/cabinet/teacher/rahbar/yutuqlar">Yutuqlar</Link>
            </Menu.Item>
            <Menu.Item key="3" style={{fontSize:'17px', marginTop:'30px',}} icon={<SafetyCertificateOutlined style={{fontSize:'17px'}}/>}>
            <Link to="/cabinet/teacher/rahbar/baholar">Baholar</Link>
            </Menu.Item>
            <Menu.Item key="4"  onClick={this.logout} style={{fontSize:'17px', marginTop:'30px',}} icon={<LogoutOutlined style={{fontSize:'17px'}}/>}>
            Chiqish
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflow:'auto',
              height:'70%',
              width:'98%'
            }}
          >
        
         <Switch>
         <Route exact path="/cabinet/teacher/rahbar">
          <SinfBolalar/>
            
            </Route> 
            <Route exact path="/cabinet/teacher/rahbar/yutuqlar">
          <SinfYutuqlari/>
            
            </Route> 
            <Route exact path="/cabinet/teacher/rahbar/baholar">
          <SinfBaholar/>
            
            </Route> 

         </Switch>

        
          </Content>
        </Layout>
      </Layout>
<h2 className={style.sinfraqam}>9 - "A" sinf</h2> 
</BrowserRouter>  
      </div>
    );
  }
}
