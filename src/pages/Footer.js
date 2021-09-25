import React, { Component } from 'react';
import styles from '../css/footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaMap, FaTelegramPlane } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { AiFillMail } from 'react-icons/ai';
import { RiTwitterFill } from 'react-icons/ri';
import { BiCalendar} from 'react-icons/bi';
import { MdLocalPhone} from 'react-icons/md';
import { BsArrowRight} from 'react-icons/bs';
import { idMaktab, url, user } from "../host/Host";
import axios from "axios";
import { Link } from 'react-router-dom';


export default class Footer extends Component {
    state = {
        data: [],
      };
      componentDidMount() {
        //   var a = window.location.href.split("/");
        var v = user;
        axios.get(`${url}/school-by-admin/${v}`).then((res) => {
          this.setState({ data: res.data });
        });
      }
    render() {
        const style = {  fontSize: "0.8em", color: "#1EB2A6", fontWeight:"400", marginRight:'5px' }
        return (
            <div>
                <div className={styles.footer}>
                     <Container>
                         <Row>
                             <Col xs={12} sm={12} md={6} lg={3}>
                                 <div className={styles.one}>
                                    <h2>{this.state.data !== null ? this.state.data.school_number : ""}-maktab </h2>
                                    <p style={{textTransform:'uppercase', fontSize:'13px', fontWeight:'600', color:'#1EB2A6'}}>{this.state.data !== null ? this.state.data.type : ""}</p>
                                    <p style={{color:'#999999', fontSize:'16px', marginTop:'40px'}}>Sifatli bilim va yuqori natijalarga bizning maktab bilan erishishingiz mumkin!</p>
                                    <ul className={styles.social_media}>
                                        <li><div><a href='#'><RiTwitterFill/></a></div></li>
                                        <li><div><a href='#'><CgFacebook/></a></div></li>
                                        <li><div><a href='#'><FaInstagram/></a></div></li>
                                    </ul>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.two}>
                                     <h5>Asosiy Sahifalar</h5>
                                     <ul className={styles.pages}>
                                        <Link to='/boshsahifa'><li className={styles.links} ><BsArrowRight style={style}/>Bosh sahifa</li></Link>
                                        <Link to='/maktabhayoti'><li className={styles.links} style={{marginTop:'10px'}}><BsArrowRight style={style}/>Maktab hayoti</li></Link>
                                       <Link to='/qabul'> <li className={styles.links} style={{marginTop:'10px'}}><BsArrowRight style={style}/>Qabul</li></Link>
                                        <Link to='/yangiliklar'><li className={styles.links} style={{marginTop:'10px'}}><BsArrowRight style={style}/>Yangiliklar</li></Link>
                                        <Link to='/maktabmamuriyati'><li className={styles.links} style={{marginTop:'10px'}}><BsArrowRight style={style}/>Maktab ma'muriyati</li></Link>
                                        <Link to='/maktabalochilari'><li className={styles.links} style={{marginTop:'10px'}}><BsArrowRight style={style}/>Maktab a'lochilari</li></Link>
                                     </ul>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.three}>
                                 <h5>Qo'shimcha Sahifalar</h5>
                                     <ul className={styles.pages}>
                                        <Link to='/tadbirlar'><li className={styles.links} ><BsArrowRight style={style}/>Tadbirlar</li></Link>
                                        <Link to='/boshsahifa'><li className={styles.links} style={{marginTop:'10px'}}><BsArrowRight style={style}/>Hamkorlar</li></Link>
                                        <Link to='/boshsahifa'><li className={styles.links} style={{marginTop:'10px'}}><BsArrowRight style={style}/>Aloqa</li></Link>
                                     </ul>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={3}>
                                 <div className={styles.four}>
                                 <h5>So'ngi yangiliklar</h5>
                                 <div className={styles.new} style={{marginTop:'40px'}}>
                                     <div className={styles.new_img}><img src='https://picsum.photos/50'/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}>Jan. 18,2021</span></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src='https://picsum.photos/50'/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}>Jan. 18,2021</span></div>
                                             <p>Maktabimizda yangi o'quv yili </p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src='https://picsum.photos/50'/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}>Jan. 18,2021</span></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.five}>
                                    <h5>Savollar uchun</h5>
                                    <div>
                                        <ul className={styles.pages}>
                                            <li style={{display:'flex', height:"auto", marginBottom:'20px'}}>
                                                <div style={{marginRight:'20px'}}><FaMap color="#1EB2A6"/></div>
                                                <div>{this.state.data !== null ? this.state.data.address : ""}</div></li>
                                            <li style={{display:'flex', height:"auto", marginBottom:'20px'}}>
                                                <div style={{marginRight:'20px'}}><MdLocalPhone color="#1EB2A6"/></div>
                                                <div>
                                                    <a href={`tel: ${
                    this.state.data !== null ? this.state.data.phone : "#"
                  }`}style={{color:'#666A6F', textDecoration:'none'}}> {this.state.data !== null ? this.state.data.phone : ""}</a></div></li>
                                            <li style={{display:'flex', height:"auto", marginBottom:'20px'}}>
                                                <div style={{marginRight:'20px'}}><AiFillMail color="#1EB2A6"/></div>
                                                <div>
                                                    <a href={`mailto: ${
                    this.state.data !== null ? this.state.data.email : "#"
                  }`} style={{color:'#666A6F', textDecoration:'none'}}> {this.state.data !== null ? this.state.data.email : "#"}</a></div></li>
                                        </ul>
                                    </div>
                                 </div>
                             </Col>
                         </Row>
                     </Container>
                </div>
            </div>
        )
    }
}
