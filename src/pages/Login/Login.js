import axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import style from "../../css/Verify.module.css";
import { url } from "../../host/Host";
import { message } from "antd";
import GLOBAL from "../../host/Global";
import { Link, Redirect } from "react-router-dom";
import Global from "../../host/Global";

export default class Login extends Component {
  state = {
    login: false,
    id: null,
    classes: [],
  };
  loginVeb = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    axios
      .post(`${url}/login/`, formDataObj)
      .then((res) => {
        axios.get(`${url}/staff/`).then((res1) => {
          res1.data.map((item1, key) => {
            return item1.user === res.data.id ? (GLOBAL.schoolId = key) : "";
          });
          if (GLOBAL.schoolId !== null) {
            GLOBAL.staffId = res1.data[GLOBAL.schoolId].id;
            GLOBAL.schoolId = res1.data[GLOBAL.schoolId].school;
            axios.get(`${url}/class-by-school/${GLOBAL.schoolId}`).then((res2) => {
              res2.data.map((item) => {
                return item.curator === GLOBAL.staffId ? (GLOBAL.classId = item.id) : "";
              });
              if (GLOBAL.classId !== null || GLOBAL.schoolId !== null) {
                GLOBAL.teacherId = res.data.id;
                window.localStorage.setItem("token", res.data.token);
                this.setState({ login: true });
              }
            });
          } else {
            message.error("Login yoki parolni xato kiritdingiz. Iltimos tekshirib qaytatdan kiriting.");
          }
        });
      })
      .catch((err) => {
        message.error("Login yoki parolni xato kiritdingiz. Iltimos tekshirib qaytatdan kiriting.");
      });
  };
  render() {
    return Global.schoolId !== null ? (
      this.state.login === false ? (
        <div className={style.formDiv}>
          <div className={style.loginBox}>
            <h2>Tizimga kirish</h2>
            <Form className={style.From} onSubmit={this.loginVeb}>
              <Form.Group className={style.userBox}>
                <Form.Control style={{ outline: "none" }} className={style.Forminput} type="text" name="username" required={true} />
                <Form.Label className={style.formLabel}>Login</Form.Label>
              </Form.Group>
              <Form.Group className={style.userBox}>
                <Form.Control style={{ outline: "none" }} className={style.Forminput} type="password" name="password" required={true} />
                <Form.Label className={style.formLabel}>Parol</Form.Label>
              </Form.Group>
              <Link to={`/${Global.user}`}>Bosh sahifaga qaytish</Link>
              <br />
              <Button className={style.sub} type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Kirish
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <Redirect to="/cabinet/teacher/bolim" />
      )
    ) : (
      <Redirect to="/" />
    );
  }
}
