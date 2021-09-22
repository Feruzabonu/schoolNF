import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { idMaktab, url, user } from "../host/Host";
import Global from "../host/Global";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    //   var a = window.location.href.split("/");
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({ data: res.data });
    });
  }
  render() {
    return (
      <div>
        <div className={style.container}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4} className={style.logoUchun}>
              <h2>Maktab ma'lumoti</h2>
              <p>{this.state.data !== null ? this.state.data.address : ""}</p>
              <p style={{ marginBottom: "0" }}>
                <a
                  className={style.navLink}
                  href={`mailto: ${
                    this.state.data !== null ? this.state.data.email : "#"
                  }`}
                >
                  {this.state.data !== null ? this.state.data.email : "#"}
                </a>
              </p>
              <br />
              <p>
                <a
                  className={style.navLink}
                  href={`tel: ${
                    this.state.data !== null ? this.state.data.phone : "#"
                  }`}
                >
                  {this.state.data !== null ? this.state.data.phone : ""}
                </a>
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} className={style.ulLi}>
              <h2>Bizning maktab</h2>
              <ul>
                <li>
                  <NavLink className={style.navLink} to={`/`}>
                    <p>Bosh sahifa</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style.navLink} to={`/hayot/`}>
                    <p>Maktab hayoti</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style.navLink} to={`/qabul/`}>
                    <p>Qabul</p>
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} className={style.ulLi}>
              <h2>Maktab hayoti</h2>
              <ul>
                <li>
                  {" "}
                  <NavLink className={style.navLink} to={`/yangiliklar/`}>
                    <p>Yangiliklar</p>
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className={style.navLink} to={`/rahbariyat/`}>
                    <p>Maktab ma'muriyati</p>
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className={style.navLink} to={`/alochilar/`}>
                    <p>Maktab a'lochilari</p>
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
