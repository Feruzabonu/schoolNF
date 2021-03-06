import React, { Component } from "react";
import styles from "../css/yangiliklar.module.css";
import style from "../css/maktabHayoti.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "antd";
import bg3t from "../img/xorazim5.jpg";
import bg2t from "../img/xorazim6.jpg";
import bg1t from "../img/xorazim8.jpg";
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
import { getNews } from "../host/Config";
import ScaleLoader from "react-spinners/ScaleLoader";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Yangiliklar extends Component {
  state = {
    news: [],
    id: 0,
    loader: true,
  };

  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          this.setState({
            news: res.data,
            loader: false,
          });
        } else {
          this.setState({
            news: res.data,
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
    this.getNews();
  }
  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="loader">
          <div><ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} /></div>
      <div><p>Sayt tajriba tariqasida ishlamoqda</p></div>
       </div>
        ) : (
         
              <div style={{ width: "100vw", overflowX: "hidden" }}>
                 <Navbar />
                   <div>
                   <h1 className={style.headerh}>Maktabning so'nggi yangiliklari bilan tanishing </h1>
              <Carousel
                   dots={false}
                    autoplay
                    effect="fade"
                    style={{ zIndex: "-1" ,width:'100%'}}
                 
                  >
           
               <div className="carg_img">
                      <img src={bg1t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>    
               </Carousel>
            </div>

            <Container fluid>
              <div className={styles.yangi}>
                <h1 style={{ fontSize: "60px" }} data-aos="fade-up">
                  Yangiliklar
                </h1>
              </div>
              <Row>
                <Col lg={7}>
                  {this.state.news.length !== 0 ? (
                    <div className={styles.news} data-aos="zoom-in-right">
                      <div
                        className={styles.news_image}
                        style={{
                          backgroundImage: `url('${
                            this.state.news[this.state.id].image
                          }')`,
                        }}
                      />

                      <h4 style={{ color: "#1EB2A6", marginTop: "30px" }}>
                        {this.state.news[this.state.id].title}
                      </h4>

                      <p className={styles.date}>
                        <i
                          style={{ marginRight: "10px" }}
                          class="far fa-calendar-alt"
                        ></i>
                        {this.state.news[
                          this.state.id
                        ].published_time.substring(0, 10)}
                      </p>
                      <p>{this.state.news[this.state.id].text}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col lg={5}>
                  <div className={styles.recent_news} data-aos="zoom-in-left">
                    <div className={styles.title}>
                      <h3>So'nggi yangiliklar</h3>
                    </div>
                    <div className={styles.body}>
                      <Row>
                        {this.state.news.map((item, key) => {
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
                                  <MDBCol
                                    md="4"
                                    className={styles.card_item_image}
                                  >
                                    <MDBCardImage
                                      src={item.image}
                                      alt="..."
                                      fluid
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
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
