import React, { Component } from "react";
import style from "../css/alochilar.module.css";
import styles from "../css/maktabHayoti.module.css";
import { Carousel } from "antd";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import Aos from "aos";
import { getPupil } from "../host/Config";
import { url, user } from "../host/Host";
import ScaleLoader from "react-spinners/ScaleLoader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";
import bg1t from '../img/bg1t.jpg'
export default class Alochilar extends Component {
  state = {
    loader: true,
    excellent: [],
    pupil: [],
    pupils: [],
    data: null,
    id: 0,
    school: null,
    class: [],
  };

  getExcellents = () => {
    // var a = window.location.href.split("/");
    var v = user;
    axios
      .get(`${url}/excellent/`)
      .then((res) => {
        this.setState({
          excellent: res.data,
          // loader: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          // excellent: res.data,
          // loader: false,
        });
      });
    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      this.setState({ data: res.data });
    });
    axios
      .get(`${url}/class-by-school/${v}/`)
      .then((res) => {
        this.setState({
          class: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // this.setState({loader:false})
      });
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  };

  getPupil = () => {
    getPupil()
      .then((res) => {
        this.setState({
          pupils: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  setPupils = (id) => {
    var pupil = {};
    if (this.state.pupils !== []) {
      this.state.pupils.map((item1) => {
        if (item1.id === id) {
          pupil = item1;
        }
      });
    }
    return pupil;
  };

  echoClasses = (id) => {
    var classes = {};
    console.log(id, this.state.class);
    if (this.state.class !== []) {
      this.state.class.map((item1) => {
        if (item1.id === id) {
          classes = item1;
         
        }
      });
    }
    return classes;
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getExcellents();
    this.getPupil();
    window.addEventListener("load", () => {
      // this.setState({
      //   loader:false
      // })
    });
    setInterval(()=>{
      this.setState({
          loader:false
      })
  },2000)
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loader ? (
          <div className="loader">
            <ScaleLoader
              color="#1EB2A6"
              loading={this.state.loader}
              size={120}
            />
          </div>
        ) : (
          <div>
            <Navbar />
            <h1 className={style.headerh}>Maktab a'lochilari</h1>
            <Carousel
              dots={false}
              autoplay
              effect="fade"
              style={{ zIndex: "-1", width: "100%" }}
            >
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
                   bg1t
                  }
                  className={styles.headerImage}
                />
              </div>
            </Carousel>

            <div className={style.alochilar}>
              <Container>
                <Row>
                  <h3 className={style.sarlavha}>A'lochilar doskasi</h3>
                  {this.state.excellent !== []
                    ? this.state.excellent.map((item) => {
                        var pupil = this.setPupils(item.pupil);
                        return (
                          <Col lg={6} md={12} sm={12}>
                            <div className={style.card}>
                              <div className={style.cardImg}>
                                <Image
                                  src={
                                    pupil.image !== null ? pupil.image : school2
                                  }
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div
                                className={style.cardText}
                                style={{
                                  padding: "10px",
                                  backgroundColor: "white",
                                }}
                              >
                                <p
                                  style={{
                                    color: "#1EB2A6",
                                    fontWeight: "600",
                                    marginTop: "10px",
                                  }}
                                >
                                  A'lochi o'quvchi
                                </p>
                                <h6
                                  style={{
                                    marginTop: "-5px",
                                    marginLeft: "10px",
                                  }}
                                >
                                  {pupil.full_name} {pupil.birth_day}
                                </h6>
                                <FaStar
                                  style={{
                                    color: "#1EB2A6",
                                    marginLeft: "10px",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "#1EB2A6",
                                    marginLeft: "5px",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "#1EB2A6",
                                    marginLeft: "5px",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "#1EB2A6",
                                    marginLeft: "5px",
                                  }}
                                />
                                <FaStar
                                  style={{
                                    color: "#1EB2A6",
                                    marginLeft: "5px",
                                  }}
                                />
                             
                                {this.echoClasses(pupil.clas).class_number} - "
                                {this.echoClasses(pupil.clas).class_char}" sinf
                              </div>
                            </div>
                          </Col>
                        );
                      })
                    : ""}
                </Row>
              </Container>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
