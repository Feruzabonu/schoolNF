import Aos from "aos";
import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../css/yutuqlarimiz.module.css";
import Global from "../host/Global";
import { url } from "../host/Host";
import img1 from "../img/ch1.jpg";
import img3 from "../img/ch2.jpeg";
import img4 from "../img/ch4.jpg";
import img2 from "../img/pp.svg";
import wins from "../img/wins.jpg";
export default class Yutuqlarimiz extends Component {
  state = {
    loader: true,
    qabul: [],
    id: 0,
    school: null,
    students: null,
  };

  getSchool = () => {
    axios.get(`${url}/achiviment/${Global.schoolId}`).then((res) => {
      this.setState({
        school: res.data,
      });
      console.log(res.data);
    });
    axios.get(`${url}/pupil/`).then((res) => {
      this.setState({
        students: res.data,
        loader: false,
      });
      console.log(res.data);
    });
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getSchool();
  }
  echoPupil = (id) => {
    var f = "";

    if (this.state.students !== null) {
      this.state.students.map((item) => {
        if (item.id === id) {
          console.log(id, item.id);
          f = item.full_name;
        }
      });
    }
    return f;
  };
  funy = (x) => {
    var mas = this.state.arr;
    mas[x] = !this.state.arr[x];
    if (this.state.arr[x]) {
      var a = document.querySelectorAll("p")[x];
      a.style.opacity = "0";
      a.style.height = "0";
    } else {
      var a = document.querySelectorAll("p")[x];
      a.style.opacity = "1";
      a.style.height = "200px";
    }
    this.setState({
      arr: mas,
    });
  };

  render() {
    return (
      <div>
        {/* <div className={style.body}>
              <h3 style={{ fontFamily: "font", fontWeight: "900" }}>
                Maktab Hayoti
              </h3>
              <div className={styles.headerIcons}>
                <a href="#1">
                  <DownCircleOutlined
                    style={{ fontSize: "40px", color: "white" }}
                    className={styles.headerIcon}
                  />
                </a>
              </div>
            </div>
            <Carousel autoplay className={styles.sliderHeader}>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h1 !== null
                      ? data.m_h_h1
                      : school1
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h2 !== null
                      ? data.m_h_h2
                      : school1
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h3 !== null
                      ? data.m_h_h3
                      : school3
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h4 !== null
                      ? data.m_h_h4
                      : school4
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h5 !== null
                      ? data.m_h_h5
                      : school5
                  }
                  className={styles.headerImage}
                />
              </div>
            </Carousel> */}

        <div style={{ width: "100%" }}>
          {" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className={style.sarlavha}>Bizning yutuqlarimiz</h1>
          <div className={style.line}></div>
        </div>
        <Container>
          {" "}
          <Row>
            {this.state.school !== null
              ? this.state.school.map((item, key) => {
                  return (
                    <Col lg={4} sm={12} md={6}>
                      <div className={style.karta}>
                        <div style={{ transition: "all 1s" }}>
                          {item.image !== null ? (
                            <img src={item.image} alt="..." />
                          ) : (
                            <img src={wins} alt="..." />
                          )}
                          <h3>{item.competition}</h3>
                        </div>
                        <h3 style={{ fontSize: "18px", color: "gold" }}>
                          {item.result}
                        </h3>
                        <h5 style={{ fontSize: "17px" }}>Ishtirokchilar: </h5>
                        {item.pupils.map((item1) => {
                          return <h5>{this.echoPupil(item1)}</h5>;
                        })}

                        <p className={style.pop}>{item.text}</p>
                        {/* <span onClick={()=>{this.funy(0)}}>{this.state.arr[0]?"Batafsil...":"Yopish"}</span> */}
                      </div>
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Container>
      </div>
    );
  }
}
