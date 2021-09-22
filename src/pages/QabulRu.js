import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from '../css/qabul.module.css'
import students from '../img/Students.png';
import shakl from '../img/shakl.png';
import jarayon from '../img/jarayon.png'
import tav_img from '../img/tav_img.jpg'
import talab from '../img/talab.jpg'
import {Container, Row, Col} from 'react-bootstrap';

class QabulRu extends React.Component {
   
componentDidMount(){
    Aos.init({
        duration:2000
    })
}
    render() {
        return (
            <div>
               <div style={{backgroundColor:'rgb(86, 226, 149)', width:'100%', }}>
               <Container>
                    <div style={{width:'100%', height:'100vh', position:'relative'}} >
                    <Row >
                        <Col lg={6} md={12} sm={12}> <div data-aos="fade-right" className={styles.text_q}>
                        <h1 >Подать заявку на поступление</h1>
                       <img src='https://as2.ftcdn.net/jpg/01/17/65/19/500_F_117651987_mJuEArLJWmdeGSmSqbntiI5i04RBvhXX.jpg' style={{width:'200px', height:'200px', borderRadius:'50%',marginLeft:'30%', marginTop:'25%'}} />
                            </div></Col>
                        <Col lg={6} md={12} sm={12} className={styles.img} data-aos="zoom-in-up" >
                            <img src={shakl} className={styles.back} style={{width:'450px', height:'450px', bottom:'100px', position:'absolute'}}/>
                            <img src={students} className={styles.main} style={{position:'absolute', bottom:'0px',  height:'625px'}} />
                        </Col>
                    </Row>
                    </div>
                </Container>
               </div>

               
               <div className={styles.tavsilotlar}>
               <Container>
                    <Row>
                    <Col lg={4} md={12} sm={12} className={styles.tavsilot}>
            <img src={tav_img}  data-aos="zoom-in-up"/>
            </Col>
            <Col lg={8} md={12} sm={12} className={styles.tavsilottext} data-aos="zoom-in-up" >
            <h3>Подробная информация о процессе приема</h3>
                            <p>
                            Если вы хотите учиться в университете в центре города, посвященном пению мира для завтрашнего дня, вы выбираете правильное место. Мы не используем специальные формулы для отбора студентов. Мы просматриваем академические и личные заявки каждого заявителя, чтобы выбрать подходящих для нашего сообщества студентов с различным опытом.
                            </p>
                            <p>
                            Если вы хотите учиться в университете в центре города, если вы хотите учиться в университете в центре города, который специализируется на воспевании мира для завтрашнего дня, вы выбираете правильное место. Мы не используем специальные формулы для отбора студентов. Мы рассмотрим академические и личные заявки каждого заявителя, чтобы выбрать студентов, которые полностью совместимы с нашей командой.
                            </p>
            </Col>
                    </Row>
                </Container>
               </div>

                <div className={styles.talim}>
                    <Container>
                        <Row>
                            <Col lg={4} md={12} sm={12}><div className={styles.info} style={{backgroundColor:'white'}} data-aos="zoom-in-up">
                            <div style={{width:'70px', height:'70px', borderRadius:'50%', backgroundColor:'white', margin:'auto', justifyContent:'center', alignItems:'center',display:'flex', marginTop:'-60px', border:'3px solid rgb(86, 226, 149)'}}>
                            <img src='https://image.flaticon.com/icons/png/512/906/906175.png' />
                            </div>
                                <h3>Форма обучения</h3>
                                <p style={{fontSize:'18px'}}>
                                Наша школьная форма обучения - дневная, учебный процесс расписан с 8:30 до 16:00.
                                </p>
                                </div></Col>


                                <Col lg={4} md={12} sm={12}><div className={styles.info_b} style={{backgroundColor:'rgb(86, 226, 149)'}} data-aos="zoom-in-up">   
                            <div style={{width:'70px', height:'70px', borderRadius:'50%', backgroundColor:'white', margin:'auto', justifyContent:'center', alignItems:'center',display:'flex', marginTop:'-60px', border:'3px solid rgb(86, 226, 149)'}}>
                            <img src='https://image.flaticon.com/icons/png/512/3829/3829933.png' />
                            </div>
                            <h3>Выпускников</h3>
                                <p style={{fontSize:'18px'}}>
                                К концу 2019-2020 учебного года школу окончили 106 одиннадцатиклассников, из них 42 успешно сдали вступительные экзамены в международные университеты.
                                </p>
                                </div></Col>
                            <Col lg={4} md={12} sm={12}><div className={styles.info} style={{backgroundColor:'white'}} data-aos="zoom-in-up">    
                            <div style={{width:'70px', height:'70px', borderRadius:'50%', backgroundColor:'white', margin:'auto', justifyContent:'center', alignItems:'center',display:'flex', marginTop:'-60px', border:'3px solid rgb(86, 226, 149)'}}>
                            <img src='https://image.flaticon.com/icons/png/512/950/950145.png'/>
                            </div>
                            <h3>Студенты</h3>
                                <p style={{fontSize:'18px'}}>
                                В 2019-2020 учебном году получили образование 656 учеников с 5 по 11 класс.
                                </p>
                                </div></Col>


                        </Row>
                    </Container>
                </div>

                <div className={styles.jarayon}>
                <Container fluid >
                    <h1 style={{textAlign:'center', fontFamily:'Lobster', fontSize:'50px'}}>Процесс приема</h1>
                    <div className={styles.line} style={{marginLeft:'auto', marginRight:'auto'}}></div>
                  <Row >
                      <Col lg={4} md={12} sm={12}>
                      <div className={styles.jarayon_text}>
                         <h3>1. Зарегистрируйтесь онлайн</h3>
                         <div className={styles.line}></div>
                         <p>
                         Чудесная безмятежность охватила все мое сердце, как и этим сладким весенним утром, я наслаждаюсь им всем сердцем. Я одинок и чувствую прелесть бытия.
                         </p>
                      </div>
                      
                      <div className={styles.jarayon_text}>
                          <h3>2. Заполните форму.</h3>
                          <div className={styles.line}></div>
                          <p>
                          Чудесная безмятежность охватила все мое сердце, как и этим сладким весенним утром, я наслаждаюсь им всем сердцем. Я одинок и чувствую прелесть бытия.
                          </p>
                      </div>

                      <div className={styles.jarayon_text}>
                          <h3>3. Просмотрите регистрацию.</h3>
                          <div className={styles.line}></div>
                          <p>
                          Чудесная безмятежность охватила все мое сердце, как и этим сладким весенним утром, я наслаждаюсь им всем сердцем. Я одинок и чувствую прелесть бытия.
                          </p>
                      </div>
                      </Col>
                      <Col lg={4} md={12} sm={12}><div className={styles.jarayon_img}><img src={jarayon}/></div></Col>
                      <Col lg={4} md={12} sm={12}>
                      <div className={styles.jarayon_text}>
                         <h3>4. Соберите необходимые документы.</h3>
                         <div className={styles.line}></div>
                         <p>
                         Чудесная безмятежность охватила все мое сердце, как и этим сладким весенним утром, я наслаждаюсь им всем сердцем. Я одинок и чувствую прелесть бытия.
                         </p>
                      </div>
                      
                      <div className={styles.jarayon_text}>
                          <h3>5. Процесс собеседования</h3>
                          <div className={styles.line}></div>
                          <p>
                          Чудесная безмятежность охватила все мое сердце, как и этим сладким весенним утром, я наслаждаюсь им всем сердцем. Я одинок и чувствую прелесть бытия.
                          </p>
                      </div>

                      <div className={styles.jarayon_text}>
                          <h3>6. Окончательное решение</h3>
                          <div className={styles.line}></div>
                          <p>
                          Чудесная безмятежность охватила все мое сердце, как и этим сладким весенним утром, я наслаждаюсь им всем сердцем. Я одинок и чувствую прелесть бытия.
                          </p>
                      </div>
                      </Col>
                  </Row>
                </Container>
                </div>


                <div className={styles.tavsilotlar} style={{height:'580px'}} >
                <Container>
                    <Row>
                    <Col lg={4} md={12} sm={12} className={styles.tavsilot}>
            <img src={talab}  data-aos="zoom-in-up"/>
            </Col>
            <Col lg={8} md={12} sm={12} className={styles.tavsilottext} data-aos="zoom-in-up" style={{height:'570px'}}>
            <h3>Требования для участия в экзамене</h3>
                            <p>
                            Родители или опекуны учащихся должны соответствовать следующим требованиям:
- Четкое указание номера телефона получателя SMS с идентификатором студента на момент регистрации; - Предоставить студенту компьютер, планшет или смартфон с подключением к Интернету и приложением ZOOM, чтобы он мог сдавать экзамен из дома или в любом другом месте с инфраструктурой через веб-приложение; - подготовить студента к онлайн-тесту.
                            </p>
                            <p>
                            Заявки на участие в квалификационных экзаменах специализированной школы принимаются от обучающихся, успешно окончивших дисциплинарные ступени государственного и негосударственного общего среднего образования с оценками «4» и «5».
                            </p>
                            <p>
                            Родители несут ответственность за то, чтобы документы учащегося действовали, а их ребенок участвовал в экзаменах.
                            </p>
            </Col>
                    </Row>
                </Container>
              
               </div>
                

                <div className={styles.muddat} data-aos="fade-up">
                   <Container>
                       <h1 style={{textAlign:'center', fontFamily:'Lobster', fontSize:'40px'}}>Даты экзаменов</h1>
                       <div className={styles.line} style={{marginLeft:'auto', marginRight:'auto'}}></div>
                       <Row>
                           <div className={styles.muddat_item}>
                           <Col lg={4} md={12} sm={12}><div className={styles.muddat_text1} ><div ><h3>Академический год</h3><p>2020/2021</p></div></div></Col>
                           <Col lg={4} md={12} sm={12}><div className={styles.muddat_text2}><div ><h3>Срок подачи документов</h3><p>10-20 сентября</p></div></div></Col>
                           <Col lg={4} md={12} sm={12}><div className={styles.muddat_text3}><div ><h3>День экзамена</h3><p>25 сентября - 9 октября</p></div></div></Col>
                           </div>
                       </Row>
                   </Container>
                </div>



                <Container>
                    <div className={styles.hujjat} >
                        <div className={styles.hujjat_text} data-aos="fade-right">
                            <h3>Необходимые документы</h3>
                            <div className={styles.line} ></div>
                            <p>
                            <b>1.</b> Свидетельство о рождении студента (не более pdf-10Мб).
                            </p>
                            <p>
                                <b>2.</b> Аттестат студента, подтверждающий, что он окончил 2019-2020 учебный год с оценками «4» и «5». Должно быть одобрено директором школы (не более pdf-10Мб).
                            </p>
                            <p>
                                <b>3.</b>  3/4 изображения (в формате jpg / png / jpeg).
                            </p>
                            <p style={{color:'darkgray', marginTop:'30px'}}>
                            Город Ташкент, Яшнабадский район, улица Махтумкули Call-Center: 1206 (Время работы с 08:00 до 20:00)
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}



export default QabulRu;
