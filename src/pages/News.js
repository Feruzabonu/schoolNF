import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../css/News.module.css'

import new1 from '../img/new1.jpg'
import new2 from '../img/new2.jpg'
import new3 from '../img/new3.jpg'
import new4 from '../img/new4.jpg'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { getNews } from '../host/Config'

export default class News extends Component {
  state={
    news:[],
    new:false,
    id:0
}

  loginNews=(id)=>{
    window.location.href=window.location.href.slice(0, window.location.href.indexOf('cabinet'))+`yangiliklar/uz?id=${id}`
  }
getNews=()=>{
  getNews().then(res=>{
   
  
      
      this.setState({
        news:res.data,
       
      })
      
  
    
  }).catch(err=>{
    console.log(err)
  })
}
componentDidMount(){
    
      this.getNews()
    
  }

  render() {
        return (
          <div style={{position:'sticky', top:'0px', right:'0px', paddingRight:'5px', borderLeft:'solid 1px #02024E', paddingLeft:'3px'}}>
    
                    <div className={styles.recentnews}>

                            <div className={styles.title}>
                                <h5>So'nggi yangiliklar</h5>
                            </div>
                            <div className={styles.body}>
                            <Row>
                              {this.state.news.map((item, key)=>{
                                return(
                                  <>
<Col md={4} sm={4} lg={4} className={styles.new}>
                                <div className={styles.img}>
                                  <img src={item.image} />
                                </div>
                               </Col>
                               <Col md={8} sm={8} lg={8} className={styles.new}>
                               <div onClick={()=>{
                               this.loginNews(key)
                               }} className={styles.text}>
                               <h6>{item.title}</h6>
                                 </div> 
                                
                               </Col></>
                               
                                )
                                
                              })}
                           
                            </Row>
                            </div></div>
                    
           
            </div>
        )
    }
}
