import React, { Component } from 'react'
import styles from  '../css/maktaboshxonasi.module.css'
import styless from  '../css/sport.module.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import sport1 from '../img/xavfsizlik1.jpg'
import sport2 from '../img/xavfsizlik2.jpg'
import sport3 from '../img/xavfsizlik3.jpeg'
import sport4 from '../img/xavfsizlik4.jpg'
import sport5 from '../img/xavfsizlik5.jpg'
import sport6 from '../img/xavfsizlik6.jpeg'
import sport7 from '../img/sport7.jpg'
import {Container,Row,Col, Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
export default class Xavfsizlik extends Component {
    componentDidMount(){
        Aos.init({
            duration:2000
        })
    }

    state={
        sports:[
            {
                title: "Qoravul",
                day:'Dush-chor-pay-juma',
                time:{
                        birinchi:'08:30 AM dan 1:30 AM gacha ',
                        ikkinchi:"1:30 PM dan 8:00 PM gacha",
                },
                location:{
                    dushsmen:'1 - smen',
                    seshsmen:'Yo`q',
                    chorsmen:'1 - smen',
                    paysmen:'1 - smen',
                    jumasmen:'2 - smen',
                }
            },
            {
                title: "Militsiya xodimi",
                day:'Dush-sesh-chor-pay-juma',
                time:{
                    birinchi:'08:30 AM dan 1:30 AM gacha ',
                    ikkinchi:"1:30 PM dan 8:00 PM gacha"
            },
            location:{
                dushsmen:'1 - smen, 2 - smen',
                seshsmen:'2 - smen',
                chorsmen:'2 - smen',
                paysmen:'2 - smen',
                jumasmen:'1 - smen',
            }
            },
          
            
        ],}

    
    render()
     {
       


        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 993 },
              items: 4
            },
            desktop: {
              breakpoint: { max: 992, min: 769 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 768, min: 567 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 566, min: 0 },
              items: 1
            }
          }
        return (
            <div>
                <div className={styles.top}>
                    <br /> <br /> <br /> <br />
                    <h1>Xavfsizlik va Qo'riqlash</h1>
                     <Carousel autoplay
                    
                        >
                       <div>
                           <img src={sport1}/>
                       </div>
                       <div>
                           <img src={sport2}/>
                       </div>
                       <div>
                           <img src={sport3}/>
                       </div>
                       <div>
                           <img src={sport4}/>
                       </div>
                       <div>
                           <img src={sport5}/>
                       </div>
                       <div>
                           <img src={sport6}/>
                       </div>
                    </Carousel>
                    
                </div>
                
                
                <Container  className={styles.galereya}>
                    <Row>
                        <Col lg={12}>
                            <h1 className={styles.galereyaText} data-aos="zoom-in-up">Ishchilar</h1>
                        </Col>
                        
                        <Col xl={6} lg={4} md={6} sm={12}>
                            <div data-aos="zoom-in-up" className={styless.card} style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'50px'}}>
                            <div className={styless.card, styless.cardone} style={{borderBottom:'2px solid blue', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                                <header>
                                <div className={styless.avatar}>
                                    <img src={sport7} alt="Jhon Doe" />
                                </div>
                                </header>

                                <h3 className={styless.headerName}>Zohidova Odina</h3>
                                <div className={styless.desc}>
                                <Button className={styless.btncard}>Qoravul</Button>
                                <p>O'zbekiston Respublikasi chempioni,Yoshlar orasida yetakchi murabbiy</p>
                                <p style={{marginTop:'-40px',fontWeight:'900'}}>odina@gmail.com</p>
                                <p style={{marginTop:'-40px',fontWeight:'900'}}>+99923623565</p>
                                </div>

                                <footer className={styless.footer} style={{marginTop:'-40px',fontWeight:'900'}}>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-instagram"></i></a>
                                </footer>
                            </div>

                            </div>


                            
                        </Col>

                      


                        <Col xl={6} lg={6} md={6} sm={12}>
                            <div data-aos="zoom-in-up" className={styless.card} style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'50px'}}>
                            <div className={styless.card, styless.cardone} style={{borderBottom:'2px solid blue',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                                <header>
                                <div className={styless.avatar}>
                                    <img src={sport7} alt="Jhon Doe" />
                                </div>
                                </header>

                                <h3 className={styless.headerName}>Raximov Asilbek</h3>
                                <div className={styless.desc}>
                                <Button className={styless.btncard}>Militsiya xodimi</Button>
                                <p>O'zbekiston Respublikasi chempioni,Yoshlar orasida yetakchi murabbiy</p>
                                <p style={{marginTop:'-40px',fontWeight:'900'}}>raximov@gmail.com</p>
                                <p style={{marginTop:'-40px',fontWeight:'900'}}>+99923623565</p>
                                </div>

                                <footer className={styless.footer} style={{marginTop:'-40px',fontWeight:'900'}}>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-instagram"></i></a>
                                </footer>
                            </div>

                            </div>


                            
                        </Col>
                       

                    </Row>
                </Container>

                <Container className={styles.galereya} style={{padding:'0'}}>
                                  <Row>
                                  <Col lg={12}>
                            <h1 className={styles.galereyaText} data-aos="zoom-in-up">Ish vaqtlari</h1>
                        </Col>
                                  {
                                      this.state.sports.map((item,key)=>{
                                       return(
                                        <Col xl={6} lg={6} md={6} sm={6} className={styless.containerKonkurslar} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                        <div data-aos="zoom-in-up" className={styless.cardsKonkurslar} style={{height:'auto', width:'80%'}}>
                                            <h2>{item.title}</h2>
                                            <span >Ish kunlari:</span>
                                            <p>{item.day}</p>
                                            <span>Ish vaqti:</span>
                                            <p>1 - smen: {item.time.birinchi}</p>
                                            <p>2 - smen: {item.time.ikkinchi}</p>
                                            <span>Smeni:</span>
                                            <p>Dushanba: {item.location.dushsmen}</p>
                                            <p>Seshanba: {item.location.seshsmen}</p>
                                            <p>Chorshanba: {item.location.chorsmen}</p>
                                            <p>Payshanba: {item.location.paysmen}</p>
                                            <p>Juma: {item.location.jumasmen}</p>
                                            
                                            
                              
                                           
                                        </div>
                                    </Col>
                                       )
                                      })
                                  }
                                  </Row>
                                </Container>
                                <Link to="/hayot/uz"><i class="fas fa-chevron-circle-left" style={{position:'fixed', top:'91%', right:'3%', borderRadius:'50%', color:'#02024E',backgroundColor:'white', fontSize:'40px', cursor:'pointer' }}></i></Link>
            </div>
        )
    }
}
