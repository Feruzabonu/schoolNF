import React, { Component } from 'react'
import styles from '../css/navbar2.module.css'
import {BrowserRouter, Link} from 'react-router-dom'
import {MenuOutlined} from '@ant-design/icons'
import {BsClock} from 'react-icons/bs'
import {FiPhone} from 'react-icons/fi'
import {FaFacebookF,FaInstagram,FaTelegramPlane,FaYoutube} from 'react-icons/fa'
import Global from "../host/Global";
import { url, user } from "../host/Host";
import axios from "axios";
export default class Navbar2 extends Component {
    state={
        nav:false,
        nav2:true,
        visible:false,
        school: null,
        id: null,
    }
    openNavbar=()=>{
        this.state.visible?this.setState({visible:false}):this.setState({visible:true})
    }
    change=()=>{
        if(window.scrollY>=200){
            this.setState({
                nav:true
            })
        }else{
          this.setState({
              nav:false
          })
        }
    }
    getSchool = () => {
        // var a=window.location.href.split('/')
        var v = user;
        axios
          .get(`${url}/school-by-admin/${v}`)
          .then((res) => {
            this.setState({
              school: res.data,
              id: v,
            });
          })
          .catch((err) => {
            window.location.href = window.location.href + "/error";
          });
      };
      componentDidMount() {
        this.getSchool();
        window.addEventListener("load", () => {
          this.setState({
            loader: false,
          });
        });
        window.addEventListener("scroll", this.change);
        console.log(this.state.school)
      }
    render() {
        return (
            <div style={{zIndex:'2'}}>
                
               
                <div className={this.state.nav? styles.navbarDiv1:styles.navbarDiv} >                    
                    <div className={styles.navbar} >
                        <ul style={{listStyleType:'none'}}>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/boshsahifa">Bosh sahifa</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabhayoti/">Maktab hayoti</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/qabul/">Qabul</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/yangiliklar/">Yangiliklar</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabmamuriyati/">Maktab ma'muriyati</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabalochilari/">Maktab a'lochilari</Link></li>
                        </ul>
                    </div>
                    <div className={styles.rightNavbar}>
                    {this.state.school !== null
                      ? this.state.school.school_number + " - maktab"
                      : "Maktab raqami"}
                    </div>
                </div>
                <div className={this.state.nav? styles.fixNav:styles.fixNav1} style={{position:'absolute',top:'17%',width:'100%',zIndex:'111111'}}>
                <div className={this.state.nav2?styles.mobileNavbar1: styles.mobileNavbar}>
                <div className={styles.rightNavbar}>
                {this.state.school !== null
                      ? this.state.school.school_number + " - maktab"
                      : "Maktab raqami"}
                    </div>
                    <div className={styles.openHamburger}>
                    <MenuOutlined onClick={()=>this.openNavbar()} style={{color:'white',marginRight:'0px',fontSize:'25px',cursor:'pointer',zIndex:'11111111'}}/>
                    </div>
                </div>
                <div  className={this.state.visible? styles.navMobile:styles.noNav}>
                    <ul style={{listStyleType:'none'}}>

                    <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/boshsahifa">Bosh sahifa</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabhayoti/">Maktab hayoti</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/qabul/">Qabul</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/yangiliklar/">Yangiliklar</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabmamuriyati/">Maktab ma'muriyati</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabalochilari/">Maktab a'lochilari</Link></li>
                        </ul>
                    </div>
                </div>
               
            </div>
        )
    }
}
