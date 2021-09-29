import React, { Component } from "react";
import style from "../css/gallery.module.css";
import img1 from "../img/b1.JPG";
import img2 from "../img/b2.jpg";
import img3 from "../img/b3.jpg";
import img4 from "../img/b4.jpg";
import img5 from "../img/b5.jpg";
import img6 from "../img/b6.jpg";
import img7 from "../img/b7.png";
import ScaleLoader from "react-spinners/ScaleLoader";
import { idMaktab, url, user } from "../host/Host";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Global from "../host/Global";
import Navbar from './Navbar'
import Footer from './Footer'
export default class Gallery extends Component {
  state = {
    school: [],
    loader: true,
  };
  getSchool = () => {
    // var a = window.location.href.split("/");
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        this.setState({
          school: res.data,
        });
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 4000);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSchool();
  }
  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="loader">
            <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <div>
           <Navbar/>
            <div className={style.header}>
              <img
                alt=" "
                src={
                  this.state.school !== null
                    ? this.state.school.foto !== null
                      ? this.state.school.foto
                      : img1
                    : img1
                }
                style={{ width: "100%", height: "100%" }}
              />
                <h1 className={style.headerh}>Maktabimiz hayotidan fotolavhalar</h1>
            </div>

            <Container>
              <Row style={{ justifyContent: "center" }}>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto1 !== null
                            ? this.state.school.foto1
                            : img2
                          : img2
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto1 !== null
                            ? this.state.school.foto1
                            : img2
                          : img2
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto1 !== null
                            ? this.state.school.foto1
                            : img2
                          : img2
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto1 !== null
                            ? this.state.school.foto1
                            : img2
                          : img2
                      }
                    />
                  </div>{" "}
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto2 !== null
                            ? this.state.school.foto2
                            : img3
                          : img3
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto2 !== null
                            ? this.state.school.foto2
                            : img3
                          : img3
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto2 !== null
                            ? this.state.school.foto2
                            : img3
                          : img3
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto2 !== null
                            ? this.state.school.foto2
                            : img3
                          : img3
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto3 !== null
                            ? this.state.school.foto3
                            : img4
                          : img4
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto3 !== null
                            ? this.state.school.foto3
                            : img4
                          : img4
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto3 !== null
                            ? this.state.school.foto3
                            : img4
                          : img4
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto3 !== null
                            ? this.state.school.foto3
                            : img4
                          : img4
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto4 !== null
                            ? this.state.school.foto4
                            : img5
                          : img5
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto4 !== null
                            ? this.state.school.foto4
                            : img5
                          : img5
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto4 !== null
                            ? this.state.school.foto4
                            : img5
                          : img5
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto4 !== null
                            ? this.state.school.foto4
                            : img5
                          : img5
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto6 !== null
                            ? this.state.school.foto6
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto6 !== null
                            ? this.state.school.foto6
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto6 !== null
                            ? this.state.school.foto6
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto6 !== null
                            ? this.state.school.foto6
                            : img6
                          : img6
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={12} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto5 !== null
                            ? this.state.school.foto5
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto5 !== null
                            ? this.state.school.foto5
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto5 !== null
                            ? this.state.school.foto5
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto5 !== null
                            ? this.state.school.foto5
                            : img6
                          : img6
                      }
                    />
                  </div>
                </Col>
                <Col lg={6} md={12} cm={12}>
                  <div class={style.imagewrapper}>
                    <img
                      alt=" "
                      class={style.image1}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto7 !== null
                            ? this.state.school.foto7
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image2}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto7 !== null
                            ? this.state.school.foto7
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image3}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto7 !== null
                            ? this.state.school.foto7
                            : img6
                          : img6
                      }
                    />
                    <img
                      alt=" "
                      class={style.image4}
                      src={
                        this.state.school !== null
                          ? this.state.school.foto7 !== null
                            ? this.state.school.foto7
                            : img6
                          : img6
                      }
                    />
                  </div>
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
