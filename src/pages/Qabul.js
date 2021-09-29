import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../css/qabul.module.css";
import style from "../css/maktabHayoti.module.css";
import students from "../img/Students.png";
import shakl from "../img/shakl.png";
import rasm2 from '../img/rasm2.png'
import rasm3 from '../img/rasm3.png'
import rasm4 from '../img/rasm4.png'
import rasm6 from '../img/reading-book.svg'
import rasm7 from '../img/calendar.svg'
import rasm8 from '../img/writing.svg'
import rasm9 from '../img/1.svg'
import rasm10 from '../img/2.svg'
import rasm11 from '../img/3.svg'
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import jarayon from "../img/jarayon.png";
import tav_img from "../img/tav_img.jpg";
import talab from "../img/talab.jpg";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { url, user } from "../host/Host";
import FadeLoader from "react-spinners/FadeLoader";
import Global from "../host/Global";
import { ScaleLoader } from "react-spinners";
import Navbar from "./Navbar";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Footer from "./Footer";
import { Carousel } from "antd";

class Qabul extends React.Component {
  state = {
    loader: true,
    qabul: [],
    id: 0,
    school: null,
    selected:0,
    jarayon:[],
    data: null,
  };


  getSchool = () => {
    //   var a=window.location.href.split('/')
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({
        school: res.data,
        loader: false,
        data: res.data
      });
      
      console.log(res.data);
      this.jarayon()
    });

  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getSchool();
  }

  toggle(i) {
    if(this.state.selected==i){
      return(
        this.setState({
          selected:null
        })
      )
    }

    this.setState({
      selected:i
    })
  }
  jarayon(){
  var newjarayon=[];
    this.state.school !== null
    ? this.state.school.q_j_online !== null
      ? newjarayon.push({question:"O'nline ro'yxatdan o'ting", answer:this.state.school.q_j_online})
      : newjarayon.push({question:"O'nline ro'yxatdan o'ting", answer:"O'nline ro'yxatdan o'tish haqida"})
    : newjarayon.push({question:"O'nline ro'yxatdan o'ting", answer:"O'nline ro'yxatdan o'tish haqida"})

                          this.state.school !== null
                          ? this.state.school.q_j_forma !== null
                            ? newjarayon.push({question:"Ariza yozing",answer:this.state.school.q_j_forma}) 
                            : newjarayon.push({question:"Ariza yozing",answer:"Ro'yxatdan o'tishdagi ariza haqida ma'lumot"})
                            : newjarayon.push({question:"Ariza yozing",answer:"Ro'yxatdan o'tishdagi ariza haqida ma'lumot"})

                          this.state.school !== null
                          ? this.state.school.q_j_koz !== null
                            ? newjarayon.push({question:"Arizani ko'zdan kechiring",answer:this.state.school.q_j_koz})
                            : newjarayon.push({question:"Arizani ko'zdan kechiring",answer:"Arizani ko'zdan kechirish haqida ma'lumot"})
                          : newjarayon.push({question:"Arizani ko'zdan kechiring",answer:"Arizani ko'zdan kechirish haqida ma'lumot"})

                          this.state.school !== null
                          ? this.state.school.q_j_hujjat !== null
                            ? newjarayon.push({question:"Kerakli hujjatlarni to'plang",answer:this.state.school.q_j_hujjat})
                            : newjarayon.push({question:"Kerakli hujjatlarni to'plang",answer:"Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"})
                          : newjarayon.push({question:"Kerakli hujjatlarni to'plang",answer:"Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"})

                          this.state.school !== null
                          ? this.state.school.q_j_intervyu !== null
                            ? newjarayon.push({question:"Suhbat jarayoni", answer:this.state.school.q_j_intervyu})
                            : newjarayon.push({question:"Suhbat jarayoni", answer:"Suhbat jarayoni haqida ma'lumot"})
                          : newjarayon.push({question:"Suhbat jarayoni", answer:"Suhbat jarayoni haqida ma'lumot"})

                          this.state.school !== null
                          ? this.state.school.q_j_qaror !== null
                            ? newjarayon.push({question:"So'nggi qaror", answer:this.state.school.q_j_qaror})
                            : newjarayon.push({question:"So'nggi qaror", answer:"So'ngi qaror haqida ma'lumot"})
                            : newjarayon.push({question:"So'nggi qaror", answer:"So'ngi qaror haqida ma'lumot"})

                          console.log(newjarayon)
                          console.log(newjarayon[0])
 this.setState({
   jarayon:newjarayon
 })
                         
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loader ? (
          <div className={styles.loader}>
          <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
          </div> 
        ) : (
          <div style={{ width: "100vw", overflowX: "hidden" }}>
                 <Navbar />
                   <div >
                   <h1 className={style.headerh}>Qabul</h1>
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
                  className={style.headerImage}
                  />
             </div>   
             <div>
             <img
                  src={
                    data !== null && data.m_h_h1 !== null
                      ? data.m_h_h1
                      : school1
                  }
                  className={style.headerImage}
                />
               </div>      
           </Carousel>
                </div>
                
                <div className={styles.body}>
                   <Container style={{height:'100%'}}>
                       <Row style={{height:'100%'}}>
                       <Col data-aos="fade-right" lg={6} md={5} sm={12} xs={12} style={{backgroundColor:'#F3F3F3', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', }}>
                              <img src={ this.state.school !== null
                          ? this.state.school.q!== null
                            ? this.state.school.q
                            : tav_img
                          : tav_img} style={{width:'100%'}}/>
                            </Col>
                            <Col data-aos="fade-left" lg={6} md={7} sm={12} xs={12} style={{backgroundColor:'#fff', height:'100%',  display:'flex', alignItems:'center'}}>
                                <div className={styles.tavsilot_text}>
                                <h1 style={{textAlign:'left'}}>Qabul jarayoni bo'yicha tavsilotlar</h1>
                                <p>
                                {this.state.school !== null
                        ? this.state.school.q_t !== null
                          ? this.state.school.q_t
                          : "Qabul jarayonlari bo'yicha tavsilotlar"
                        : "Qabul jarayonlari bo'yicha tavsilotlar"}
                                </p>
                                </div>
                            </Col>
                       </Row>
                   </Container>
                </div>
          

                <div className={styles.body2}>
                 <Container style={{height:'75%'}} className={styles.col}>
                     <Row style={{height:'100%'}}>
                         <Col data-aos="fade-up" lg={4} sm={12} md={6} xs={12} className={styles.row1}>
                             <Row style={{height:'100%', backgroundColor:'#fff',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}} className={styles.row}>
                                 <Col lg={4} sm={4} xs={4} className={styles.top1}><img src={rasm2}/></Col>
                                 <Col lg={8} sm={8} xs={8} className={styles.top2}>Ta'lim shakli</Col>
                                 <Col lg={12} sm={12} xs={12} className={styles.bottom}>
                                 {this.state.school !== null
                          ? this.state.school.q_talim !== null
                            ? this.state.school.q_talim
                            : "Ta'lim shakli to'g'risida ma'lumot"
                          : "Ta'lim shakli to'g'risida ma'lumot"}</Col>
                             </Row>
                         </Col>
                         <Col data-aos="fade-up" lg={4} sm={12} md={6} xs={12} className={styles.row1}>
                             <Row style={{height:'100%', backgroundColor:'#fff',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}} className={styles.row}>
                                 <Col lg={4} sm={4} xs={4} className={styles.top1}><img src={rasm3}/></Col>
                                 <Col lg={8} sm={8} xs={8} className={styles.top2}>Bitiruvchilar</Col>
                                 <Col lg={12} sm={12} xs={12} className={styles.bottom}>
                                 {this.state.school !== null
                          ? this.state.school.q_bitiruv !== null
                            ? this.state.school.q_bitiruv
                            : "Bitiruv to'g'risida ma'lumotlar"
                          : "Bitiruv to'g'risida ma'lumotlar"}</Col>
                             </Row>
                         </Col>
                         <Col data-aos="fade-up" lg={4} sm={12} md={6} xs={12} className={styles.row1}>
                             <Row style={{height:'100%', backgroundColor:'#fff',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}} className={styles.row}>
                                 <Col lg={4} sm={4} xs={4} className={styles.top1}><img src={rasm4}/></Col>
                                 <Col lg={8} sm={8} xs={8} className={styles.top2}>O'quvchilar</Col>
                                 <Col lg={12} sm={12} xs={12} className={styles.bottom}>
                                   {this.state.school !== null
                          ? this.state.school.q_oquvchi !== null
                            ? this.state.school.q_oquvchi
                            : "O'quvchilar to'g'risida ma'lumot"
                          : "O'quvchilar to'g'risida ma'lumot"}</Col>
                             </Row>
                         </Col>
                     </Row>
                 </Container>
                    </div>


                    <Container>
               <div className={styles.body3}>
                  <h1 data-aos="fade-up" style={{color:'#1EB2A6'}}>Qabul jarayoni</h1>
                  
                <div data-aos="fade-up" className={styles.jarayon}>
                   {
                     
                     this.state.jarayon.map((item,i)=>(
                       
                       <div className={styles.item}>
                         <div className={styles.title} onClick={()=>this.toggle(i)} style={{backgroundColor:`${this.state.selected===i? '#1EB2A6':''}`}}>
                           <h4 style={{color:`${this.state.selected===i? '#000':''}`}}>{i+1}. {item.question}</h4>
                           
                           <span>{this.state.selected===i? <BsChevronUp color="#fff"/>:<BsChevronDown/>}</span>
                         </div>
                         <div className={styles.content} style={{display:`${this.state.selected===i? 'flex':''}`} } >{item.answer}</div>
                       </div>
                     )

                     )
                   }
                </div>
               </div>
               </Container>

            
               <div className={styles.body}>
                   <Container style={{height:'100%'}}>
                       <Row style={{height:'100%'}}>
                       
                            <Col data-aos="fade-right" lg={6} md={7} sm={12} xs={12} style={{backgroundColor:'#fff', height:'100%', display:'flex', alignItems:'center'}}>
                                <div className={styles.tavsilot_text}>
                                <h1 style={{textAlign:'left'}}>Imtihonda ishtirok etish talablari</h1>
                                <p>
                                {this.state.school !== null
                        ? this.state.school.q_imtihon_t !== null
                          ? this.state.school.q_imtihon_t
                          : "Imtixonda ishtirok etish talablari haqida ma'lumot"
                        : "Imtixonda ishtirok etish talablari haqida ma'lumot"}
                                </p>
                                </div>
                            </Col>
                            <Col data-aos="fade-left" lg={6} md={5} sm={12} xs={12} style={{backgroundColor:'#F3F3F3', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', }}>
                              <img src={ this.state.school !== null
                          ? this.state.school.q_imtihon_r !== null
                            ? this.state.school.q_imtihon_r
                            : talab
                          : talab} style={{width:'100%'}}/>
                            </Col>
                       </Row>
                   </Container>
                </div>
            

                <div className={styles.body4}>
                 <Container style={{height:'100%'}}>
                   <div className={styles.malumot}>
                         <div className={styles.info}>
                           <div className={styles.icon}> <img src={rasm6}/></div>
                           <div className={styles.text}><h3 style={{color:'#fff'}}>O'quv yili</h3><p> {this.state.school !== null
                              ? this.state.school.q_oquv_yili !== null
                                ? this.state.school.q_oquv_yili
                                : "O'quv yili"
                              : "O'quv yili"}</p></div>
                         </div>
                         <div className={styles.info}>
                           <div className={styles.icon}> <img src={rasm8}/></div>
                           <div className={styles.text}><h3 style={{color:'#fff'}}>Hujjat topshirish muddati</h3><p>  {this.state.school !== null
                              ? this.state.school.q_muddat !== null
                                ? this.state.school.q_muddat
                                : "Muddati haqida ma'lumot"
                              : "Muddati haqida ma'lumot"}</p></div>
                         </div>
                         <div className={styles.info}>
                           <div className={styles.icon}> <img src={rasm7}/></div>
                           <div className={styles.text}><h3 style={{color:'#fff'}}>Imtihon kuni</h3><p> {this.state.school !== null
                              ? this.state.school.q_imtihon !== null
                                ? this.state.school.q_imtihon
                                : "Imtixon kuni"
                              : "Imtixon kuni"}</p></div>
                         </div>
                   </div>
                 </Container>
               </div>


               <Container className={styles.hujjat}>
                 <div className={styles.body5}>
                 <Row style={{height:'100%', width:'100%'}}>
                       <Col data-aos="fade-right" lg={6} md={6} xs={0} sm={0} className={styles.hujjat_img}>
                            </Col >
                            <Col data-aos="fade-left" lg={6} md={6} xs={12} sm={12} style={{ display:'flex', alignItems:'center', height:'100%'}}>
                                <div className={styles.hujjat_text}>
                                <h1>Kerakli hujjatlar</h1>
                                <p> {this.state.school !== null
                      ? this.state.school.address !== null
                        ? this.state.school.address
                        : "Maktab manzili "
                      : "Maktab manzili "}</p>
                                <div className={styles.hujjat_list}>
                                  <img src={rasm9}/> <h5> {this.state.school !== null
                      ? this.state.school.q_hujjat_t1 !== null
                        ? this.state.school.q_hujjat_t1
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}</h5>
                                </div>
                                <div className={styles.hujjat_list}>
                                  <img src={rasm10}/> <h5> {this.state.school !== null
                      ? this.state.school.q_hujjat_t2 !== null
                        ? this.state.school.q_hujjat_t2
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}</h5>
                                </div>
                                <div className={styles.hujjat_list}>
                                  <img src={rasm11}/> <h5> {this.state.school !== null
                      ? this.state.school.q_hujjat_t3 !== null
                        ? this.state.school.q_hujjat_t3
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}</h5>
                                </div>
                                </div>
                            </Col>
                       </Row>
                 </div>
               </Container>
                <Footer/>
          

          </div>
        )}
      </div>
    );
  }
}

export default Qabul;
