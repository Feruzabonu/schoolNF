import {
  faDoorOpen,
  faEnvelope,
  faNewspaper,
  faPhone,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import style from "./BoshSahifa.module.css";
import pic20 from "../img/twitter 2.png";

import { Button, Container, Nav,Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rasm1 from "../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import rasm2 from "../img/mira-kireeva-xTq26wLo5do-unsplash.jpg";
import rasm3 from "../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg";


import bg10t from "../img/prezident.jpg";
import bg4t from "../img/p2.jpg";
import bg2t from "../img/xorazim1.jpg";
import bg3t from "../img/xorazim2.jpg";
import bg5t from "../img/xorazim3.jpg";
import bg6t from "../img/xorazim4.jpg";
import bg7t from "../img/xorazim5.jpg";
import bg8t from "../img/xorazim6.jpg";
import bg9t from "../img/xorazim7.jpg";
import bg1t from "../img/xorazim8.jpg";


import "../App.css";
import { Tooltip, Carousel } from "antd";
import { Link, NavLink } from "react-router-dom";
import BoshSahifaDavomi from "./BoshSahifaDavomi";
import MaktabTadbirlari from "./MaktabTadbirlari";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { BiCalendar} from 'react-icons/bi';

import maktab from "../img/1 g.jpg";
import { getNews } from "../host/Config";
import { url, user } from "../host/Host";
import axios from "axios";
// import Clock from 'react-live-clock';
import headerT from "../img/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import YouTube from "react-youtube";
import Global from "../host/Global";
import { Clock } from "./Clock";
import ScaleLoader from 'react-spinners/ScaleLoader';

export default class BoshSahifa extends Component {
  state = {
    loader: true,
    news: [],
    id: 0,
    school: null,
    clock: "00 : 00 : 00",
  };
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${Global.user}`).then((res) => {
      this.setState({
        school: res.data,
      });
      setTimeout(() => {
        this.setState({
          loader: false,
        });
      }, 2000);
    });
  };
  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          // var a = window.location.href.split("/");
          var v = user;

          this.setState({
            news: res.data,
            id: v,
          });
        } else {
          this.setState({
            news: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getNews();
    this.getSchool();

    window.addEventListener("load", () => {
      setTimeout(() => {
        this.setState({
          loader: false,
        });  
      }, 2000);
      
    });
    setInterval(() => {
      this.setState({ clock: Clock() });
    }, 1000);
  }
  render() {
    const props = {
      dots: false,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        {this.state.loader ? (
          <div className="loader">
             <div><ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} /></div>
         <div><p>Sayt test rejimida ishlamoqda</p></div>
          </div>
        ) : (
          <div sryle={{backgroundColor:'white'}}>
            <Navbar/>

            <div className={style.header}>
            <Carousel
                    autoplay
                    effect="fade"
                    style={{ zIndex: "-234" ,width:'100%',height:'100vh'}}
                    {...props}
                  >
                    <div className="carg_img">
                      <img src={bg1t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>
                    <div className="carg_img">
                      <img
                        src={
                          this.state.school !== null
                             ? this.state.school.b_r1 !== null
                               ? this.state.school.b_r1
                               : headerT
                             : headerT
                        }
                        style={{width:'100%',height:'100%',objectFit:'cover'}}
                      />
                    </div>
                    <div className="carg_img">
                      <img src={bg1t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>
                    {/* <div className="carg_img">
                      <img src={bg3t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div> */}
                    <div className="carg_img">
                      <img src={bg4t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>
                    {/* <div className="carg_img">
                      <img src={bg5t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>
                    <div className="carg_img">
                      <img src={bg6t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>
                    <div className="carg_img">
                      <img src={bg7t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div> */}
                    {/* <div className="carg_img">
                      <img src={bg8t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div> */}
                    {/* <div className="carg_img">
                      <img src={bg9t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div> */}
                    <div className="carg_img">
                      <img src={bg10t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>
                  </Carousel>
              <div className="yozuvT">
                <h4>XUSH KELIBSIZ</h4>
                {/* <br /> */}
                <h1>MAKTABIMIZGA</h1>
                <div className="yozuvBtn">
                  <Link to="/maktabhayoti/">
                    <Button style={{backgroundColor:'#1EB2A6'}}>Maktab hayoti</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.containerRow} style={{backgroundColor:'#F8F8F8'}}>
           <Container>
           <Row>
                <Col xs={12} sm={12} md={6} lg={6} className={style.video} >
                  <h3>Maktabga video sayohat</h3>
                  {/* <img src={rasm1} className={style.img}/> */}
                  <YouTube
                    videoId={
                      this.state.school !== null
                        ? this.state.school.video !== null
                          ? this.state.school.video.slice(
                              this.state.school.video.indexOf("youtu.be/") + 9
                            )
                          : ""
                        : ""
                    }
                    opts={{
                      width: "100%",
                      height: "300px",
                      playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 0,
                      },
                    }}
                    className={style.video}
                  />
                  <p className={style.pp}>
                    Maktabimizga virtual sayohat qiling va siz bizning
                    maktabimiz haqida ko'proq ma'lumotga ega bo'ling.
                  </p>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} className={style.video}>
               
                  <h3>Maktabdagi yangiliklari va o'zgarishlar</h3>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12} className={style.newCard}>
                      <Row>
                        {this.state.news.map((item, key) => {
                          return key < 5 ? (
                            <div className={style.new}>
                                     <div className={style.new_img}><img src={item.image}/></div>
                                     <div className={style.new_text}>
                                         <div className={style.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}> {item.published_time.substring(0, 10)}</span></div>
                                             <p>{item.title}</p>
                                         </div>
                                     </div>
                                 </div>
                          ) : (
                            ""
                          );
                        })}
                      </Row>
                    </Col>
                  </Row>

                  <Link to={`/yangiliklar/`}>
                    <button className={style.buttoncha}>
                      <span>Barchasini o'qish</span>
                    </button>
                  </Link>
                </Col>
              </Row>
           </Container>
            </div>

            {/* <div className="oq"></div> */}
            <BoshSahifaDavomi />
            <div className={style.container} style={{position:'relative',textAlign:'center'}}>
              <div className={style.bir}>
                <div className={style.containercha}>
                  <img
                  style={{objectFit:'cover'}}
                    src={
                      this.state.school !== null
                        ? this.state.school.b_c2 !== null
                          ? this.state.school.b_c2
                          : rasm2
                        : rasm2
                    }
                    className={style.image}
                  />
                  <div className={style.overlay}>
                    <Link style={{ color: "white" }} to={`/yangiliklar/`}>
                      <h4 style={{transition:'all 0.3', backgroundColor:'#1EB2A6',color:'white',padding:'10px 30px',display:'inline-block'}}>Yangiliklar</h4>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={style.ikki}>
                <div className={style.containercha}>
                  <img
                  style={{objectFit:'cover'}}
                    src={
                      this.state.school !== null
                        ? this.state.school.b_c1 !== null
                          ? this.state.school.b_c1
                          : rasm1
                        : rasm1
                    }
                    className={style.image}
                  />
                  <div className={style.overlay}>
                  <Link style={{ color: "white" }} to={`/yutuqlar`}>
                  
                    <h4 style={{backgroundColor:'#1EB2A6',color:'white',padding:'10px 30px',display:'inline-block'}}>Yutuqlarimiz</h4>
                  </Link>
                  </div>
                </div>
              </div>
              <div className={style.uch}>
                <div className={style.containercha}>
                  <img
                  style={{objectFit:'cover'}}
                    src={
                      this.state.school !== null
                        ? this.state.school.b_c3 !== null
                          ? this.state.school.b_c3
                          : rasm3
                        : rasm3
                    }
                    className={style.image}
                  />
                  <div className={style.overlay}>
                    <Link style={{ color: "white" }} to={`/gallery/`}>
                      <h4 style={{ transition:'all 0.3',backgroundColor:'#1EB2A6',color:'white',padding:'10px 30px',display:'inline-block'}}>Fotolavhalar</h4>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className={style.elem}>
              <Row style={{ alignItems: "center" }}>
                <Col className={style.htr} lg={2} md={12} sm={12}>
                  <h2 className={style.colT}>
                    Bizning ijtimoiy sahifalarimiz:
                  </h2>
                </Col>

                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href={this.state.school?this.state.school.telegram:''} className={style.colT} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png" />
                    <p>Telegram sahifasi</p>
                  </a>
                </Col>
                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href={this.state.school?this.state.school.instagram:''} className={style.colT} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
                    <p>Instagram sahifasi</p>
                  </a>
                </Col>
                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href={this.state.school?this.state.school.facebook:''} className={style.colT} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" />
                    <p>Facebook sahifasi</p>
                  </a>
                </Col>
                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href="#" className={style.colT} target="_blank">
                    <img src={pic20} />
                    <p>Twitter sahifasi</p>
                  </a>
                </Col>
                <Col className={style.htr} lg={2} md={6} sm={12}>
                  <a href={this.state.school?this.state.school.youtube:''} className={style.colT} target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" />
                    <p>You tube sahifasi</p>
                  </a>
                </Col>
              </Row>
            </div>
            <br />
            <br />
            <MaktabTadbirlari />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
