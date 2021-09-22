import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardFooter, MDBCardImage, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import styles from '../../css/Oqituvchilar.module.css'
import teacher from '../../img/teacher.jpg'
class Oqituvchilar extends React.Component {
   

    render() {
        return (
            <div>
           
              <Container fluid className='mt-5 ' >
               
               <Row>
                 
                 <Col lg={10}>
                 <h3 className='text-center mb-5' id="tgr">Fan o'qituvchilari</h3>
                 <div className="blueLine"></div>
                 <MDBCard  className={styles.card} style={{ maxWidth: '100%', margin:'30px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='7'>
          <MDBCardImage className={styles.rasm} src={teacher} alt='...' fluid />
        </MDBCol>
        <MDBCol md='5' >
          <MDBCardBody className={styles.cardbody}>
            <MDBCardTitle><h3>Matematika fani</h3></MDBCardTitle>
            <div style={{ border:'1px solid blue', margin:'20px 10px 20px 0px' }}></div>
            <MDBCardText>
            <b style={{fontSize:'18px'}}>F.I.O. :</b> <span style={{fontSize:'16px'}}> Soliyev Elyor Elmurodovich </span><br/> 
          
          
            <br/><b style={{fontSize:'18px'}}>Ma'lumoti:</b> <span style={{fontSize:'16px'}}> Oliy</span><br/> 
            <br/><b style={{fontSize:'18px'}}>Mutaxasisligi:</b> <span style={{fontSize:'16px'}}> Iqtisodiyot </span><br/> 
              <br/><b style={{fontSize:'18px'}}>Telefon raqam:</b> <span style={{fontSize:'16px'}}>+998930820372</span><br/> 
          <br/><b style={{fontSize:'18px'}}>Qabul kuni :</b> <span style={{fontSize:'16px'}}> Dushanba kunlari </span><br/> 
       
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <MDBCard className={styles.card} style={{ maxWidth: '100%', margin:'30px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='5'>
          <MDBCardBody>
            <MDBCardTitle><h3>Biologiya fani</h3></MDBCardTitle>
            <div style={{ border:'1px solid blue', margin:'20px 10px 20px 0px' }}></div>
            <MDBCardText>
            <b style={{fontSize:'18px'}}>F.I.O. :</b> <span style={{fontSize:'16px'}}> Toshev Nurxon Mirzayevich </span><br/> 
          
            <br/><b style={{fontSize:'18px'}}>Tug'ilgan sana :</b> <span style={{fontSize:'16px'}}> 1991 - yil </span><br/> 
            <br/><b style={{fontSize:'18px'}}>Ma'lumoti:</b> <span style={{fontSize:'16px'}}> Oliy</span><br/> 
            <br/><b style={{fontSize:'18px'}}>Mutaxasisligi:</b> <span style={{fontSize:'16px'}}> Neft va gaz kimyoviy texnologiyasi </span><br/> 
              <br/><b style={{fontSize:'18px'}}>Telefon raqam:</b> <span style={{fontSize:'16px'}}>+998930820372</span><br/> 
          <br/><b style={{fontSize:'18px'}}>Qabul kuni :</b> <span style={{fontSize:'16px'}}> Chorshanba kunlari </span><br/> 
       
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='7'>
          <MDBCardImage className={styles.rasm} src={teacher} alt='...' fluid />
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <MDBCard className={styles.card} style={{ maxWidth: '100%', margin:'30px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='7'>
          <MDBCardImage className={styles.rasm} src={teacher} alt='...' fluid />
        </MDBCol>
        <MDBCol md='5'>
          <MDBCardBody>
            <MDBCardTitle><h3>Tarix fani</h3></MDBCardTitle>
            <div style={{ border:'1px solid blue', margin:'20px 10px 20px 0px' }}></div>
            <MDBCardText>
            <b style={{fontSize:'18px'}}>F.I.O. :</b> <span style={{fontSize:'16px'}}> Xusanov Farxod Rustamovich </span><br/> 
          
          
            <br/><b style={{fontSize:'18px'}}>Ma'lumoti:</b> <span style={{fontSize:'16px'}}> Oliy</span><br/> 
            <br/><b style={{fontSize:'18px'}}>Mutaxasisligi:</b> <span style={{fontSize:'16px'}}> Menejment </span><br/> 
              <br/><b style={{fontSize:'18px'}}>Telefon raqam:</b> <span style={{fontSize:'16px'}}>+998930820372</span><br/> 
          <br/><b style={{fontSize:'18px'}}>Qabul kuni :</b> <span style={{fontSize:'16px'}}> Juma kunlari </span><br/> 
       
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
                 </Col>
               </Row>
              
              </Container>
            </div>
        );
    }
}



export default Oqituvchilar;
