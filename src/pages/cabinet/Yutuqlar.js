import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import style from '../../css/Yutuqlar.module.css'
import yuksak from '../../img/yuksak.jpg'
import gold from '../../img/gold.png'
import gimnastika from '../../img/gimnastika.jpg'
export default class Yutuqlar extends Component {
    render() {
        return (
            <div className={style.yutuq}>
                <Container>
<Row>
<Col style={{marginTop:'20px'}} lg={6} md={6} sm={12}>
  <div className="card">
      <img src={yuksak} className={style.image}/>
      <div className={style.cardBody}>
          <h3>Yuksak ma'naviyatli avlod <img src={gold}/></h3>
          <p>1-o'rin</p>
          <p>Yuksak ma'naviyatli avlod tanlovida bizning maktabimiz guruhi birinchi o'rinni egalladi</p>
      </div>
  </div>
  
       </Col>
       
<Col style={{marginTop:'20px'}} lg={6} md={6} sm={12}>
  <div className="card">
      <img src={gimnastika} className={style.image}/>
      <div className={style.cardBody}>
          <h3>Yosh sportchilar <img src={gold}/></h3>
          <p>1-o'rin</p>
          <p>Yosh sportchilar ko'rik tanlovida gimnastika bo'yicha Rustamova Dilnoza 1-o'rinni egalladi</p>
      </div>
  </div>
  
       </Col>
       <Col style={{marginTop:'20px'}} lg={6} md={6} sm={12}>
  <div className="card">
      <img src={yuksak} className={style.image}/>
      <div className={style.cardBody}>
          <h3>Yuksak ma'naviyatli avlod <img src={gold}/></h3>
          <p>1-o'rin</p>
          <p>Yuksak ma'naviyatli avlod tanlovida bizning maktabimiz guruhi birinchi o'rinni egalladi</p>
      </div>
  </div>
  
       </Col>
       
<Col style={{marginTop:'20px'}} lg={6} md={6} sm={12}>
  <div className="card">
      <img src={gimnastika} className={style.image}/>
      <div className={style.cardBody}>
          <h3>Yosh sportchilar <img src={gold}/></h3>
          <p>1-o'rin</p>
          <p>Yosh sportchilar ko'rik tanlovida gimnastika bo'yicha Rustamova Dilnoza 1-o'rinni egalladi</p>
      </div>
  </div>
  
       </Col>
       
       
       <Col style={{marginTop:'20px'}} lg={6} md={6} sm={12}>
  <div className="card">
      <img src={yuksak} className={style.image}/>
      <div className={style.cardBody}>
          <h3>Yuksak ma'naviyatli avlod <img src={gold}/></h3>
          <p>1-o'rin</p>
          <p>Yuksak ma'naviyatli avlod tanlovida bizning maktabimiz guruhi birinchi o'rinni egalladi</p>
      </div>
  </div>
  
       </Col>
       
<Col style={{marginTop:'20px'}} lg={6} md={6} sm={12}>
  <div className="card">
      <img src={gimnastika} className={style.image}/>
      <div className={style.cardBody}>
          <h3>Yosh sportchilar <img src={gold}/></h3>
          <p>1-o'rin</p>
          <p>Yosh sportchilar ko'rik tanlovida gimnastika bo'yicha Rustamova Dilnoza 1-o'rinni egalladi</p>
      </div>
  </div>
  
       </Col>
       

       <Col style={{marginTop:'20px'}} lg={6} md={6} sm={12}>
  <div className="card">
      <img src={yuksak} className={style.image}/>
      <div className={style.cardBody}>
          <h3>Yuksak ma'naviyatli avlod <img src={gold}/></h3>
          <p>1-o'rin</p>
          <p>Yuksak ma'naviyatli avlod tanlovida bizning maktabimiz guruhi birinchi o'rinni egalladi</p>
      </div>
  </div>
  
       </Col>
       
<Col style={{marginTop:'20px'}} lg={6} md={6} sm={12}>
  <div className="card">
      <img src={gimnastika} className={style.image}/>
      <div className={style.cardBody}>
          <h3>Yosh sportchilar <img src={gold}/></h3>
          <p>1-o'rin</p>
          <p>Yosh sportchilar ko'rik tanlovida gimnastika bo'yicha Rustamova Dilnoza 1-o'rinni egalladi</p>
      </div>
  </div>
  
       </Col>
       

</Row>

                </Container>
                
            </div>
        )
    }
}
