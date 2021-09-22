import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../../css/TeacherCss/Students.module.css";
import { getSpec, getStaffBySchool } from "../../host/Config";
import Global from "../../host/Global";
import yuksak from "../../img/alish.png";
import gimnastika from "../../img/rayhon.jpeg";

export default class Teachers extends Component {
  state = {
    teachers: [],
    spec: [],
  };
  getStaffs = () => {
    getStaffBySchool().then((res) => {
      this.setState({ teachers: res.data });
    });
  };
  getSpec = () => {
    getSpec().then((res) => this.setState({ spec: res.data }));
  };
  echoSpec = (spec) => {
    var x = "";
    spec.map((item) => {
      if (this.state.spec !== []) {
        this.state.spec.map((res) => {
          if (item === res.id) {
            x = x + res.name + " / ";
          }
        });
      }
    });
    return x.slice(0, x.length - 3);
  };
  componentDidMount() {
    this.getStaffs();
    this.getSpec();
  }
  render() {
    return Global.teacherId !== null ? (
      <div className={style.yutuq}>
        <Container>
          <Row>
            {this.state.teachers !== []
              ? this.state.teachers.map((item) => {
                  return (
                    <Col style={{ marginTop: "20px" }} lg={4} md={6} sm={12}>
                      <div className="card">
                        <Link to="chat">
                          <img alt="" src={item.image} className={style.image} />
                        </Link>
                        <div className={style.cardBody}>
                          <h3>{item.full_name}</h3>
                          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "100%" }}>
                            <p style={{ marginTop: "10px", width: "100%" }}>
                              <b>Soha: </b>
                              {item.position}
                            </p>
                            <p style={{ marginTop: "-10px", width: "100%" }}>
                              <b>Telefon raqam: </b>
                              {item.phone}
                            </p>
                            <p style={{ marginTop: "-10px", width: "100%" }}>
                              <b>Mutaxassisligi: </b>
                              {this.echoSpec(item.speciality)}
                            </p>
                            <p style={{ marginTop: "-10px", width: "100%" }}>
                              <b>Qo'shimcha ma'lumot: </b>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Container>
      </div>
    ) : (
      (window.location.href = "/")
    );
  }
}
