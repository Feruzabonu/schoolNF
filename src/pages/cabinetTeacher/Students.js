import React, { Component } from "react";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../../css/TeacherCss/Students.module.css";
import yuksak from "../../img/alish.png";
import gimnastika from "../../img/rayhon.jpeg";
import { Layout, Menu, Button, Form, Tooltip, Input, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getClassesBySchool, getPupils } from "../../host/Config";
import Global from "../../host/Global";

export default class Students extends Component {
  state = {
    students: [],
    classes: [],
  };
  getClassesBySchool = () => {
    getClassesBySchool(Global.schoolId)
      .then((res) => this.setState({ classes: res.data }))
      .catch((err) => message.error("Sinflar topilmadi."));
  };
  getPupils = (id) => {
    getPupils(id)
      .then((res) => this.setState({ students: res.data }))
      .catch((err) => {
        this.setState({ students: [] });
        message.error("O'quvchi aniqlanmadi.");
      });
  };
  selectedKeys = (e) => {
    this.getPupils(e.key);
  };
  componentDidMount() {
    this.getClassesBySchool();
  }
  render() {
    const { Header } = Layout;
    return Global.teacherId !== null ? (
      <div className={style.yutuq}>
        <Container>
          <Layout>
            <Header className="header">
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} onSelect={this.selectedKeys}>
                {this.state.classes !== []
                  ? this.state.classes.map((item) => {
                      return (
                        <Menu.Item key={`${item.id}`}>
                          {item.class_number}-{item.class_char} sinf
                        </Menu.Item>
                      );
                    })
                  : ""}
                <Menu.Item>
                  <Form className="d-flex mt-2" style={{ marginBottom: 0 }}>
                    <Form.Item name="search">
                      <Input placeholder="Search" />
                    </Form.Item>
                    <Tooltip title="search">
                      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                  </Form>
                </Menu.Item>
              </Menu>
            </Header>
          </Layout>
          <Row>
            {this.state.students !== []
              ? this.state.students.map((item) => {
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
                              <b>Tug'ilgan sanasi: </b>
                              {item.birth_day}
                            </p>
                            <p style={{ marginTop: "-10px", width: "100%" }}>
                              <b>Otasi: </b>
                              {item.father_name}
                            </p>
                            <p style={{ marginTop: "-10px", width: "100%" }}>
                              <b>Otasining telefon raqami: </b>
                              {item.father_tel}
                            </p>
                            <p style={{ marginTop: "-10px", width: "100%" }}>
                              <b>Onasi: </b>
                              {item.mother_name}
                            </p>
                            <p style={{ marginTop: "-10px", width: "100%" }}>
                              <b>Onasining telefon raqami: </b>
                              {item.mother_tel}
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
