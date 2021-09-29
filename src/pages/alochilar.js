import React, { Component } from "react";
import style from "../css/alochilar.module.css";
import img from "../img/pl.jpg";
import styles from "../css/maktabHayoti.module.css";
import { DownCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import school3 from "../img/school3.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import Aos from "aos";
import { getExcellent, getPupil } from "../host/Config";
import { url, user } from "../host/Host";
import ScaleLoader from "react-spinners/ScaleLoader";
import Global from "../host/Global";
import Navbar from './Navbar'
import Footer from './Footer'
import {FaStar} from 'react-icons/fa'
export default class Alochilar extends Component {
  state = {
    loader: true,
    excellent: [],
    pupil: [],
    pupils: [],
    data: null,
    id: 0,
    school: null,
    class: [],
  };

  getExcellents = () => {
    // var a = window.location.href.split("/");
    var v = user;
    axios
      .get(`${url}/excellent/`)
      .then((res) => {
        this.setState({
          excellent: res.data,
          loader: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          // excellent: res.data,
          loader: false,
        });
      });
    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      this.setState({ data: res.data });
    });
    axios
      .get(`${url}/class-by-school/${v}/`)
      .then((res) => {
        this.setState({
          class: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // this.setState({loader:false})
      });
  };

  getPupil = () => {
    getPupil()
      .then((res) => {
        this.setState({
          pupils: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  setPupils = (id) => {
    var pupil = {};
    if (this.state.pupils !== []) {
      this.state.pupils.map((item1) => {
        if (item1.id === id) {
          pupil = item1;
        }
      });
    }
    return pupil;
  };

  echoClasses = (id) => {
    var classes = {};
    console.log(id, this.state.class);
    if (this.state.class !== []) {
      this.state.class.map((item1) => {
        if (item1.id === id) {
          classes = item1;
        }
      });
    }
    return classes;
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getExcellents();
    this.getPupil();
    window.addEventListener("load", () => {
      // this.setState({
      //   loader:false
      // })
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loader ? (
          <div className="loader">
            <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <div>
          <Navbar/>
          <h1 className={style.headerh}>Maktab a'lochilari</h1>
           <Carousel
                   dots={false}
                    autoplay
                    effect="fade"
                    style={{ zIndex: "-1" ,width:'100%'}}
                 
                  >
           <div>
           <img  src={
                    data !== null && data.m_h_h2 !== null
                      ? data.m_h_h2
                      : school1
                  }
                  className={styles.headerImage}
                  />
             </div>   
             <div>
             <img
                  src={
                    data !== null && data.m_h_h1 !== null
                      ? data.m_h_h1
                      : school1
                  }
                  className={styles.headerImage}
                />
               </div>      
           </Carousel>
            {/* <Carousel autoplay className={styles.sliderHeader}>
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


              <div className={style.alochilar}>
                <Container>
                  <Row>
                  <h1 className={style.sarlavha}>A'lochilar doskasi</h1>
                  {this.state.excellent !== []
                  ? this.state.excellent.map((item) => {
                      var pupil = this.setPupils(item.pupil);
                      var classes = this.echoClasses(pupil.clas);
                      return (
                        <Col lg={6} md={12} sm={12}>
                            <div className={style.card}>
                        <div className={style.cardImg}>
                         <img   src={pupil.image !== null ? pupil.image : school2} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div className={style.cardText} style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-18px',marginLeft:'10px'}}>{pupil.full_name} {pupil.birth_day}</h5>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                            {this.echoClasses(pupil.clas).class_number} - "
                              {this.echoClasses(pupil.clas).class_char}" sinf
                        </div>
                    </div>
                            </Col>
                      );
                    })
                  : ""}
                  </Row>
                </Container>
              </div>
            <Footer/>
          </div>
        )}
      </div>
    );
  }
}
