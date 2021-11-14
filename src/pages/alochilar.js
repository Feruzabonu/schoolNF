import React, { Component } from "react";
import style from "../css/alochilar.module.css";
import styles from "../css/maktabHayoti.module.css";
import { Carousel } from "antd";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import bg2t from "../img/xorazim7.jpg";
import bg3t from "../img/xorazim1.jpg";
import Aos from "aos";
import { getPupil } from "../host/Config";
import { idMaktab, url, user } from "../host/Host";
import ScaleLoader from "react-spinners/ScaleLoader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";
import bg1t from "../img/bg1t.jpg";
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
getSchool=()=>{
  axios.get(`${url}/school-by-admin/${user}/`).then((res) => {
    this.setState({ data: res.data });
    axios.get(`${url}/excellent/`).then((res1) => {
     var v=[]
     res1.data.map(item=>{
       if(item.school===res.data.id){
         v.push(item)
       }
     })
     
      this.setState({ excellent: v });
      setInterval(() => {
        this.setState({
          loader: false,
        });
      }, 2000);
   
    });
  });

 

}
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    // this.getExcellents();
    this.getSchool();
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loader ? (
          <div className="loader">
            <div>
              <ScaleLoader
                color="#1EB2A6"
                loading={this.state.loader}
                size={120}
              />
            </div>
            <div>
              <p>Sayt tajriba tariqasida ishlamoqda</p>
            </div>
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
              <div className="carg_img">
                <img
                  src={bg1t}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="carg_img">
                <img
                  src={bg3t}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div>
                <Image src={bg2t} className={styles.headerImage} />
              </div>
            </Carousel>

            <div className={style.alochilar}>
              <Container>
                <Row>
                  <h3 className={style.sarlavha}>A'lochilar doskasi</h3>
                  {this.state.excellent !== []
                    ? this.state.excellent.map((item) => {
                        // var pupil = this.setPupils(item);
                        return (
                          <Col lg={6} md={12} sm={12}>
                            <div className={style.card}>
                              <div className={style.cardImg}>
                                <Image
                                  src={
                                    item.image !== null ? item.image : school2
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
                                  {item.full_name}
                                  {/* <p> {item.birth_day}</p> */}
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

<p>
                                  {item.clas}
                                </p>
                                <p>
                                  {item.birth_day}
                                </p>
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
