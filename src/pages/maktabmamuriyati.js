import React, { Component } from 'react'
import styles from '../css/maktabmamuriyati.module.css'
// import Car from "react-multi-Car";
// import "react-multi-carousel/lib/styles.css";
import { Carousel  as Car } from 'antd';
import school1 from '../img/school19.jpg'
import school2 from '../img/school20.jpg'
import school3 from '../img/school25.jpg'
import school4 from '../img/school13.jpg'
import {Container,Row,Col} from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css';
// import {FadeLoader} from 'react-spinners'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import axios from 'axios';
import { url } from '../host/Host';
import {Carousel} from 'react-bootstrap'
import Global from '../host/Global';
import { FadeLoader } from 'react-spinners';

export default class Maktabmamuriyati extends Component {
state={
  direktor:null,
  orin1:null,
  orin2:null,
  orin3:null,
  kutubxona:null,
  psixolog:null,
  kasaba:null,
  yetakchi:null,
  chqbt:null,
  loader:true,

  
}
getStaff=()=>{
  axios.get(`${url}/staff-by-school/${Global.schoolId}/`).then(res=>{
    var direktor=[]
    var orin1=[]
    var orin2=[]
    var orin3=[]
    var kutubxona=[]
    var psixolog=[]
    var kasaba=[]
    var yetakchi=[]
    var chqbt=[]
    res.data.map(item=>{
      if(item.speciality.length!==0){
        item.speciality.map(item1=>{
          if(item1===2){
            direktor.push(item)
          }
          if(item1===3){
            orin1.push(item)
          }
          if(item1===4){
            orin2.push(item)
          }
          if(item1===5){
            orin3.push(item)
          }
          if(item1===6){
            
            psixolog.push(item)
          }
          if(item1===7){
            yetakchi.push(item)
          }
          if(item1===8){
          
            kutubxona.push(item)
          }
          if(item1===9){
          
            kasaba.push(item)
          }
          if(item1===10){
            chqbt.push(item)
          }

        })
      }

    })
    this.setState({
      direktor:direktor,
      orin1:orin1,
      orin2:orin2,
      orin3:orin3,
      kutubxona:kutubxona,
      psixolog:psixolog,
      kasaba:kasaba,
      yetakchi:yetakchi,
      chqbt:chqbt,
   
})
setTimeout(()=>{
  this.setState({
    loader:false})
  }, 4000)


  }).catch(err=>{
    
    this.setState({
  loader:false,    
})
  })
}

  componentDidMount(){
    Aos.init({
        duration:2000
    })
    this.getStaff()
}

    render() {
      const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
        
        return (
            <div>
              {this.state.loader === true ? 
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
         : 
            <>  <br/><br/><br/>
            <Carousel style={{position:'relative',}} className="carTur">
            {this.state.direktor!==null?this.state.direktor.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px',  width:'100%', fontSize:'24px',  color:'white'}}>Maktab direktori</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
   
       {/* {this.state.orin1!==null?this.state.orin1.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px', width:'100%', fontSize:'24px',  color:'white'}}>O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
   
       {this.state.orin2!==null?this.state.orin2.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px', width:'100%', fontSize:'24px',  color:'white'}}>Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
   
       {this.state.orin3!==null?this.state.orin3.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px', width:'100%', fontSize:'24px',  color:'white'}}>Ma'muriy-xo’jalik ishlar bo'yicha direktor o'rinbosari</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
   
       {this.state.psixolog!==null?this.state.psixolog.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px', width:'100%', fontSize:'24px',  color:'white'}}>Maktab amaliyotchi psixologi</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
   
       {this.state.kasaba!==null?this.state.kasaba.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px', width:'100%', fontSize:'24px',  color:'white'}}>Kasaba uyushma raisi</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
   
       {this.state.kutubxona!==null?this.state.kutubxona.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px', width:'100%', fontSize:'24px',  color:'white'}}>Kutubxona mudirasi</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
   
       {this.state.chqbt!==null?this.state.chqbt.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px', width:'100%', fontSize:'24px',  color:'white'}}>Chaqiruvga qadar boshlang‘ich tayyorgarlik rahbari</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
   
       {this.state.yetakchi!==null?this.state.yetakchi.map(item=>{
             return(
              <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:'90vh'}}
        src={item.image}
        alt="First slide"
      />
      <Carousel.Caption>
        
      <p style={{backgroundColor:'#000000b3', padding:'10px', position:'relative',top:'-20px', width:'100%', fontSize:'24px',  color:'white'}}>Maktab direktori</p>
    </Carousel.Caption>
  </Carousel.Item>)
           }):""}
    */}
</Carousel>
                <Container>
                    <Row>
                    {this.state.direktor!==null?this.state.direktor.map(item=>{
             return(
               <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={item.image}/>
                                        <p style={{textAlign:'center'}}>Maktab direktori</p>
                                    </Col>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px', height:'400px', overflowY:'auto'}}>
                                      <Row>  
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>{item.full_name}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{item.position}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{item.phone}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{item.description}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>)
           }):""}
   
       {this.state.orin1!==null?this.state.orin1.map(item=>{
             return(
               <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px'}}>
                                      <Row>  
                                      <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>{item.full_name}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{item.position}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{item.phone}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{item.description}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={item.image}/>
                                        <p style={{textAlign:'center'}}>O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>)
           }):""}
   
       {this.state.orin2!==null?this.state.orin2.map(item=>{
             return(
               <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={item.image}/>
                                        <p style={{textAlign:'center'}}>Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari</p>
                                    </Col>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px', height:'400px', overflowY:'auto'}}>
                                      <Row>  
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>{item.full_name}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{item.position}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{item.phone}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{item.description}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>)
           }):""}
   
       {this.state.orin3!==null?this.state.orin3.map(item=>{
             return(
               <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px'}}>
                                      <Row>  
                                      <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>{item.full_name}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{item.position}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{item.phone}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{item.description}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={item.image}/>
                                        <p style={{textAlign:'center'}}>Ma'muriy-xo’jalik ishlar bo'yicha direktor o'rinbosari</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>)
           }):""}
   
       {this.state.psixolog!==null?this.state.psixolog.map(item=>{
             return(
               <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={item.image}/>
                                        <p style={{textAlign:'center'}}>Maktab amaliyotchi psixologi</p>
                                    </Col>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px', height:'400px', overflowY:'auto'}}>
                                      <Row>  
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>{item.full_name}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{item.position}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{item.phone}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{item.description}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
              )
           }):""}
   
       {this.state.kasaba!==null?this.state.kasaba.map(item=>{
             return(
               <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px'}}>
                                      <Row>  
                                      <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>{item.full_name}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{item.position}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{item.phone}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{item.description}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={item.image}/>
                                        <p style={{textAlign:'center'}}>Kasaba uyushma raisi</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
              )
           }):""}
   
       {this.state.kutubxona!==null?this.state.kutubxona.map(item=>{
             return(
                 <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={item.image}/>
                                        <p style={{textAlign:'center'}}>Kutubxona mudirasi</p>
                                    </Col>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px', height:'400px', overflowY:'auto'}}>
                                      <Row>  
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>{item.full_name}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{item.position}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{item.phone}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{item.description}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
             )
           }):""}
   
       {this.state.chqbt!==null?this.state.chqbt.map(item=>{
             return(
                 <Col lg={12}>
                            <div className={styles.carddirektor} data-aos="zoom-in-up">
                                <Row>
                                    <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px'}}>
                                      <Row>  
                                      <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>F.I.O:</span>
                                      <span className={styles.direktor}>{item.full_name}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}
                                      
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Mutaxasisligi:</span>
                                      <span className={styles.direktor}>{item.position}</span>
                                        </Col>
                                        {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Telefon raqami:</span>
                                      <span className={styles.direktor}>{item.phone}</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Qo'shimcha:</span>
                                      <span className={styles.direktor}>{item.description}</span>
                                        </Col>
                                     </Row>
                                    </Col>
                                    <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                        <img src={item.image}/>
                                        <p style={{textAlign:'center'}}>Chaqiruvga qadar boshlang‘ich tayyorgarlik rahbari</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
             )
           }):""}
   
       {this.state.yetakchi!==null?this.state.yetakchi.map(item=>{
             return(
              <Col lg={12}>
              <div className={styles.carddirektor} data-aos="zoom-in-up">
                  <Row>
                      <Col lg={4} style={{border:'1px solid #0F4C81',backgroundColor:'#0F4C81',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                          <img src={item.image}/>
                          <p style={{textAlign:'center'}}>Boshlang'ich tashkilot yoshlar yetakchisi</p>
                      </Col>
                      <Col className={styles.cardwrap} lg={8} style={{border:'1px solid #0F4C81',backgroundColor:'#FCFCFC',paddingTop:'60px', height:'400px', overflowY:'auto'}}>
                        <Row>  
                          <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>F.I.O:</span>
                        <span className={styles.direktor}>{item.full_name}</span>
                          </Col>
                          {/* <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                        <span className={styles.direktor}> 1974-yil</span>
                          </Col> */}
                        
                          <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>Mutaxasisligi:</span>
                        <span className={styles.direktor}>{item.position}</span>
                          </Col>
                          {/* <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                        <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                          </Col>
                          <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>E-mail pochta:</span>
                        <span className={styles.direktor}>alisherovich@gmail.com</span>
                          </Col> */}
                          <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>Telefon raqami:</span>
                        <span className={styles.direktor}>{item.phone}</span>
                          </Col>
                          <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>Qo'shimcha:</span>
                        <span className={styles.direktor}>{item.description}</span>
                          </Col>
                       </Row>
                      </Col>
                  </Row>
              </div>
          </Col>
             )
           }):""}
   
                  
                        <Col lg={12}>

                        <Car autoplay
                       className={styles.sliderComment}
                      //  style={{backgroundColor:'lightgrey'}}
                        >
{this.state.direktor!==null?this.state.direktor.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>Maktab direktori</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}               
{this.state.orin1!==null?this.state.orin1.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}       
{this.state.orin2!==null?this.state.orin2.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}       
{this.state.orin3!==null?this.state.orin3.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>Ma'muriy-xo’jalik ishlar bo'yicha direktor o'rinbosari</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}       
{this.state.psixolog!==null?this.state.psixolog.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>Maktab amaliyotchi psixologi</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}       
{this.state.kasaba!==null?this.state.kasaba.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>Kasaba uyushma raisi</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}       
{this.state.kutubxona!==null?this.state.kutubxona.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>Kutubxona mudirasi</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}       
{this.state.chqbt!==null?this.state.chqbt.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>Chaqiruvga qadar boshlang‘ich tayyorgarlik rahbari</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}       
{this.state.yetakchi!==null?this.state.yetakchi.map(item=>{
             return(
               <div>
                       <article className='review' data-aos="zoom-in-up">
      <div className={styles.imgcontainer} style={{marginTop:'10px'}}>
        <img src={item.image} className={styles.personimg} />
        <span className={styles.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={styles.author}>{item.full_name}</h4>
      <p className={styles.job}>Boshlang'ich tashkilot yoshlar yetakchisi</p>
      <br/>
      
    </article>
                       </div>
            
)}):''}       
                                           </Car>
                        </Col>

                    </Row>
                </Container></>
      }  </div>
        )
    }
}
