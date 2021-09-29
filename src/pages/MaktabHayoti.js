import React, { Component } from "react";
import styles from "../css/maktabHayoti.module.css";
import "../css/maktahayotiAli.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Carousel } from "antd";

import "bootstrap/dist/css/bootstrap.min.css";
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import school3 from "../img/school3.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import school7 from "../img/school7.jpg";
import school8 from "../img/school8.jpg";
import school9 from "../img/school9.jpg";
import school10 from "../img/school10.jpg";
import school11 from "../img/school11.jpg";
import school12 from "../img/school12.jpg";
import school13 from "../img/school13.jpg";
import { Link } from "react-router-dom";
import { DownCircleOutlined } from "@ant-design/icons";
import { BiStop, BiRightArrowAlt } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from "axios";

import { Pannellum } from "pannellum-react";
import myImage from "../img/360.jpeg";

import Global from "../host/Global";
import { url, user } from "../host/Host";
import Navbar from "./Navbar";
import Footer from './Footer'

export default class MaktabHayoti extends Component {
  state = {
    loading: true,
    data: [],
  };
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    // var a = window.location.href.split("/");
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({ data: res.data });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 2000);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loading === true ? (
          <div className="loader">
            <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <div>     
           <Navbar/>
              <h1 className={styles.headerh}>Maktab hayoti</h1>
           <Carousel
                   dots={false}
                    autoplay
                    effect="fade"
                    style={{ zIndex: "-1" ,width:'100%'}}
                 
                  >
           <div>
           <img  src={
                    data !== null && data.m_h_h2 !== null
                      ? data.m_h_h2
                      : school1
                  }
                  className={styles.headerImage}
                  />
             </div>   
             <div>
             <img
                  src={
                    data !== null && data.m_h_h1 !== null
                      ? data.m_h_h1
                      : school1
                  }
                  className={styles.headerImage}
                />
               </div>      
           </Carousel>
            {/* <Carousel style={{zIndex:'1'}} autoplay className={styles.sliderHeader}>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h1 !== null
                      ? data.m_h_h1
                      : school1
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h2 !== null
                      ? data.m_h_h2
                      : school1
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h3 !== null
                      ? data.m_h_h3
                      : school3
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h4 !== null
                      ? data.m_h_h4
                      : school4
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h5 !== null
                      ? data.m_h_h5
                      : school5
                  }
                  className={styles.headerImage}
                />
              </div>
            </Carousel> */}

            <Container fluid className={styles.secondContainer} id="1" >
              <Row>
                <Col lg={1} className={styles.iconPath}>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "200px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "450px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "700px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "950px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1200px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1450px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1700px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                </Col>
                <Col lg={11}>
                  <div className={styles.secondMain}>
                    <h1 className={styles.secondHeading} data-aos="zoom-in">
                      Tadbirlar va qadriyatlar
                    </h1>
                  </div>
                  <Container fluid>
                    <Row>
                      <Col lg={12}>
                        <p className={styles.secondText} data-aos="zoom-in-up">
                          {data !== null && data.m_h_tq !== null
                            ? data.m_h_tq
                            : `Uzoqlarda, tog'lar so'zining orqasida, Vokaliya va
                        Consonantia mamlakatlaridan uzoqroqda ko'r matnlar
                        yashaydi. Ular alohida yashashadi Alohida ular Semantika
                        qirg'og'idagi Bookmarksgroveda, katta til okeanida
                        yashaydilar. Duden nomli kichik daryo ularning joylari
                        bo'ylab oqadi va uni zarur regelialiya bilan ta'minlaydi.
                        Bu paradisematik mamlakat, unda jumlaning qovurilgan
                        qismlari og'zingizga uchadi. Hattoki qudratli ishora ham
                        ko'r-ko'rona matnlarni nazorat qila olmaydi, bu deyarli
                        nostografik hayot.`}
                        </p>
                      </Col>
                      <Col lg={12}>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={4}>
                            <div className={styles.box}>
                              <Image
                                src={
                                  data !== null && data.m_h_navruz !== null
                                    ? data.m_h_navruz
                                    : school1
                                }
                                className={styles.secondImage}
                                data-aos="zoom-in-up"
                              />
                              <span>Navro'z bayrami</span>
                            </div>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={4}>
                            <div className={styles.box}>
                              <Image
                                src={
                                  data !== null && data.m_h_mustaqillik !== null
                                    ? data.m_h_mustaqillik
                                    : school2
                                }
                                className={styles.secondImage}
                                data-aos="zoom-in-up"
                              />
                              <span>Mustaqillik kuni</span>
                            </div>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={4}>
                            <div className={styles.box}>
                              <Image
                                src={
                                  data !== null && data.m_h_bitiruv !== null
                                    ? data.m_h_bitiruv
                                    : school4
                                }
                                className={styles.secondImage}
                                data-aos="zoom-in-up"
                              />
                              <span>Bitiruv tadbiri</span>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} md={12} sm={12} className={styles.transport}>
                        <Image
                          style={{ width: "100%" }}
                          src={
                            data !== null && data.m_h_t !== null
                              ? data.m_h_t
                              : school5
                          }
                          className={styles.secondImage}
                          data-aos="zoom-in-up"
                        />
                      </Col>
                      <Col
                        lg={8}
                        md={12}
                        sm={12}
                        className={styles.transporttext}
                        data-aos="zoom-in-up"
                      >
                        <h1>Transport xizmati</h1>
                        <p>
                          {data.m_h_t_t !== null && data !== null
                            ? data.m_h_t_t
                            : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud. U erda ko'r-ko'rona matnlar
                            yashaydi. Alohida ular Semantika qirg'og'idagi
                            Bookmarksgroveda, katta til okeanida yashaydilar.
                            Duden nomli kichik daryo ularning joylari bo'ylab
                            oqadi va uni zarur regelialiya bilan ta'minlaydi. Bu
                            paradizmatik. Bu jumlaning qovurilgan qismlari uchib
                            ketadigan jannat matikasi mamlakati.`}
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col lg={12} className={styles.panoramic}>
                  <div className={styles.PannellumReactContainer}>
                    <div className="paramumic_data" >
                      <div>
                        <h2 className={styles.ph2} style={{ width: "80%", marginLeft: "10%" }}>
                          {data.m_h_k_h !== null && data !== null
                            ? data.m_h_k_h
                            : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud.`}
                        </h2>
                        <h4
                        className={styles.ph4}
                          style={{
                            width: "80%",
                            marginLeft: "10%",
                            height: "200px",
                            overflowY: "auto",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {data.m_h_k_t !== null && data !== null
                            ? data.m_h_k_t
                            : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud. U erda ko'r-ko'rona matnlar
                            yashaydi.`}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={1} className={styles.iconPath}>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "200px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6"  }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "450px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "700px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "950px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1200px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6"  }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1450px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#1EB2A6"  }} />
                  </div>
                </Col>
                <Col lg={11} md={12} sm={12}>
                  <Row>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_oshxona !== null && data !== null
                            ? data.m_h_oshxona
                            : school7
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#1EB2A6",
                          marginTop: "30px",
                          padding: "10%",
                          height: "380px",
                        }}
                      >
                        <h1>Maktab oshxonasi</h1>
                        <p>
                          {data.m_h_oshxona_t !== null && data !== null
                            ? data.m_h_oshxona_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/maktaboshxonasi/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_sport !== null && data !== null
                            ? data.m_h_sport
                            : school8
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#1EB2A6",
                          marginTop: "30px",
                          padding: "10%",
                          height: "380px",
                        }}
                      >
                        <h1>Sport mashg'ulotlari</h1>
                        <p>
                          {data.m_h_sport_t !== null && data !== null
                            ? data.m_h_sport_t
                            : `
                            Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/sportmashgulotlari/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      style={{ marginRight: "0%" }}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_musiqa !== null && data !== null
                            ? data.m_h_musiqa
                            : school9
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#1EB2A6",
                          marginTop: "30px",
                          padding: "10%",
                          height: "380px",
                        }}
                      >
                        <h1>San'at va madaniyat</h1>
                        <p>
                          {data.m_h_musiqa_t !== null && data !== null
                            ? data.m_h_musiqa_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/sanatvamadaniyat/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_axborot !== null && data !== null
                            ? data.m_h_axborot
                            : school10
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#1EB2A6",
                          marginTop: "30px",
                          padding: "10%",
                          height: "380px",
                        }}
                      >
                        <h1>Axborot texnologiyalari</h1>
                        <p>
                          {data.m_h_axborot_t !== null && data !== null
                            ? data.m_h_axborot_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/axborottexnologiyalari/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_xavfsizlik !== null && data !== null
                            ? data.m_h_xavfsizlik
                            : school11
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#1EB2A6",
                          marginTop: "30px",
                          padding: "10%",
                          height: "380px",
                        }}
                      >
                        <h1>Xavfsizlik va qo'riqlash</h1>
                        <p>
                          {data.m_h_xavfsizlik_t !== null && data !== null
                            ? data.m_h_xavfsizlik_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/xavfsizlikvaqoriqlash/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      style={{ marginRight: "0%" }}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_tibbiyot !== null && data !== null
                            ? data.m_h_tibbiyot
                            : school12
                        }
                      />
                      <div
                        style={{
                          backgroundColor: "#1EB2A6",
                          marginTop: "30px",
                          padding: "10%",
                          height: "380px",
                        }}
                      >
                        <h1>Sog'lik va salomatlik</h1>
                        <p>
                          {data.m_h_tibbiyot_t !== null && data !== null
                            ? data.m_h_tibbiyot_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/soglikvayaxshilik/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={12}>
                  <Row>
                    <Col lg={6} md={6} sm={12} className={styles.director}>
                      <Image
                        src={
                          data.m_h_o_r !== null && data !== null
                            ? data.m_h_o_r
                            : school13
                        }
                      />
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      sm={12}
                      className={styles.director}
                      style={{ backgroundColor: "#1EB2A6", padding: "10%" }}
                    >
                      <p>
                        {data.m_h_o !== null && data !== null
                          ? data.m_h_o
                          : `Bizning maqsadimiz moliyaviy xizmatlar sohasining
                          markazida bo'lishdir, chunki korxonalar bo'ylab biznes
                          kengaymoqda.`}
                      </p>
                      <h1>
                        {data.m_h_o_t !== null && data !== null
                          ? data.m_h_o_t
                          : "Alisa"}
                      </h1>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Footer/>
          </div>
        )}
      </div>
    );
  }
}
