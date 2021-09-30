import React, { Component } from 'react'
import styles from '../css/maktabmamuriyati.module.css'
import style from "../css/maktabHayoti.module.css";
import { Carousel  } from 'antd';
import school1 from '../img/school19.jpg'
import school2 from '../img/school20.jpg'
import school3 from '../img/ustoz2.jpg'
import school4 from '../img/school13.jpg'
import {Container,Row,Col} from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import axios from 'axios';
import { url } from '../host/Host';

import Global from '../host/Global';
import { FadeLoader, ScaleLoader } from 'react-spinners';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import Footer from './Footer';
import Navbar2 from './Navbar2';

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
          if(item1===3){
            direktor.push(item)
          }
          if(item1===4){
            orin1.push(item)
          }
          if(item1===5){
            orin2.push(item)
          }
          if(item1===7){
            orin3.push(item)
          }
          if(item1===6){
            
            psixolog.push(item)
          }
          if(item1===9){
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
  }, 1000)


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
        
        return (
            <div>
              {this.state.loader === true ? 
          <div className={styles.loader}>
          <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
          </div> 
          
         : 
            <div>
            <Navbar2/>

            
              <h1 className={styles.headerh}>Maktab ma'muriyati</h1>
            
                   <Carousel
                   dots={false}
                    autoplay
                    effect="fade"
                    style={{ zIndex: "-1" ,width:'100%'}}
                 
                  >
                   
                  <div>
                  <img  src={
                      this.state.direktor.map(item=>{
                        return(item.image)
                      })
                         }
                         className={style.headerImage}
                         />
                    </div>    
           </Carousel>
                <Container>
                <div className={styles.body}>
                <MDBRow className='row-cols-1 row-cols-md-2  row-cols-lg-3'>
                    {this.state.direktor!==null?this.state.direktor.map(item=>{
 return(
  <MDBCol>
    <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
    <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
      <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
        <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
        <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
          Maktab Direktori
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px', maxHeight:'400px'}}>
        <small className='text-muted' style={{fontSize:'16px', height:'auto'}}>
          <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
          <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
          <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
        </small>
      </MDBCardFooter>
    </MDBCard>
  </MDBCol>


  )
           }):""}
   
       {this.state.orin1!==null?this.state.orin1.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          
              )
           }):""}
   
       {this.state.orin2!==null?this.state.orin2.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            )
           }):""}
   
       {this.state.orin3!==null?this.state.orin3.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Ma'muriy-xo’jalik ishlar bo'yicha direktor o'rinbosari
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>)
           }):""}
   
       {this.state.psixolog!==null?this.state.psixolog.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Maktab amaliyotchi psixologi
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
              )
           }):""}
   
       {this.state.kasaba!==null?this.state.kasaba.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Kasaba uyushma raisi
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
              )
           }):""}
   
       {this.state.kutubxona!==null?this.state.kutubxona.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Kutubxona mudirasi
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
             )
           }):""}
   
       {this.state.chqbt!==null?this.state.chqbt.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Chaqiruvga qadar boshlang‘ich tayyorgarlik rahbari
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
             )
           }):""}
   
       {this.state.yetakchi!==null?this.state.yetakchi.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
             <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Boshlang'ich tashkilot yoshlar yetakchisi
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
             )
           }):""}
   
                  
                    

                    </MDBRow>
                    </div>
                </Container>
                <Footer/>
                </div>
      }  </div>
        )
    }
}
