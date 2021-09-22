import React, { Component } from "react";
import style from "../../css/HeaderParent.module.css";
// import student from "../../img/student.jpg";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Menu, Dropdown } from "antd";

import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { getStaff } from "../../host/Config";
// import Global from "../../host/Global";

export default class HeaderTeacher extends Component {
  state = {
    teacher: [],
  };
  getTeacher = () => {
    getStaff().then((res) => this.setState({ teacher: res.data }));
  };
  logout = () => {
    window.location.href = "/uz";
  };

  componentDidMount() {
    this.getTeacher();
  }
  render() {
    const menu = (
      <Menu style={{ backgroundColor: "#02024e" }} className={style.menuDrop}>
        <Menu.Item className={style.menuItem} onClick={this.logout} style={{ color: "white", backgroundColor: "#02024e" }} key="1">
          <LogoutOutlined style={{ color: "white", marginRight: "10px", fontSize: "16px", marginTop: "-5px" }} />
          <span style={{ transform: "translate(15px, 20px)" }}>Chiqish</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div className={style.box}>
          <Row>
            <Col>
              <div className={style.h1}>
                <NavLink style={{ textDecoration: "none" }} to="/cabinet/teacher/bolim">
                  <h1 style={{ fontSize: "26px" }}>Bosh bo'lim</h1>
                </NavLink>
              </div>
            </Col>

            <Col>
              <div className={style.img}>
                <div>
                  <img alt="" src={this.state.teacher.image} />
                </div>
                <p>
                  {" "}
                  <Dropdown overlay={menu}>
                    <div className="ant-dropdown-link" style={{ color: "white" }} onClick={(e) => e.preventDefault()}>
                      {this.state.teacher.full_name} <DownOutlined />
                    </div>
                  </Dropdown>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
