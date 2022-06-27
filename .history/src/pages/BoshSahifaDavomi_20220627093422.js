import React, { Component } from "react";
import style from "./BoshSahifaDavomi.module.css";
import { ButtonWrapper } from "./StyleBoshSahifa";
import school1 from "../img/school1.jpg";

import axios from "axios";
import Aos from "aos";
import { FaStar } from "react-icons/fa";
import { idMaktab, url, user } from "../host/Host";
import Slider from "react-slick";

export default class BoshSahifaDavomi extends Component {
  state = {
    loader: true,
    excellent: [],
    pupil: [],
    pupils: [],
    data: null,
    id: 0,
    teachers:null,
    school: null,
    class: [],
  };

  getExcellents = () => {
    
    axios.get(`${url}/school-by-admin/${user}/`).then((res) => {
      this.setState({ data: res.data });
      axios
      .get(`${url}/excellent-by-school/${idMaktab}/`)
      .then((res) => {
        this.setState({  excellent: res.data });
     
      })
    });
  
  };

  
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    axios
    .get(`${url}/active-teachers/?school=${idMaktab}`)
    .then((res) => {
        this.setState({ teachers: res.data });
    })
   
  this.getExcellents() 
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    return (
      <div style={{ backgroundColor: "white" }}>
        
            {this.state.excellent.length !== 0

              ?
              <div className={style.successful}>
          <h1>Bizning muvaffaqiyatli o'quvchilarimiz</h1>
          <Carousel
              responsive={responsive}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              infinite={true}
            >{
              this.state.excellent.map((item, key) => {
               
                  return (
                    <div className={style.slider}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: "30px",
                          justifyContent: "space-around",
                        }}
                        className={style.oquvchi}
                      >
                        <div style={{ width: "80px" }}>
                          <img
                            src={item.image !== null ? url+item.image : school1}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                          <h4
                            style={{ textAlign: "center" , marginTop: "10px" }}
                          
                          >
                            {item.full_name}
                          </h4>
                          <p style={{ marginTop: "-5px", color: "#1EB2A6" }}>
                            {item.clas}
                            
                          </p>
                          <FaStar
                            style={{ color: "#1EB2A6", marginLeft: "10px" }}
                          />
                          <FaStar
                            style={{ color: "#1EB2A6", marginLeft: "5px" }}
                          />
                          <FaStar
                            style={{ color: "#1EB2A6", marginLeft: "5px" }}
                          />
                          <FaStar
                            style={{ color: "#1EB2A6", marginLeft: "5px" }}
                          />
                          <FaStar
                            style={{ color: "#1EB2A6", marginLeft: "5px" }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
                </Carousel>
                </div> : ""}
         
        <div className={style.successful}>
          <h1>O'qituvchilar doskasi</h1>
          <Slider {...settings} style={{ padding: "20px" }}>
            {this.state.teachers!==null
              ? this.state.teachers.map((item, key) => {
      
                return (
                    <div className={style.ustozCard}>
                      <div
                        data-aos="flip-right"
                        style={{
                          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                          marginBottom: "30px",
                        }}
                        className={style.card}
                      >
                        <img
                          src={url+item.imageURL}
                          alt="..."
                          position="top"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        className={style.ustozDown}
                        style={{
                          backgroundColor: "#fff",
                          padding: "30px 30px",
                          borderTopColor: "#1EB2A6",
                          textAlign: "left",
                        }}
                      >
                        <small
                          className="text-muted"
                          style={{ fontSize: "16px" }}
                        >
                          <b style={{ color: "#1EB2A6" }}>F.I.O: </b>
                          {item.full_name}
                          <br />
                          <b style={{ color: "#1EB2A6" }}>Lavozimi: </b>
                          {item.position}
                          <br />
                          <b style={{ color: "#1EB2A6" }}>Telefon raqami: </b>
                          {item.phone}
                          <br />
                          <b style={{ color: "#1EB2A6" }}>Qo'shimcha: </b>{" "}
                          {item.description}
                          <br />
                        </small>
                      </div>
                    </div>
                  );
                })
              : ""}
          </Slider>
        </div>
     
        
      </div>
    );
  }
}
