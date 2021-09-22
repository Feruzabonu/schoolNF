import React, { Component } from 'react'
import styles from  '../css/maktaboshxonasi.module.css'
import styless from  '../css/sport.module.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import sport1 from '../img/sport1.jpg'
import sport2 from '../img/sport2.jpg'
import sport3 from '../img/sport3.jfif'
import sport4 from '../img/sport4.jpg'
import sport5 from '../img/sport5.jpg'
import sport6 from '../img/sport6.jpg'
import sport7 from '../img/sport7.jpg'
import {Container,Row,Col, Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
export default class Sport extends Component {
    componentDidMount(){
        Aos.init({
            duration:2000
        })
    }

    state={
        sports:[
            {
                title: "Taekvondo",
                day:'Dush-chor-juma',
                time:'12:30 dan 14:30 gacha ',
                location:"1-sport zal",
            },
            {
                title: "Gimnastika",
                day:'Sesh-pay-shanba',
                time:'11:30 dan 13:30 gacha ',
                location:"1-sport zal",
            },
            {
                title: "Boks",
                day:'Dush-chor-juma',
                time:'11:30 dan 14:30 gacha ',
                location:"2-sport zal",
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
                    <h1>Sport mashg'ulotlari</h1>
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
                            <h1 className={styles.galereyaText} data-aos="zoom-in-up">Murabbiylar</h1>
                        </Col>
                        
                        <Col lg={4} md={6} sm={12}>
                            <div data-aos="zoom-in-up" className={styless.card} style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'50px'}}>
                            <div className={styless.card, styless.cardone} style={{borderBottom:'2px solid blue', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                                <header>
                                <div className={styless.avatar}>
                                    <img src={sport7} alt="Jhon Doe" />
                                </div>
                                </header>

                                <h3 className={styless.headerName}>Toshmatov Toshmat</h3>
                                <div className={styless.desc}>
                                <Button className={styless.btncard}>Taekvando murabbiyi</Button>
                                <p>O'zbekiston Respublikasi chempioni,Yoshlar orasida yetakchi murabbiy</p>
                                <p style={{marginTop:'-40px',fontWeight:'900'}}>toshmatov@gmail.com</p>
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

                        <Col lg={4} md={6} sm={12}>
                            <div data-aos="zoom-in-up" className={styless.card} style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'50px'}}>
                            <div className={styless.card, styless.cardone} style={{borderBottom:'2px solid blue',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                                <header>
                                <div className={styless.avatar}>
                                    <img src={sport7} alt="Jhon Doe" />
                                </div>
                                </header>

                                <h3 className={styless.headerName}>Asadova Mohinur</h3>
                                <div className={styless.desc}>
                                <Button className={styless.btncard}>Gimnastika murabbiyi</Button>
                                <p>O'zbekiston Respublikasi chempioni,Yoshlar orasida yetakchi murabbiy</p>
                                <p style={{marginTop:'-40px',fontWeight:'900'}}>asadov@gmail.com</p>
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


                        <Col lg={4} md={6} sm={12}>
                            <div data-aos="zoom-in-up" className={styless.card} style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'50px'}}>
                            <div className={styless.card, styless.cardone} style={{borderBottom:'2px solid blue',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
                                <header>
                                <div className={styless.avatar}>
                                    <img src={sport7} alt="Jhon Doe" />
                                </div>
                                </header>

                                <h3 className={styless.headerName}>Raximov Asilbek</h3>
                                <div className={styless.desc}>
                                <Button className={styless.btncard}>Boks murabbiyi</Button>
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
                            <h1 className={styles.galereyaText} data-aos="zoom-in-up">Mashg'ulot vaqtlari</h1>
                        </Col>
                                  {
                                      this.state.sports.map((item,key)=>{
                                       return(
                                        <Col xl={4} lg={6} md={6} sm={6} className={styless.containerKonkurslar}>
                                        <div data-aos="zoom-in-up" className={styless.cardsKonkurslar}>
                                            <h2>{item.title}</h2>
                                            <span >Dars kunlari:</span>
                                            <p>{item.day}</p>
                                            <span>Dars vaqti:</span>
                                            <p>{item.time}</p>
                                            <span>Dars o'tiladigan joy:</span>
                                            <p>{item.location}</p>
                              
                                           
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
