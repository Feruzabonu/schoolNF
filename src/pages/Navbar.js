import React, { Component } from "react";
import "aos";
import style from "./Navbar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { AOS } from "aos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import { url, user } from "../host/Host";
import Global from "../host/Global";
export default class NavBar extends Component {
  state = {
    school: null,
    id: null,
  };
  getSchool = () => {
    // var a=window.location.href.split('/')
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        this.setState({
          school: res.data,
          id: v,
        });
      })
      .catch((err) => {
        window.location.href = window.location.href + "/error";
      });
  };
  componentDidMount() {
    this.getSchool();
  }
  render() {
    return (
      <div>
        <div>
          <Navbar collapseOnSelect expand="lg" className={style.Navbar}>
            <Container>
              <Navbar.Brand>
                <span
                  className={style.maktabLogo}
                  style={{
                    cursor: "pointer",
                    fontSize: "25px",
                    postion: "relative",
                    left: "-10px",
                  }}
                >
                  <Link
                    to={`/`}
                    style={{
                      color: "gold",
                      fontWeight: "bold",
                      letterSpacing: "5px",
                    }}
                  >
                    {this.state.school !== null
                      ? this.state.school.school_number + " - maktab"
                      : "Maktab raqami"}
                  </Link>
                </span>
              </Navbar.Brand>
              <Navbar.Toggle style={{ color: " rgba(0, 0, 0, 0)" }}>
                <i
                  class="fa fa-bars"
                  aria-hidden="true"
                  style={{ fontSize: "1.6rem", color: "white" }}
                ></i>
              </Navbar.Toggle>
              <Navbar.Collapse
                id="responsive-navbar-nav"
                style={{ width: "100%", color: "white" }}
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
                    <span className={style.navLink}>Maktab ma'muriyati</span>
                  </NavLink>
                  <NavLink to={`/alochilar/`}>
                    <span className={style.navLink}>Maktab a'lochilari</span>
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
          {/* <NavbarContainer>
            <Navbar collapseOnSelect expand="lg">
              <Container>
                <Navbar.Brand>
                  <p className={"maktabLogo"} style={{ cursor: "pointer", marginTop: "8px" }}>
                    <Link to="">Maktab logosi</Link>
                  </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginTop: "-10px", padding: "0", width: "50px", backgroundColor: "white" }} />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                    <NavLink style={{ marginLeft: "20px" }} to="">
                      <p className="navLink">Bosh sahifa</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/hayot">
                      <p className="navLink">Maktab haqida</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/qabul">
                      <p className="navLink">Qabul</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/yangiliklar">
                      <p className="navLink">Yangiliklar</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/rahbariyat">
                      <p className="navLink">Maktab ma'muriyati</p>
                    </NavLink>
                    <NavLink style={{ marginLeft: "20px" }} to="/alochilar">
                      <p className="navLink">Maktab alochilari</p>
                    </NavLink>
                    {/* <div className={style.bayroqlar}>
                      <Link to="">
                        <img alt="" style={{ marginLeft: "15px" }} src={flagUZ} />
                      </Link>
                      <Link to="/ru">
                        <img alt="" src={flagRU} />
                      </Link>
                    </div> */}
          {/* <Link to="/login" className="kirish">
                      <FontAwesomeIcon style={{ display: "inline-block" }} icon={faUserCircle} className="userIcon" /> Kirish
                    </Link>
                  </Nav>
                </Navbar.Collapse> */}
          {/* </Container>
            </Navbar> */}
          {/* </NavbarContainer> */} */
        </div>
      </div>
    );
  }
}
