import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import style from "../../css/TeacherCss/BoxTeacher.module.css";
import oqituvchi from "../../img/o'qituvchi.jpg";
import davomad from "../../img/davomad.png";
import chat from "../../img/chat.png";
import baholar from "../../img/baholar.png";
import yutuqlar from "../../img/yutuqlar.png";
import sinfdoshlar from "../../img/sinfdoshlar.png";
import RingLoader from "react-spinners/RingLoader";
import { Link } from "react-router-dom";
import Global from "../../host/Global";

export default class Box extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="load">
            <RingLoader color="green" loading={this.state.loading} size={150} />
          </div>
        ) : (
          <div className={style.box}>
            <div className={style.cards}>
              <Row>
                <Col style={{ padding: "30px" }} lg={4} md={6} sm={6}>
                  <Link to="/cabinet/teacher/bolim/oqituvchilar">
                    <div className={style.card}>
                      <img alt="..." src={oqituvchi} />
                      <p>O'qituvchilar</p>
                    </div>
                  </Link>
                </Col>

                {Global.classId !== null ? (
                  <Col style={{ padding: "30px" }} lg={4} md={6} sm={6}>
                    <Link to="/cabinet/teacher/bolim/rahbar">
                      <div className={style.card}>
                        <img alt="..." src={baholar} />
                        <p>Sinf Rahbar</p>
                      </div>
                    </Link>
                  </Col>
                ) : (
                  ""
                )}

                <Col style={{ padding: "30px" }} lg={4} md={6} sm={6}>
                  <Link to="/cabinet/teacher/bolim/students">
                    <div className={style.card}>
                      <img alt="..." src={sinfdoshlar} />
                      <p>O'quvchilar</p>
                    </div>
                  </Link>
                </Col>

                <Col style={{ padding: "30px" }} lg={4} md={6} sm={6}>
                  {/* <Link to="/cabinet/teacher/bolim/dars_reja"> */}
                  <div className={style.card}>
                    <img alt="..." src={davomad} />
                    <p>Dars jadvali</p>
                  </div>
                  {/* </Link> */}
                </Col>

                <Col style={{ padding: "30px" }} lg={4} md={6} sm={6}>
                  <Link to="/cabinet/teacher/bolim/yutuqlar">
                    <div className={style.card}>
                      <img alt="..." src={yutuqlar} />
                      <p>Yutuqlar</p>
                    </div>
                  </Link>
                </Col>

                <Col style={{ padding: "30px" }} lg={4} md={6} sm={6}>
                  {/* <Link to="/cabinet/teacher/bolim/chat"> */}
                  <div className={style.card}>
                    <img alt="..." src={chat} />
                    <p>Yozishmalar</p>
                  </div>
                  {/* </Link> */}
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    );
  }
}
