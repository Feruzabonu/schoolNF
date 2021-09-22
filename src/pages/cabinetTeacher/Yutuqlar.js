import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import style from "../../css/TeacherCss/Yutuqlar.module.css";
import gold from "../../img/gold.png";
import { getAchivement, getPupil } from "../../host/Config";
import Global from "../../host/Global";
import Modal from "antd/lib/modal/Modal";
import { Button } from "antd";
export default class Yutuqlar extends Component {
  state = {
    achivement: [],
    pupils: [],
    show: false,
    achiv: {},
    achivPupils: "",
  };
  getAchivement = () => {
    getAchivement(Global.schoolId).then((res) => {
      this.setState({ achivement: res.data });
    });
  };
  getPupils = () => {
    getPupil().then((res) => {
      this.setState({ pupils: res.data });
    });
  };
  echoPupils = (pupils) => {
    var x = "";
    pupils.map((item) => {
      if (this.state.pupils !== []) {
        this.state.pupils.map((res) => {
          if (item === res.id) {
            x = x + res.full_name + " / ";
          }
        });
      }
    });
    return x.slice(0, x.length - 3);
  };
  openModal = () => {
    this.setState({ show: true });
  };
  setModal = (id) => {
    var echopupil = this.echoPupils(this.state.achivement[id].pupils);
    this.setState({ achiv: this.state.achivement[id], achivPupils: echopupil });
    this.openModal();
  };
  handleCancel = () => {
    this.setState({ show: false });
  };
  componentDidMount() {
    this.getAchivement();
    this.getPupils();
  }
  render() {
    return Global.teacherId !== null ? (
      <div className={style.yutuq}>
        <Container>
          <Row>
            {this.state.achivement !== []
              ? this.state.achivement.map((item, key) => {
                  return (
                    <Col style={{ marginTop: "20px" }} lg={6} md={6} sm={12}>
                      <div className="card">
                        <img src={item.image} className={style.image} alt="" />
                        <div className={style.cardBody}>
                          <h3>
                            {item.competition} <img src={gold} alt="" />
                          </h3>
                          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", height: "200px" }}>
                            <p style={{ width: "100%" }}>
                              <b>O'rin: </b>
                              {item.result}
                            </p>
                            <p style={{ width: "100%" }}>
                              <b>O'quvchilar: </b> {this.echoPupils(item.pupils)}
                            </p>
                            <p style={{ width: "100%" }}>
                              <Button type="primary" onClick={() => this.setModal(key)}>
                                Ko'proq o'qish
                              </Button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })
              : ""}
          </Row>
          {this.state.achiv !== {} ? (
            <Modal title={`Yutuq haqida ma'lumot`} centered width="70%" visible={this.state.show} onCancel={this.handleCancel} footer={false}>
              <Form>
                <Form.Group>
                  <Form.Label>Yutuq nomi</Form.Label>
                  <Form.Control readOnly value={this.state.achiv.competition} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>O'rin</Form.Label>
                  <Form.Control readOnly value={this.state.achiv.result} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>O'quvchilar</Form.Label>
                  <Form.Control readOnly value={this.state.achivPupils} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Yutuq matni</Form.Label>
                  <Form.Control readOnly as="textarea" rows={4} value={this.state.achiv.text} />
                </Form.Group>
                <br />
                <Button type="primary" onClick={() => this.handleCancel()}>
                  Yopish
                </Button>
              </Form>
            </Modal>
          ) : (
            ""
          )}
        </Container>
      </div>
    ) : (
      (window.location.href = "/")
    );
  }
}
