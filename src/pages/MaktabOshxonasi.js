import React, { Component } from 'react'
import styles from  '../css/maktaboshxonasi.module.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import school1 from '../img/school14.jpg'
import school2 from '../img/school15.jpg'
import school3 from '../img/school16.jpg'
import school4 from '../img/school17.jpg'
import school5 from '../img/school18.jpg'
import school6 from '../img/school7.jpg'
import {Container,Row,Col} from 'react-bootstrap'
import Aos from 'aos'
import {BiStop} from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
export default class MaktabOshxonasi extends Component {
    componentDidMount(){
        Aos.init({
            duration:2000
        })
    }
    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };
        return (
            <div>
                <div className={styles.top}>
                    <br /> <br /> <br /><br />
                    <h1>Maktab Oshxonasi</h1>
                     <Carousel autoplay
                    //  
                        >
                       <div>
                           <img src={school1}/>
                       </div>
                       <div>
                           <img src={school2}/>
                       </div>
                       <div>
                           <img src={school3}/>
                       </div>
                       <div>
                           <img src={school4}/>
                       </div>
                       <div>
                           <img src={school5}/>
                       </div>
                       <div>
                           <img src={school6}/>
                       </div>
                    </Carousel>
                    
                </div>
                <Container fluid style={{marginTop:'50px'}}>
                    <Row>
                    <Col lg={1} className={styles.iconPath}>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'200px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000"  style={{position:'absolute', top: '450px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'700px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'950px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            <div data-aos="fade-down" aos-duration="2000" style={{position:'absolute', top:'1200px',left:'35px'}}><BiStop style={{fontSize:'40px',color:'#0F4C81'}}/></div>
                            
                           
                        </Col>
                        <Col lg={11}>
                        <Row>
                        <Col lg={4} md={12} sm={12} className={styles.Tushlik}>
                            <img src={school5} className={styles.secondImage} data-aos="zoom-in-up"/>
                            </Col>
                            <Col lg={8} md={12} sm={12} className={styles.maktabTushlik} data-aos="zoom-in-up" >
                                <h1>Maktab ovqatlari</h1>
                                <p>Maktabdagi tushlik o'quvchilarning sog'lig'i va farovonligi uchun juda muhimdir, ayniqsa kam ta'minlangan o'quvchilar uchun - va o'quvchilar kun bo'yi o'rganish uchun zarur bo'lgan ovqatlanishni ta'minlaydilar. Tadqiqotlar shuni ko'rsatadiki, bepul yoki arzonlashtirilgan maktab tushliklarini qabul qilish oziq-ovqat xavfsizligi, semirish darajasi va sog'lig'ining yomonlashishini kamaytiradi. Bundan tashqari, maktab o'quvchilarining yangi ovqatlanish standartlari o'quvchilarning oziq-ovqat mahsulotlarini tanlash va iste'mol qilishga, ayniqsa meva va sabzavotlarga ijobiy ta'sir ko'rsatmoqda.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} style={{textAlign:'center',marginTop:'100px'}}>
                                <h1 style={{fontSize:'70px',fontFamily:'Lobster'}} className={styles.cardText} data-aos="zoom-in-up">
                                    Faktlar
                                </h1>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                            <div className={styles.card} data-aos="zoom-in-up">
                                <p>Qayta tiklanadigan ovqatlanish federal ovqatlanish standartlariga javob berishi kerak. Milliy maktablarning tushlik dasturidagi tushlik asosiy oziq moddalar uchun tavsiya etilgan darajalarning uchdan bir qismi yoki undan ko'pini ta'minlaydi.</p>
                            </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                            <div className={styles.card1} data-aos="zoom-in-up">
                            <p>Qayta tiklanadigan taomlar yog'ning 30 foizdan ko'p bo'lmagan va to'yingan yog'ning 10 foizdan kam kaloriya miqdorini ta'minlashi kerak.</p>                               
                            </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                            <div className={styles.card2} data-aos="zoom-in-up">
                             <p>2012-2013 o'quv yilidan boshlab bosqichma-bosqich oziqlanishning yangi standartlari maktablardan Milliy Maktab Tushlik Dasturi orqali beriladigan donli don, meva va sabzavotlarni ko'paytirilishini talab qildi.</p>
                             
                                
                            </div>
                            </Col>
                        </Row>
                        
                        </Col>
                    </Row>
                </Container>
                <Container fluid className={styles.ContainerMenyu}>
                <Row>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Dushanba</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                           
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Seshanba</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Chorshanba</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Payshanba</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                           
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Juma</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                           
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu1}>
                                            <h1>Shanba</h1>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            <h1>Meat Option</h1>
                                            <p>Pork sausages with mashed potato and gravy
Served with seasonal vegetables and bread of the day
Ice cream</p>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                    <div className={styles.cardMenyu}>
                                            
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </Container>
                <Container  className={styles.galereya}>
                    <Row>
                        <Col lg={12}>
                            <h1 className={styles.galereyaText}>Galereya</h1>
                        </Col>
                        <Col lg={4}>
                            <img src={school1}/>
                        </Col>
                        <Col lg={4}>
                            <img src={school2}/>
                        </Col><Col lg={4}>
                            <img src={school3}/>
                        </Col>
                        <Col lg={4}>
                            <img src={school4}/>
                        </Col><Col lg={4}>
                            <img src={school5}/>
                        </Col><Col lg={4}>
                            <img src={school6}/>
                        </Col>
                    </Row>
                </Container>
                <Link to="/hayot/uz"><i class="fas fa-chevron-circle-left" style={{position:'fixed', top:'91%', right:'3%', borderRadius:'50%', color:'#02024E',backgroundColor:'white', fontSize:'40px', cursor:'pointer',  }}></i></Link>
            </div>
        )
    }
}
