import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./BoshSahifaDavomi.module.css";
import { ButtonWrapper } from "./StyleBoshSahifa";
import school1 from "../img/school1.jpg";
import ustoz1 from "../img/ustoz1.jpg";
import ustoz2 from "../img/ustoz2.jpg";
import school2 from "../img/school2.jpg";
import school3 from "../img/school3.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import axios from "axios";
import Aos from "aos";
import {FaStar} from 'react-icons/fa'
import { getExcellent, getPupil } from "../host/Config";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { url, user } from "../host/Host";
import Global from "../host/Global";

export default class BoshSahifaDavomi extends Component {
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      this.setState({ data: res.data });
    });
    axios
      .get(`${url}/class-by-school/${Global.schoolId}/`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          class: res.data,
          loader: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loader: false });
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
    this.setState({ loader: false });
    console.log(123);
  }

  render() {
    return (
      <div style={{backgroundColor:'white'}}>
        <div className={style.container} style={{textAlign:'center',backgroundColor:'white'}}>
          <Container>
            <Row>
              <Col xs={0} sm={0} md={6} lg={6}></Col>
              <Col xs={12} sm={12} md={6} lg={6} style={{backgroundColor:'rgba(0,0,0,0.4)',marginTop:'50px',paddingBottom:'40px'}}>
                <h1>Qabul uchun ariza topshiring</h1>
                <h3>Kuzgi qabul jarayoni hozir mavjud</h3>
                <p>
                  Biz o'quvchilarimizga shunchaki ta'lim beribgina qolmasdan,
                  shu bilan birga ularga kelajakda o'z o'rnilarini topishlariga
                  yordam beramiz.
                </p>
                <ButtonWrapper>
                  <button className="btn drawBorder">
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://my.maktab.uz/"
                      target="_blank"
                    >
                      Hoziroq ariza topshiring
                    </a>
                  </button>
                </ButtonWrapper>
              </Col>
            </Row>
          </Container>
        </div>
        <Container style={{ backgroundColor: "white" }}>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className={style.tana}>
                <br />
                <br />
                <h1 className={style.sarlavha} style={{ fontSize: "28px" }}>
                  A'lochilar doskasi
                </h1>

                <Container>
                  <br />

                  <Row>
                    {this.state.excellent !== [] && this.state.class !== []
                      ? this.state.excellent.map((item,key) => {
                          var pupil = this.setPupils(item.pupil);
                          var classes = this.echoClasses(pupil.clas);
                          return key<2? (
                            <Col lg={12} md={12} sm={12}>
                              <div className={style.card}>
                        <div className={style.cardImg}>
                         <img src={
                                    pupil.image !== null ? pupil.image : school2
                                  }
                                   style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div className={style.cardText} style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px',marginLeft:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-15px',marginLeft:'10px'}}>{pupil.full_name}</h5>
                            <h6 style={{fontSize:'20px',marginTop:'-15px',marginLeft:'10px'}}> {this.echoClasses(pupil.clas).class_number} -
                                  "{this.echoClasses(pupil.clas).class_char}"
                                  sinf</h6>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                        </div>
                    </div>
                   </Col>
                
                          ):''
                        })
                      : ""}
                  </Row>
                </Container>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className={style.tana}>
                <br />
                <br />
                <h1 className={style.sarlavha} style={{ fontSize: "28px", marginBottom:'150px' }}>
                  O'qituvchilar doskasi
                </h1>
                <Container className={style.back} style={{display:'flex', alignItems:'center', height:'100%'}}>
                <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                
                   
      <MDBCol>
        <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'auto', }} className={style.cardo}>
          <MDBCardImage
            src={ustoz1}
            alt='...'
            position='top'
            style={{maxWidth:'280px', maxHeight:'187px'}}
          />
          <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={style.card_body}>
            <MDBCardTitle className={style.body_title}> Muxlisova Munisa Mahmudovna</MDBCardTitle>
            <MDBCardText style={{fontSize:'18px', fontWeight:'500', color:'#1EB2A6'}} >
            Ingliz tili o'qituvchisi
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'auto', }} className={style.cardo}>
          <MDBCardImage
            src={ustoz2}
            alt='...'
            position='top'
            style={{maxWidth:'280px', maxHeight:'187px'}}
          />
          <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={style.card_body}>
            <MDBCardTitle className={style.body_title}>  Hamidova Shahnoza Elmurodovna</MDBCardTitle>
            <MDBCardText style={{fontSize:'18px', fontWeight:'500', color:'#1EB2A6'}}>
            Ona tili o'qituvchisi
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
                    
    </MDBRow>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
