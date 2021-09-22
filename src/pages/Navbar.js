import React, { Component } from 'react'
import styles from '../css/navbar.module.css'
import {BrowserRouter, Link} from 'react-router-dom'
import {MenuOutlined} from '@ant-design/icons'
import {BsClock} from 'react-icons/bs'
import {FiPhone} from 'react-icons/fi'
import {FaFacebookF,FaInstagram,FaTelegramPlane,FaYoutube} from 'react-icons/fa'
import Global from "../host/Global";
import { url, user } from "../host/Host";
import axios from "axios";
export default class Navbar extends Component {
    state={
        visible:false,
        school: null,
        id: null,
    }
    openNavbar=()=>{
        this.state.visible?this.setState({visible:false}):this.setState({visible:true})
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
        console.log(this.state.school)
      }
    render() {
        return (
            <div style={{zIndex:'2'}}>
                
                <div className={styles.top}>
                    <div className={styles.name}>
                        <h1 style={{color:'white'}}>{this.state.school !== null
                      ? this.state.school.school_number + " - maktab"
                      : "Maktab raqami"}</h1>
                        <p style={{color:'white',marginTop:'-10px'}}>Ixtisoslashtirilgan xususiy maktab</p>
                    </div>
                    <div className={styles.info}>
                     <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:'30px'}}>
                         <div><BsClock style={{fontSize:'35px',color:'white'}}/></div>
                         <div style={{marginLeft:'10px'}}>
                             <p style={{fontSize:'17px',color:'white',marginTop:'10px'}}>Dushanba-juma</p>
                             <p style={{fontSize:'18px',color:'white',fontWeight:'600',marginTop:'-12px'}}>8:00 dan 20:00 gacha</p>
                         </div>
                     </div>
                     <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:'50px'}}>
                         <div><FiPhone style={{fontSize:'35px',color:'white'}}/></div>
                         <div style={{marginLeft:'10px'}}>
                             <p style={{fontSize:'17px',color:'white',marginTop:'10px'}}>Qo'ng'iroq qiling</p>
                             <p style={{fontSize:'18px',color:'white',fontWeight:'600',marginTop:'-12px'}}>{
                      this.state.school !== null
                        ? this.state.school.phone
                        : "+998 93 082 03 72"
                    }</p>
                         </div>
                     </div>
                    </div>
                    <div className={styles.socialMedia}>
                    <div className={styles.icons} style={{curspor:'pointer',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'rgba(0,0,0,0.35)',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'5px'}}>
                         <FaFacebookF style={{color:'#1EB2A6'}}/>
                     </div>
                     <div className={styles.icons}  style={{ curspor:'pointer',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'rgba(0,0,0,0.35)',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'5px'}}>
                         <FaInstagram style={{color:'#1EB2A6'}}/>
                     </div>
                     <div className={styles.icons}  style={{curspor:'pointer',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'rgba(0,0,0,0.35)',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'5px'}}>
                         <FaTelegramPlane style={{color:'#1EB2A6'}}/>
                     </div>
                     <div className={styles.icons}  style={{curspor:'pointer',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'rgba(0,0,0,0.35)',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'5px'}}>
                         <FaYoutube style={{color:'#1EB2A6'}}/>
                     </div>
                    </div>
                </div>
                <div className={styles.navbarDiv}>                    
                    <div className={styles.navbar}>
                        <ul style={{listStyleType:'none'}}>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/home">Bosh sahifa</Link></li>
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
                <div style={{position:'absolute',top:'15%',width:'100%'}}>
                <div className={styles.mobileNavbar}>
                <div className={styles.rightNavbar}>
                {this.state.school !== null
                      ? this.state.school.school_number + " - maktab"
                      : "Maktab raqami"}
                    </div>
                    <div className={styles.openHamburger}>
                    <MenuOutlined onClick={()=>this.openNavbar()} style={{color:'white',marginRight:'10px',fontSize:'25px',cursor:'pointer'}}/>
                    </div>
                </div>
                <div  className={this.state.visible? styles.navMobile:styles.noNav}>
                    <ul style={{listStyleType:'none'}}>
                    <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/home">Bosh sahifa</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabhayoti">Maktab hayoti</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/qabul">Qabul</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/yangiliklar">Yangiliklar</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabmamuriyati">Maktab ma'muriyati</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabalochilari">Maktab a'lochilari</Link></li>
                        </ul>
                    </div>
                </div>
               
            </div>
        )
    }
}
