import React, { Component } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import style from '../../css/Box.module.css'
import oqituvchi from "../../img/o'qituvchi.jpg"
import davomad from "../../img/davomad.png"
import chat from "../../img/chat.png"
import styles from '../../css/Oqituvchilar.module.css'
import teacher from '../../img/teacher.jpg'

import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import baholar from "../../img/baholar.png"
import yutuqlar from "../../img/yutuqlar.png"
import sinfdoshlar from "../../img/sinfdoshlar.png"
import RingLoader from "react-spinners/RingLoader";
import { BrowserRouter, Link } from 'react-router-dom'
export default class Box extends Component {
    state={
        loading:true,
darslar:[{
    kun:'Dushanba',
    soat_1:'Matematika',
    soat_2:'Rus tili',
    soat_3:'Fizika',
    soat_4:'Ingliz tili',
    soat_5:'Biologiya',
    soat_6:'Geografiya',
    soat_7:'Kimyo'

},
{
    kun:'Seshanba',
    soat_1:'Matematika',
    soat_2:'Rus tili',
    soat_3:'Fizika',
    soat_4:'Ingliz tili',
    soat_5:'Biologiya',
    soat_6:'Geografiya',
    

},
{
    kun:'Chorshanba',
    soat_1:'Matematika',
    soat_2:'Rus tili',
    soat_3:'Fizika',
    soat_4:'Ingliz tili',
    soat_5:'Biologiya',
    soat_6:'Geografiya',
    

},
{
    kun:'Payshanba',
    soat_1:'Matematika',
    soat_2:'Rus tili',
    soat_3:'Fizika',
    soat_4:'Ingliz tili',
    soat_5:'Biologiya',
    
    
},
{
    kun:'Juma',
    soat_1:'Matematika',
    soat_2:'Rus tili',
    soat_3:'Fizika',
    soat_4:'Ingliz tili',
    soat_5:'Biologiya',
    soat_6:'Geografiya',
    soat_7:'Kimyo'

},
{
    kun:'Shanba',
    soat_1:'Matematika',
    soat_2:'Rus tili',
    soat_3:'Fizika',
    soat_4:'Ingliz tili',
  
},

]
    }


    componentDidMount(){
        this.setState({
            loading:false
        })
    }
 
 goBox=(linke)=>{
     window.location.href=window.location.href+linke
 }   
    render() {
        return (
            <div>
{
    this.state.loading?<div className="load">
      <RingLoader color="green" loading={this.state.loading} size={150} /> 
        
    </div>:
              
              <div className={style.box}>
                  <div className={style.cards}>
                      <BrowserRouter>
                      <Row>
                          <Col style={{padding:'30px', display:'flex', justifyContent:'center' ,}} lg={4} md={6} sm={12} onClick={()=>{this.goBox('/oqituvchilar/uz')}}>
                              <div className={style.card}>
                                  <img alt="..." src={oqituvchi}/>
                                  <p>O'qituvchilar</p>
                              </div>
                          </Col>
                          
                          <Col style={{padding:'30px', display:'flex', justifyContent:'center' }} lg={4} md={6} sm={12} onClick={()=>{this.goBox('/baholar/uz')}}>
                              <div className={style.card}>
                                  <img alt="..." src={baholar}/>
                                  <p>Baholar</p>
                              </div>
                          </Col>
                          <Col style={{padding:'30px', display:'flex', justifyContent:'center' }} lg={4} md={6} sm={12} onClick={()=>{this.goBox('/sinfdoshlar/uz')}}>
                              <div className={style.card}>
                                  <img alt="..." src={sinfdoshlar}/>
                                  <p>Sinfdoshlar</p>
                              </div>
                          </Col>
                          
                        
                          
                          <Col style={{padding:'30px', display:'flex', justifyContent:'center' }} lg={4} md={6} sm={12} onClick={()=>{this.goBox('/davomad/uz')}}>
                              <div className={style.card}>
                                  <img alt="..." src={davomad}/>
                                  <p>Davomat</p>
                              </div>
                          </Col>
                          <Col style={{padding:'30px', display:'flex', justifyContent:'center' }} lg={4} md={6} sm={12} onClick={()=>{this.goBox('/yutuqlar/uz')}}>
                            <div className={style.card}>
                                  <img alt="..." src={yutuqlar}/>
                                  <p>Yutuqlar</p>
                              </div>
                             
                          </Col>
                          <Col style={{padding:'30px', display:'flex', justifyContent:'center' }} lg={4} md={6} sm={12}  onClick={()=>{this.goBox('/chat/uz')}}>
                             
                              <div className={style.card}>
                                  <img alt="..." src={chat}/>
                                  <p>Yozishmalar</p>
                              </div>
                          </Col>
                      </Row></BrowserRouter>
                  </div>

                  <br/><br/><br/>
               <div className={style.jadval}>

               <table className={style.darslar}>
  <thead>
    <tr>
      <th>Soat</th>
      <th>Dushanba</th>
      <th>Seshanba</th>
      <th>Chorshanba</th>
      <th>Payshanba</th>
      <th>Juma</th>
      <th>Shanba</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>1</td>
    {
        this.state.darslar.map(item=>{
return(<td>{item.soat_1}</td>)
        })
    }
</tr>
<tr>
    <td>2</td>
    {
        this.state.darslar.map(item=>{
return(<td>{item.soat_2}</td>)
        })
    }
</tr>
<tr>
    <td>3</td>
    {
        this.state.darslar.map(item=>{
return(<td>{item.soat_3}</td>)
        })
    }
</tr><tr>
    <td>4</td>
    {
        this.state.darslar.map(item=>{
return(<td>{item.soat_4}</td>)
        })
    }
</tr><tr>
    <td>5</td>
    {
        this.state.darslar.map(item=>{
return(<td>{item.soat_5}</td>)
        })
    }
</tr><tr>
    <td>6</td>
    {
        this.state.darslar.map(item=>{
return(<td>{item.soat_6}</td>)
        })
    }
</tr>
<tr>
    <td>7</td>
    {
        this.state.darslar.map(item=>{
return(<td>{item.soat_7}</td>)
        })
    }
</tr>
  </tbody>
</table>

               </div>
               
               <br/><br/><br/><br/> 
                  <div className={style.rahbar}>
   
    <MDBCard  className={styles.card} style={{ maxWidth: '100%', margin:'30px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='7'>
          <MDBCardImage className={styles.rasm} src={teacher} alt='...' fluid />
        </MDBCol>
        <MDBCol md='5' >
          <MDBCardBody className={styles.cardbody}>
            <MDBCardTitle><h3>Sinf rahbari</h3></MDBCardTitle>
            <div style={{ border:'1px solid blue', margin:'20px 10px 20px 0px' }}></div>
            <MDBCardText>
            <b style={{fontSize:'18px'}}>F.I.O. :</b> <span style={{fontSize:'16px'}}> Soliyev Elyor Elmurodovich </span><br/> 
          
          
            <br/><b style={{fontSize:'18px'}}>Ma'lumoti:</b> <span style={{fontSize:'16px'}}> Oliy</span><br/> 
            <br/><b style={{fontSize:'18px'}}>Tug'ilgan sanasi:</b> <span style={{fontSize:'16px'}}> 12.03.1987 yil</span><br/> 
            <br/><b style={{fontSize:'18px'}}>Mutaxasisligi:</b> <span style={{fontSize:'16px'}}> Iqtisodiyot </span><br/> 
            <br/><b style={{fontSize:'18px'}}>Telefon raqam:</b> <span style={{fontSize:'16px'}}>+998930820372</span><br/> 
          <br/><b style={{fontSize:'18px'}}>Qabul kuni :</b> <span style={{fontSize:'16px'}}> Dushanba kunlari </span><br/> 
          
       
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    



                  </div>  
           

}
</div>
              
              
            )
    }
}
