import React, { Component } from "react";
import yangilik1 from "../img/yangilik1.jpg";
import yangilik2 from "../img/yangilik2.jpg";
import new1 from "../img/new1.jpg";
import new2 from "../img/new2.jpg";
import new3 from "../img/new3.jpg";
import new4 from "../img/new4.jpg";
import new5 from "../img/13.jpg";
import new6 from "../img/11.jpg";
import new7 from "../img/12.jpg";
import new8 from "../img/4.jpg";
import new9 from "../img/6.jpg";
import tadbir1 from "../img/tadbir1.jfif";
import tadbir2 from "../img/tadbir2.jfif";
import tadbir3 from "../img/tadbir3.jfif";
import tadbir4 from "../img/tadbir4.jfif";
import styles from "../css/yangiliklar.module.css";

// import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// import {DownCircleOutlined} from '@ant-design/icons'
import { Carousel } from "antd";
import { getEvents } from "../host/Config";
import FadeLoader from "react-spinners/FadeLoader";

import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { url, user } from "../host/Host";
import Global from "../host/Global";
import { ScaleLoader } from "react-spinners";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { Carousel } from "antd";

export default class Yangiliklar extends Component {
  state = {
    events: [],
    id: 0,
    loader: true,
    data: null,
  };

  getEvents = () => {
    // var a = window.location.href.split("/");
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({ loading: false, data: res.data });
    });
    getEvents()
      .then((res) => {
        console.log(res.data);
        if (window.location.href.indexOf("id=") === -1) {
          this.setState({
            events: res.data,
            loader: false,
          });
        } else {
          this.setState({
            events: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
            loader: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loader: false,
        });
      });
  };
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getEvents();
    console.log(this.state.loader)
  }

  // onclick_new=(link)=>{
  //       <Link to="/${link}/uz"></Link>
  // }
  render() {
    const contentStyle = {
      width: "100%",
      height: "97vh",
      objectFit: "cover",
      color: "#fff",
      lineHeight: "90vh",
      textAlign: "center",
      fontFamily: "Lobster",
    };
    return (
      <div>
        {this.state.loader ? (
          <div className="loader">
          < ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
        </div>
        ) : (
          <div>
            {/* ============Header============== */}
            <Navbar/>
            <div className={styles.header_t} style={{backgroundImage:`url(${
                    this.state.data !== null && this.state.data.m_h_h4 !== null
                      ? this.state.data.m_h_h4
                      : new1
                  })`}}>
              <h1>Maktabimiz so'nggi tadbirlari bilan tanishing</h1>
           </div>

            <Container fluid>
              <div className={styles.yangi}>
                <h1 style={{ fontSize: "60px" }} data-aos="fade-up">
                  Tadbirlar
                </h1>
              </div>
              <div
                className={styles.line}
                style={{ borderColor: "#0F4C81" }}
                data-aos="fade-up"
              ></div>
              <Row>
                <Col lg={7}>
                  {this.state.events.length !== 0 ? (
                    <div className={styles.news} data-aos="zoom-in-right">
                      <img
                        src={this.state.events[this.state.id].image}
                        alt="Foto lavha"
                      />
                      <h3>{this.state.events[this.state.id].title}</h3>

                      <p className={styles.date}>
                        <i
                          style={{ marginRight: "10px" }}
                          class="far fa-calendar-alt"
                        ></i>
                        {this.state.events[
                          this.state.id
                        ].published_time.substring(0, 10)}
                      </p>
                      <p>{this.state.events[this.state.id].text}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col lg={5}>
                  <div
                    className={styles.recent_news}
                    style={{ backgroundColor: "#1EB2A6" }}
                    data-aos="zoom-in-left"
                  >
                    <div className={styles.title}>
                      <h3 style={{ color: "white" }}>So'ngi tadbirlar</h3>
                    </div>
                    <div className={styles.body}>
                      <Row>
                        {this.state.events.map((item, key) => {
                          return (
                            <Col
                              lg={12}
                              md={12}
                              sm={12}
                              style={{ marginBottom: "10px" }}
                              className={styles.body_card}
                            >
                              <MDBCard
                                onClick={() => {
                                  this.setState({ id: key });
                                }}
                                style={{ maxWidth: "540px" }}
                              >
                                <MDBRow className="g-0">
                                  <MDBCol md="4">
                                    <MDBCardImage
                                      src={item.image}
                                      alt="..."
                                      fluid
                                      style={{ margin: "7px" }}
                                    />
                                  </MDBCol>
                                  <MDBCol md="8">
                                    <MDBCardBody>
                                      <MDBCardTitle>{item.title}</MDBCardTitle>

                                      <MDBCardText>
                                        <small className="text-muted">
                                          <p className={styles.date}>
                                            <i
                                              style={{ marginRight: "10px" }}
                                              class="far fa-calendar-alt"
                                            ></i>
                                            {item.published_time.substring(
                                              0,
                                              10
                                            )}{" "}
                                          </p>{" "}
                                        </small>
                                      </MDBCardText>
                                    </MDBCardBody>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCard>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Footer/>
          </div>
         
        )
        }
      </div>
    );
  }
}
