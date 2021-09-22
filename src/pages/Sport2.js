import React, { Component } from 'react'
import styles from '../css/sport.module.css'
import { Container,Row,Col} from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
import {BellOutlined,FormOutlined,DownloadOutlined} from '@ant-design/icons'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import { Radio  } from 'antd';
export default class Sport extends Component {
    state={
        edit:null,
        sport1:{},
        teacher:[],
        sports:[
            {
                title: "Taekvondo",
                day:'Dush-chor-juma',
                time:'12:30 dan 14:30 gacha ',
                location:"1-sport zal",
            },
            {
                title: "Gimnastika",
                day:'Sesh-pay-shanba',
                time:'11:30 dan 13:30 gacha ',
                location:"1-sport zal",
            },
            {
                title: "Boks",
                day:'Dush-chor-juma',
                time:'11:30 dan 14:30 gacha ',
                location:"2-sport zal",
            },
            
        ],
        teacher:[
            {
                rasm: "https://randomuser.me/api/portraits/men/3.jpg",
                name:'Zohidova Odina',
                lavozim:'Pianinachi',
                matn:"O'zbekiston Respublikasi chempioni,Yoshlar orasida yetakchi murabbiy",
                email:'odina@gmail.com',
                telefon:'+99923623565'

            },
            {
                rasm: "https://randomuser.me/api/portraits/men/3.jpg",
                name:'Raximov Asilbek',
                lavozim:'Gitara ustasi',
                matn:"O'zbekiston Respublikasi chempioni,Yoshlar orasida yetakchi murabbiy",
                email:'raximob@gmail.com',
                telefon:'+99956523565'

            },
            {
                rasm: "https://randomuser.me/api/portraits/men/3.jpg",
                name:'Asadova Mohinur',
                lavozim:'Skripkachi',
                matn:"O'zbekiston Respublikasi chempioni,Yoshlar orasida yetakchi murabbiy",
                email:'mohinur@gmail.com',
                telefon:'+99956523565'

            },
        ]
    }
    saveTeacher=()=>{
        var title=document.getElementById('title').value
        var day=document.getElementById('day').value
        var time=document.getElementById('time').value
        var location=document.getElementById('location').value
        var sport={
            title,
            day,
            time,
            location,
        }
        var newsport=this.state.sports;
       if(this.state.edit===null){
        newsport.push(sport);
        this.setState({
            data:newsport
        })
       }else{
           newsport[this.state.edit]=sport
           this.setState({
             edit:null
           })
       }
        this.reset()
    }
    deleteSport=(id)=>{
        var newsport=this.state.sports;
        newsport.splice(id,1)
        this.setState({
            sports:newsport
        })
    
    }
   editSport=(id)=>{
       this.setState({
           sport1:this.state.sports[id],
           edit:id
       })
   }
    reset=()=>{
      document.getElementById('title').value=''
      document.getElementById('day').value=''
      document.getElementById('time').value=''
      document.getElementById('location').value=''
      this.setState({
        edit:null
      })
    }
    render() {
        const sports=this.state
        return (
            <div>
                <Container fluid>
                    <Row>
                        <h1 style={{fontSize:'30px',fontFamily:'"Lobster",cursive'}}>Sport mashg'ulotlari</h1>
                        {
                            this.state.teacher.map(item=>{
                                return(
                                    <Col lg={4} md={12} sm={12}>
                            <div className={styles.card}>
                            <div className={styles.card, styles.cardone}>
                                <header>
                                <div className={styles.avatar}>
                                    <img src={item.rasm} alt="Jhon Doe" />
                                </div>
                                </header>

                                <h3 className={styles.headerName}>{item.name}</h3>
                                <div className={styles.desc}>
                                <Button className={styles.btncard}>{item.lavozim}</Button>
                                <p>{item.matn}</p>
                                <p style={{marginTop:'-40px',fontWeight:'900'}}>{item.email}</p>
                                <p style={{marginTop:'-40px',fontWeight:'900'}}>{item.telefon}</p>
                                </div>

                                <footer className={styles.footer} style={{marginTop:'-40px',fontWeight:'900'}}>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-linkedin"></i></a>
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-instagram"></i></a>
                                </footer>
                            </div>

                            </div>
                        </Col>
                                )
                            })
                        }
                        <Col lg={12} style={{marginTop:'30px'}}>
                        <div>
        <div className={styles.formAdmin}>
                                  <h4>Dars jadvalini kiritish</h4>
                              <Form id="formAdmin">
            <Form.Group controlId="title">
              <Form.Control type="text" placeholder="Sport turini kiritning" defaultValue={this.state.sport1.fullname}/>
            </Form.Group>
            <Form.Group controlId="day">
              <Form.Control type="text" placeholder="Kunni kiriting" defaultValue={this.state.sport1.day}/>
            </Form.Group>
            <Form.Group controlId="time">
              <Form.Control type="text" placeholder="Vaqtni kiriting" defaultValue={this.state.sport1.time}/>
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Control type="text" placeholder="Dars o'tiladigan joyni kiriting" defaultValue={this.state.sport1.location}/>
            </Form.Group>
            <a href="#2"><Button variant="primary" className={styles.inputFormBtn} onClick={this.saveTeacher}>
            O'zgarishlarni saqlash
            </Button></a>
            <Button variant="primary" className={styles.inputFormBtn1} onClick={this.reset}>
                            Bekor qilish
            </Button>

      
        </Form>
                                  </div>
                                <Container fluid style={{padding:'0'}}>
                                  <Row>
                                  {
                                      this.state.sports.map((item,key)=>{
                                       return(
                                        <Col xl={4} lg={6} md={6} sm={6} className={styles.containerKonkurslar}>
                                        <div className={styles.cardsKonkurslar}>
                                            <h2>{item.title}</h2>
                                            <span>Dars kunlari:</span>
                                            <p>{item.day}</p>
                                            <span>Dars vaqti:</span>
                                            <p>{item.time}</p>
                                            <span>Dars o'tiladigan joy:</span>
                                            <p>{item.location}</p>
                              
                                            <span><AiOutlineEdit style={{marginRight:'5px',color:'green',fontSize:'20px'}} onClick={()=> this.editSport(key)}/></span>
                                           
                                            <span><AiOutlineDelete style={{color:'red',fontSize:'20px'}} onClick={()=> this.deleteSport(key)}/></span>
                                        </div>
                                    </Col>
                                       )
                                      })
                                  }
                                  </Row>
                                </Container>
        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
