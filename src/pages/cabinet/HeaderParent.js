import React, { Component } from 'react'
import style from '../../css/HeaderParent.module.css'
import student from '../../img/student.jpg'
import {Col, Row} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';

export default class HeaderParent extends Component {
 
    
    logout=()=>{
var a=window.location.href.split('/')
console.log(a)
var b=''
for(var i=0; i<a.length; i++){
    if(a[i]==='cabinet'){
        window.location.href=b
    }
    else{
        b+=a[i]+'/'

    }
    }

    }
    render() {
        const menu = (
            <Menu style={{backgroundColor:'#02024e'}} className={style.menuDrop}>
              <Menu.Item className={style.menuItem} onClick={this.logout} style={{color:'white',backgroundColor:'#02024e'}} key="1"><LogoutOutlined style={{color:'white', marginRight:'10px', fontSize:'16px', marginTop:'-5px'}}/><span style={{transform:'translate(15px, 20px)'}}>Chiqish</span></Menu.Item>
              
            </Menu>
          );
        return (
            <div>
                <div className={style.box}>
<Row>
    <Col>
    <div className={style.h1}>
    <NavLink style={{textDecoration:'none'}} to="/cabinet/parents"><h1 style={{fontSize:'40px', width:'100%', fontWeight:'bold'}}>9 "A"</h1></NavLink></div>
    </Col>
    
    <Col>
    <div className={style.img}>
    <div><img src={student}/></div>
    <p>  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" style={{color:'white'}} onClick={e => e.preventDefault()}>
     Rustamova Dilnoza <DownOutlined />
    </a>
  </Dropdown></p>
   
    </div>
    </Col>
    
</Row>
                </div>
            </div>
        )
    }
}
