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
import styles from "../css/maktabHayoti.module.css";
import { Carousel } from "antd";
import bg3t from "../img/xorazim5.jpg";
import bg2t from "../img/xorazim6.jpg";
import bg1t from "../img/xorazim8.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScaleLoader from "react-spinners/ScaleLoader";

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
         {this.state.loader ? (
          <div className="loader">
          <div><ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} /></div>
      <div><p>Sayt tajriba tariqasida ishlamoqda</p></div>
       </div>
        ) : (
           <>
           <Navbar />
                   <div>
                   <h1 className={styles.headerh}>Maktabning yutuqlari bilan tinishing </h1>
              <Carousel
                   dots={false}
                    autoplay
                    effect="fade"
                    style={{ zIndex: "-1" ,width:'100%'}}
                 
                  >
           
               <div className="carg_img">
                      <img src={bg1t} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                    </div>    
            
           </Carousel>
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
        <Footer />
</>
        )}
      </div>
    );
  }
}
