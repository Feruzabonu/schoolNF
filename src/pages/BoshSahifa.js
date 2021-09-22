import {
  faDoorOpen,
  faEnvelope,
  faNewspaper,
  faPhone,
  faSchool,
  faSearch,
  faSignInAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { ContainerDashboard, XushKelibsiz } from "./StyleBoshSahifa";
import style from "./BoshSahifa.module.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavbarContainer } from "./StyleBoshSahifa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rasm1 from "../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import rasm2 from "../img/mira-kireeva-xTq26wLo5do-unsplash.jpg";
import rasm3 from "../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg";
import sty from "./sty.module.css";
import gerb from "../img/pngegg.png";
import rasm41 from "../img/1.jpg";
import rasm42 from "../img/2.jpg";
import rasm43 from "../img/3.jpg";
import rasm44 from "../img/4.jpg";
import rasm45 from "../img/5.jpg";
import rasm46 from "../img/6.jpg";
import flagUZ from "../img/flagUZ.png";
import flagRU from "../img/flagRU.png";
import bg1t from "../img/bg1t.jpg";
import bg2t from "../img/bg2t.jpg";
import bg3t from "../img/bg3t.jpg";
import "../App.css";
import { Tooltip, Carousel } from "antd";
import { Link, NavLink } from "react-router-dom";
import BoshSahifaDavomi from "./BoshSahifaDavomi";
import MaktabTadbirlari from "./MaktabTadbirlari";
import Footer from "./Footer";
import NavBar from "./Navbar";
import maktab from "../img/1 g.jpg";
import FadeLoader from "react-spinners/FadeLoader";
import { getNews } from "../host/Config";
import { url, user } from "../host/Host";
import axios from "axios";
// import Clock from 'react-live-clock';
import headerT from "../img/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import YouTube from "react-youtube";
import Global from "../host/Global";
import { Clock } from "./Clock";

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
      this.setState({
        loader: false,
      });
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
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <div>
            {/* <NavBar/> */}
            <ContainerDashboard>
              <div
                className="yuqori"
                style={{ backgroundColor: "transparent", width: "100vw" }}
              >
                <div className="gerbHead" style={{ width: "100%" }}>
                  <img src={gerb} alt="" />
                  <p>
                    Samarqand viloyati Samarqand tumani 33 - iqtisoslashtirilgan
                    davlat umumta'lim maktabi
                  </p>

                  {/* <Link to='/register'><FontAwesomeIcon icon={faSignInAlt} className={style.registericon} /></Link> */}
                  {/* <Link to='/login'  className={style.usericon}><FontAwesomeIcon icon={faUserCircle} /><span style={{fontSize:"20px"}}> Kirish</span></Link> */}
                </div>
                <div id="vaqt">{this.state.clock}</div>
              </div>
            </ContainerDashboard>

            <div className="iconsHead">
              <div>
                <Tooltip placement="left" title="ittower01@gmail.com">
                  {" "}
                  <a
                    target="_blank"
                    style={{ borderRadius: "10px 0px 0px 0px" }}
                    className="ahref"
                    href={`mailto: ${
                      this.state.school !== null
                        ? this.state.school.email
                        : "ittower01@gmail.com"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ fontSize: "25px" }}
                    />
                  </a>
                </Tooltip>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid blue" }}
                  className="ahref"
                  href="https://t.me/samarqand_33_maktab"
                >
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid blue" }}
                  className="ahref"
                  href="https://www.instagram.com/33_maktab_official/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid blue" }}
                  className="ahref"
                  href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid blue" }}
                  className="ahref"
                  href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div>
                <Tooltip placement="left" title="+998 93 082 03 72">
                  {" "}
                  <a
                    target="_blank"
                    className="ahref"
                    style={{
                      borderTop: " 1px solid blue",
                      borderRadius: "0px 0px 0px 10px",
                    }}
                    href={`tel: ${
                      this.state.school !== null
                        ? this.state.school.phone
                        : "+998 93 082 03 72"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{
                        fontSize: "25px",
                        borderRadius: "0px 0px 0px 10px",
                      }}
                    />
                  </a>{" "}
                </Tooltip>
              </div>
            </div>
            <div style={{ width: "100vw" }}>
              <Navbar collapseOnSelect expand="lg" className={style.Navbar}>
                <Container fluid>
                  {/* <Navbar.Brand><span className={style.maktabLogo} style={{ cursor:'pointer',fontSize:'25px', postion:"relative", left:'-10px'}}><Link to={`/${this.state.id}`} style={{color:'gold',fontWeight:'bold', letterSpacing:'5px' }} >{this.state.school!==null?this.state.school.school_number+' - maktab':"Maktab raqami"}</Link></span></Navbar.Brand> */}
                  <Navbar.Toggle
                    style={{ backgroundColor: "darkblue", outline: "none" }}
                  >
                    <i
                      class="fa fa-bars"
                      aria-hidden="true"
                      style={{ fontSize: "1.6rem", color: "white" }}
                    ></i>
                  </Navbar.Toggle>
                  <Navbar.Collapse
                    id="responsive-navbar-nav"
                    style={{ width: "60%", color: "white" }}
                  >
                    <Nav className={style.meauto}>
                      <NavLink to={`/`}>
                        <span className={style.navLink}>Bosh sahifa</span>
                      </NavLink>
                      <NavLink to={`/hayot/`}>
                        <span className={style.navLink}>Maktab hayoti</span>
                      </NavLink>
                      <NavLink to={`/qabul/`}>
                        <span className={style.navLink}>Qabul</span>
                      </NavLink>
                      <NavLink to={`/yangiliklar/`}>
                        <span className={style.navLink}>Yangiliklar</span>
                      </NavLink>
                      <NavLink to={`/rahbariyat/`}>
                        <span className={style.navLink}>
                          Maktab ma'muriyati
                        </span>
                      </NavLink>
                      <NavLink to={`/alochilar/`}>
                        <span className={style.navLink}>
                          Maktab a'lochilari
                        </span>
                      </NavLink>
                      {/* <div className={style.bayroqlar}>
                               <Link to=''><img style={{marginLeft:'15px'}} src={flagUZ} /></Link>
                              <Link to='/ru'><img src={flagRU} /></Link>
                          </div> */}
                      {/* <Link  to='/login' className={style.kirish}><FontAwesomeIcon style={{display:'inline-block'}} icon={faUserCircle} className={style.userIcon} />  Kirish</Link> */}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>

            <div className="gth">
              <div className="carg" style={{ zIndex: "-345" }}>
                <div className="carg_item">
                  <Carousel
                    autoplay
                    effect="fade"
                    style={{ zIndex: "-234" }}
                    {...props}
                  >
                    <div className="carg_img">
                      <img src={bg1t} />
                    </div>
                    <div className="carg_img">
                      <img
                        src={
                          maktab
                          //  this.state.school !== null
                          //    ? this.state.school.b_r1 !== null
                          //      ? this.state.school.b_r1
                          //      : headerT
                          //    : headerT
                        }
                      />
                    </div>
                    <div className="carg_img">
                      <img src={bg2t} />
                    </div>
                  </Carousel>
                </div>{" "}
              </div>
              <div className="yozuvT">
                <h4>XUSH KELIBSIZ</h4>
                {/* <br /> */}
                <h1>MAKTABIMIZGA</h1>
                <div className="yozuvBtn">
                  <Link to="/hayot/">
                    <Button>Maktab hayoti</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="oq"></div> */}
            <div className={style.container}>
              <div className={style.bir}>
                <div className={style.containercha}>
                  <img
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
                      <FontAwesomeIcon
                        icon={faNewspaper}
                        className={style.icon}
                      />
                      <h3>Yangiliklar</h3>
                      <p>
                        Maktabimizga doir bo'lgan yangiliklardan xabardor
                        bo'ling
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={style.ikki}>
                <div className={style.containercha}>
                  <img
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
                    {/* <Link
                      style={{ color: "white" }}
                      to={`/yutuqlar/${Global.user}`}
                    > */}
                    <FontAwesomeIcon icon={faSchool} className={style.icon} />
                    <h3>Yutuqlarimiz</h3>
                    <p>
                      Sizda bizning maktabimiz yutuqlari bilan tanishib chiqish
                      uchun qulay imkoniyat bor
                    </p>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              <div className={style.uch}>
                <div className={style.containercha}>
                  <img
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
                      <FontAwesomeIcon
                        icon={faDoorOpen}
                        className={style.icon}
                      />
                      <h3>Fotolavhalar</h3>
                      <p>
                        Endi siz maktabimizning fotolavhalarini ko'rishingiz
                        mumkin
                      </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className={style.containerRow}>
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className={style.col}>
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

                <Col xs={12} sm={12} md={8} lg={8} className={style.col}>
                  <h3>Maktabdagi yangiliklari va o'zgarishlar</h3>

                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <Row>
                        {this.state.news.map((item, key) => {
                          return key < 6 ? (
                            <Col lg={6}>
                              <Row>
                                <Col
                                  xs={3}
                                  sm={3}
                                  md={3}
                                  lg={3}
                                  className={style.colNews}
                                >
                                  <img
                                    src={item.image}
                                    className={style.rasm}
                                  />
                                </Col>
                                <Col
                                  xs={9}
                                  sm={9}
                                  md={9}
                                  lg={9}
                                  className={style.colNews}
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <p>{item.title}</p>
                                  <h5>
                                    <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>
                                    {item.published_time.substring(0, 10)}
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
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
            </div>
            <BoshSahifaDavomi />
            <MaktabTadbirlari />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
