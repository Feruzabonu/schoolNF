import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./MaktabTadbirlari.module.css";
import school from "../img/gerb.jpg";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import her4 from "../img/h4.jpg";
import her5 from "../img/h5.png";
import "./form.css";
import yil from "../img/yil.jpg";
import her6 from "../img/h6.png";
import {
  Clusterer,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  TrafficControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import "react-multi-carousel/lib/styles.css";
import rasm3 from "../img/13.jpg";
import Carousel from "react-multi-carousel";
import { Tooltip } from "antd";

import {
  faClock,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { getEvents } from "../host/Config";
import Global from "../host/Global";
export default class MaktabTadbirlari extends Component {
  state = {
    events: [],
    id: 0,
    number: [1, 2, 3],
  };

  getEvents = () => {
    getEvents()
      .then((res) => {
        console.log(res.data);
        if (window.location.href.indexOf("id=") === -1) {
          this.setState({
            events: res.data,
          });
        } else {
          this.setState({
            events: res.data,
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
    this.getEvents();
  }
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };

    return (
      <div>
        <div
          className={style.container}
          style={{ backgroundColor: "white", marginTop: "-10px" }}
        >
          <h2>Maktab tadbirlari</h2>
          <Row style={{ textAlign: "center" }}>
            {this.state.events.map((item, key) => {
              return key < 3 ? (
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  style={{ marginTop: "15px" }}
                >
                  <div className={style.flipBox}>
                    <div className={style.flipBoxInner}>
                      <div className={style.flipBoxFront}>
                        <img src={item.image} alt="Paris" />
                      </div>
                      <div className={style.flipBoxBack}>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </div>
                  <Row className={style.map}>
                    <Col xs={10} sm={10} md={10} lg={10}>
                      <h3>{item.title}</h3>
                      <div className={style.innerMap}>
                        <FontAwesomeIcon
                          className={style.redIcon1}
                          icon={faCalendarAlt}
                        />
                        <span>{item.date}</span>
                      </div>
                      <div className={style.innerMap}>
                        <FontAwesomeIcon
                          className={style.redIcon1}
                          icon={faClock}
                        />
                        <span>{item.time}</span>
                      </div>
                      <div className={style.innerMap}>
                        <FontAwesomeIcon
                          className={style.redIcon2}
                          icon={faMapMarkerAlt}
                        />
                        <span>{item.address}</span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              ) : (
                ""
              );
            })}
          </Row>
          <Link to={`/tadbirlar/`} className={style.barchasiniKurish}>
            Hamma tadbirlarni ko'rish -&gt;
          </Link>
        </div>
        <div style={{ backgroundColor: "white", marginTop: "-30px" }}>
          <h1 className={style.sarlavha}> Bizning hamkorlarimiz</h1>

          <div className="sliderHomiy" style={{ backgroundColor: "white" }}>
            <Carousel
              responsive={responsive}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              infinite={true}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://president.uz/oz" target="_blank">
                    <img src={school} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://www.gov.uz/uz" target="_blank">
                    <img src={her2} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasining Hukumat portali</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://lex.uz/" target="_blank">
                    <img src={her3} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi qonun hujjatlari milliy bazasi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://my.gov.uz/oz" target="_blank">
                    <img src={her4} />
                  </a>
                </div>
                <p>Interaktiv davlat xizmatlarining Yagona portali</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://www.uzedu.uz/" target="_blank">
                    <img src={her5} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a href="https://ittower.uz/" target="_blank">
                    <img src={her6} />
                  </a>
                </div>
                <p>IT Tower firmasi </p>
              </div>
            </Carousel>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <Row
            style={{
              backgroundColor: "white",
              paddingTop: "40px",
              maxWidth: "100% !important",
            }}
          >
            <Col lg={6} md={12} sm={12} className="fgr">
              <h1 className={style.sarlavha}>Bizning manzilimiz</h1>
              <div className="mapsr">
                <br />
                <YMaps key={"uz_UZ"} query={{ lang: "uz_UZ" }}>
                  <Map
                    width="100%"
                    height="400px"
                    // style={{marginLeft:"10%"}}
                    state={{
                      center: [39.651698, 66.97187],
                      zoom: 13,
                    }}
                  >
                    <Clusterer
                      options={{
                        groupByCoordinates: false,
                      }}
                    >
                      <Placemark
                        key={-1}
                        geometry={[39.651698, 66.97187]}
                        options={{
                          iconLayout: "default#image",
                        }}
                        properties={{
                          hintContent: `<h6><b className="personStyle">33 - maktab</b></h6>`,
                        }}
                        modules={["geoObject.addon.hint"]}
                      />
                    </Clusterer>

                    <GeolocationControl options={{ float: "left" }} />

                    <RouteButton options={{ float: "right" }} />
                    <ZoomControl options={{ float: "left" }} />
                  </Map>
                </YMaps>
                <br />
                <img className="yil" src={yil} />
                <br />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="fgr">
              <h1 className={style.sarlavha}>Murojaat qilish</h1>

              <div className="formFER">
                <div className="container">
                  <div className="brand-logo"></div>
                  {/* <div className="brand-title">TWITTER</div> */}
                  <div className="inputs">
                    <form>
                      <label>F.I.O.</label>
                      <input type="text" placeholder="Ism Familiya Otchistva" />
                      <label>Telefon raqam</label>
                      <input type="text" placeholder="+998 99 999 99 99" />
                      <label>Murojaat</label>
                      <textarea placeholder="Murojaat matni..."></textarea>
                      <button type="submit">Yuborish</button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
