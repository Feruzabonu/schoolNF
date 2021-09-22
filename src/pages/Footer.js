import React, { Component } from 'react';
import styles from '../css/footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaMap, FaTelegramPlane } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { RiTwitterFill } from 'react-icons/ri';
import { BiCalendar} from 'react-icons/bi';
import { MdLocalPhone} from 'react-icons/md';
import { BsArrowRight} from 'react-icons/bs';


export default class Footer extends Component {
    
    render() {
        const style = {  fontSize: "0.8em", color: "#1EB2A6", fontWeight:"400", marginRight:'5px' }
        return (
            <div>
                <div className={styles.footer}>
                     <Container>
                         <Row>
                             <Col xs={12} sm={12} md={6} lg={3}>
                                 <div className={styles.one}>
                                    <h2>258-maktab</h2>
                                    <p style={{textTransform:'uppercase', fontSize:'13px', fontWeight:'600', color:'#1EB2A6'}}>Ixtisoslashtirilgan xususiy maktab</p>
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
                                        <li className={styles.links}><BsArrowRight style={style}/>Bosh sahifa</li>
                                        <li className={styles.links}><BsArrowRight style={style}/>Maktab hayoti</li>
                                        <li className={styles.links}><BsArrowRight style={style}/>Qabul</li>
                                        <li className={styles.links}><BsArrowRight style={style}/>Yangiliklar</li>
                                        <li className={styles.links}><BsArrowRight style={style}/>Maktab ma'muriyati</li>
                                        <li className={styles.links}><BsArrowRight style={style}/>Maktab a'lochilari</li>
                                     </ul>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.three}>
                                 <h5>Qo'shimcha Sahifalar</h5>
                                     <ul className={styles.pages}>
                                        <li className={styles.links}><BsArrowRight style={style}/>Tadbirlar</li>
                                        <li className={styles.links}><BsArrowRight style={style}/>Hamkorlar</li>
                                        <li className={styles.links}><BsArrowRight style={style}/>Aloqa</li>
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
                                                <div>Toshkent shahar, Yunusobod tumani</div></li>
                                            <li style={{display:'flex', height:"auto", marginBottom:'20px'}}>
                                                <div style={{marginRight:'20px'}}><MdLocalPhone color="#1EB2A6"/></div>
                                                <div><a href='#'style={{color:'#666A6F', textDecoration:'none'}}>+99893 555 55 55</a></div></li>
                                            <li style={{display:'flex', height:"auto", marginBottom:'20px'}}>
                                                <div style={{marginRight:'20px'}}><FaTelegramPlane color="#1EB2A6"/></div>
                                                <div><a href='#'style={{color:'#666A6F', textDecoration:'none'}}>maktab235@gmail.com</a></div></li>
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
