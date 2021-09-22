import React, { Component } from "react";
import HeaderTeacher from "./cabinetTeacher/HeaderTeacher";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Box from "./cabinetTeacher/BoxTeacher";
import Yutuqlar from "./cabinetTeacher/Yutuqlar";
import Chat from "./cabinetTeacher/Chat";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Davomad from "./cabinetTeacher/Davomad";
import Sinfdoshlar from "./cabinetTeacher/Students";
import Plan from "./cabinetTeacher/Plan";
import Teachers from "./cabinetTeacher/Teachers";
// import Main from "./Rahbar/Main";
import News from "./News";
import Global from "../host/Global";
import ImageDemo from "./ImageDemo";
import { editStaff, getSpec, getStaff, getStaffBySchool } from "../host/Config";
import { Input, message, Select } from "antd";
import { Option } from "antd/lib/mentions";
import Rahbar from "./cabinetTeacher/Rahbar";
import axios from "axios";
import { url } from "../host/Host";

export default class ParentCabinet extends Component {
  state = {
    teacher: [],
    options: [],
    speciality: [],
    image: null,
    input: true,
  };
  getTeacher = () => {
    getStaffBySchool().then((res) =>
      res.data.map((item) => {
        return item.user === Global.teacherId ? (Global.staffId = item.id) : "";
      })
    );
    getStaff().then((res) => this.setState({ teacher: res.data, speciality: res.data.speciality }));
    getSpec()
      .then((res) => {
        this.setState({ options: res.data });
      })
      .catch((err) => console.log(err));
  };
  handleChange = (selectedOption) => {
    this.setState({ speciality: selectedOption });
  };
  editStaff = () => {
    let formData = new FormData();
    formData.append("position", document.getElementById("position").value ?? "");
    formData.append("full_name", document.getElementById("fullname").value ?? "");
    formData.append("phone", document.getElementById("phone").value ?? "");
    formData.append("school", Global.schoolId ?? "");
    formData.append("description", document.getElementById("description").value ?? "");
    if (this.state.image !== null) {
      formData.append("image", this.state.image ?? "");
    }
    editStaff(formData, Global.staffId)
      .then((res) => {
        editStaff({ speciality: this.state.speciality }, Global.staffId).then((res2) => {
          message.success("Xodim o'zgartildi");
          this.getTeacher();
        });
      })
      .catch((err) => message.error("Xodim o'zgartilmadi"));
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  addLesson = (e) => {
    // console.log(document.getElementById("pass").value);
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("id", Global.teacherId);
    var formDataObj = Object.fromEntries(formData.entries());
    formDataObj.id = Number(formDataObj.id);

    var config = {
      user_id: Global.teacherId,
      password: document.getElementById("pass").value,
    };
    // formDataObj.school=Number(formDataObj.school)
    axios
      .post(`${url}/reset-password/`, config)
      .then((res) => {
        message.success("Parol saqlandi");
      })
      .catch((err) => {
        message.error("Parol saqlanmadi");
      });
  };
  componentDidMount() {
    this.getTeacher();
  }
  render() {
    return Global.teacherId !== null ? (
      <div>
        <BrowserRouter>
          <HeaderTeacher />

          <Switch>
            <Route exact path="/cabinet/teacher/bolim/chat">
              <Chat />
            </Route>
            <Route exact path="/cabinet/teacher/bolim/yutuqlar">
              <Yutuqlar />
            </Route>

            <Route exact path="/cabinet/teacher/bolim/dars_reja">
              <Plan />
            </Route>
            <Route exact path="/cabinet/teacher/bolim/students">
              <Sinfdoshlar />
            </Route>
            <Route exact path="/cabinet/teacher/bolim/oqituvchilar">
              <Teachers />
            </Route>
            <Route exact path="/cabinet/teacher/bolim/rahbar">
              <Rahbar />
            </Route>

            <Route exact path="/cabinet/teacher/bolim">
              <Box />
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-10 mx-auto">
                        <div className="card" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
                          <div className="card-header">
                            <h3 className="mb-0">Xodim ma'lumotlari</h3>
                          </div>
                          <div className="card-body">
                            <Form>
                              <div className="row">
                                <div className="col-xl-3">
                                  <Form.Group className="mb-3" controlId="image">
                                    <Form.Label>Rasm</Form.Label>
                                    <Input onChange={this.customRequest} type="file" required={false} style={{ marginBottom: "20px" }} accept="image/jpg, image/jpeg, image/png" />
                                  </Form.Group>
                                  <div className="w-100" style={{ position: "relative" }}>
                                    {ImageDemo(this.state.teacher.image)}
                                  </div>
                                  <Form.Group className="mb-3" controlId="fullname">
                                    <Form.Label>F.I.Sh.</Form.Label>
                                    <Form.Control placeholder="F.I.Sh." defaultValue={this.state.teacher.full_name} />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Telefon raqam</Form.Label>
                                    <Form.Control placeholder="Telefon raqam" maxLength="20" defaultValue={this.state.teacher.phone} />
                                  </Form.Group>
                                </div>
                                <div className="col-xl-9">
                                  <Form.Group className="mb-3" controlId="position">
                                    <Form.Label>Soha</Form.Label>
                                    <Form.Control placeholder="Soha" defaultValue={this.state.teacher.position} />
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="speciality">
                                    <Form.Label>Mutaxassislik</Form.Label>
                                    <Select placeholder="Mutaxassislik" value={this.state.speciality !== [] ? this.state.speciality : ""} mode="multiple" style={{ width: "100%" }} onChange={this.handleChange} optionLabelProp="label">
                                      {this.state.options !== null
                                        ? this.state.options.map((item) => {
                                            return (
                                              <Option value={item.id} label={item.name}>
                                                {item.name}
                                              </Option>
                                            );
                                          })
                                        : ""}
                                    </Select>
                                  </Form.Group>
                                  <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Qo'shimcha ma'lumot</Form.Label>
                                    <Form.Control as="textarea" placeholder="Soha" style={{ height: 150 }} defaultValue={this.state.teacher.position} />
                                  </Form.Group>
                                </div>
                              </div>
                              <Button variant="danger" as="input" type="reset" value="Bekor qilish" />
                              <Button variant="primary" onClick={this.editStaff} style={{ marginLeft: "15px" }}>
                                Saqlash
                              </Button>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: "86%", marginTop: "50px", marginLeft: "7%" }}>
                  <Container>
                    <Form onSubmit={this.addLesson} style={{ backgroundColor: "white", padding: "20px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", marginBottom: "30px" }}>
                      <Row>
                        <Col lg={7}>
                          <Form.Group controlId="pass" className="mb-3">
                            <Form.Label style={{ borderBottom: "1px solid black", marginBottom: "20px", fontSize: "16px" }}>Yangi parol kiriting</Form.Label>
                            <Form.Control name="password" type={this.state.input ? "password" : "text"} required={true} />
                          </Form.Group>
                        </Col>
                        <Col lg={5} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Button
                            style={{ position: "relative", top: "20px" }}
                            variant="danger"
                            onClick={() => {
                              this.setState({ input: !this.state.input });
                            }}
                          >
                            Parolni ko'rish
                          </Button>
                          <Button style={{ position: "relative", marginLeft: "10px", top: "20px" }} variant="primary" type="submit">
                            Parolni saqlash
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Container>{" "}
                </div>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    ) : (
      (window.location.href = "/")
    );
  }
}
