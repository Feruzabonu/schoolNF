import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../css/qabul.module.css";
import students from "../img/Students.png";
import shakl from "../img/shakl.png";
import jarayon from "../img/jarayon.png";
import tav_img from "../img/tav_img.jpg";
import talab from "../img/talab.jpg";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { url, user } from "../host/Host";
import FadeLoader from "react-spinners/FadeLoader";
import Global from "../host/Global";

class Qabul extends React.Component {
  state = {
    loader: true,
    qabul: [],
    id: 0,
    school: null,
  };

  getSchool = () => {
    //   var a=window.location.href.split('/')
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({
        school: res.data,
        loader: false,
      });
      console.log(res.data);
    });
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getSchool();
  }
  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <div style={{ width: "100vw", overflowX: "hidden" }}>
            <div
              className={styles.qabulHeader}
              style={{ backgroundColor: "#318CE7", width: "100%" }}
            >
              <Container fluid style={{ padding: "0" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    position: "relative",
                  }}
                >
                  <Row>
                    <Col style={{ padding: "0" }} lg={6} md={12} sm={12}>
                      {" "}
                      <div data-aos="fade-right" className={styles.text_q}>
                        <h1>Qabul uchun ariza topshiring</h1>
                        <img
                          src="https://as2.ftcdn.net/jpg/01/17/65/19/500_F_117651987_mJuEArLJWmdeGSmSqbntiI5i04RBvhXX.jpg"
                          style={{
                            boxShadow:
                              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            marginLeft: "30%",
                            marginTop: "10%",
                          }}
                        />
                      </div>
                    </Col>
                    <Col
                      style={{ padding: "0" }}
                      lg={6}
                      md={12}
                      sm={12}
                      className={styles.img}
                      data-aos="zoom-in-up"
                    >
                      <img
                        src={shakl}
                        className={styles.back}
                        style={{
                          width: "450px",
                          height: "450px",
                          bottom: "0px",
                          position: "absolute",
                        }}
                      />
                      <img
                        src={students}
                        className={styles.main}
                        style={{
                          position: "absolute",
                          bottom: "-50px",
                          height: "625px",
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>

            <div className={styles.tavsilotlar}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col
                    style={{ padding: "0" }}
                    lg={4}
                    md={12}
                    sm={12}
                    className={styles.tavsilot}
                  >
                    <img
                      src={
                        this.state.school !== null
                          ? this.state.school.q !== null
                            ? this.state.school.q
                            : tav_img
                          : tav_img
                      }
                      data-aos="zoom-in-up"
                    />
                  </Col>
                  <Col
                    style={{ padding: "0" }}
                    lg={8}
                    md={12}
                    sm={12}
                    className={styles.tavsilottext}
                    data-aos="zoom-in-up"
                  >
                    <h3>Qabul jarayoni bo'yicha tafsilotlar</h3>

                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_t !== null
                          ? this.state.school.q_t
                          : "Qabul jarayonlari bo'yicha tavsilotlar"
                        : "Qabul jarayonlari bo'yicha tavsilotlar"}
                    </p>

                    {/* <p>
                            Agar siz ertangi kun uchun dunyoni tarannum etishga qaratilgan shahar markazidagi universitetda o'qishni istasangiz, siz to'g'ri joyni tanlaysiz. Talabalarni tanlash uchun biz maxsus formulalardan foydalanmaymiz. Biz har bir talabnoma beruvchining ilmiy va shaxsiy arizalarini ko'rib chiqamiz, har xil ma'lumotlarga ega bo'lgan jamoamizga mos talabalarni tanlash uchun.
                            </p>
                            <p>
                            Agar siz shaharning qoq markazida joylashgan universitetda o'qishni xohlasangiz, agar siz ertangi kun uchun dunyoni tarannum etishga e'tibor qaratadigan shahar markazidagi universitetda o'qishni xohlasangiz, siz to'g'ri joyni tanlaysiz. Talabalarni tanlash uchun biz maxsus formulalardan foydalanmaymiz. Biz har bir abituriyentning ilmiy va shaxsiy arizasini ko'rib chiqamiz, bu bizning jamoamizga to'liq mos keladigan talabalarni tanlash uchun
                            </p> */}
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.talim}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div
                      className={styles.info}
                      style={{ backgroundColor: "white" }}
                      data-aos="zoom-in-up"
                    >
                      <div
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          backgroundColor: "white",
                          margin: "auto",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          marginTop: "-60px",
                          border: "3px solid #318CE7",
                        }}
                      >
                        <img src="https://image.flaticon.com/icons/png/512/906/906175.png" />
                      </div>
                      <h3>Ta'lim shakli</h3>
                      <p style={{ fontSize: "18px" }}>
                        {this.state.school !== null
                          ? this.state.school.q_talim !== null
                            ? this.state.school.q_talim
                            : "Ta'lim shakli to'g'risida ma'lumot"
                          : "Ta'lim shakli to'g'risida ma'lumot"}
                        {/* Bizning maktab ta’lim shakli kunduzgi bo’lib ta’lim jarayonlari 8:30 dan 16:00 gacha belgilangan. */}
                      </p>
                    </div>
                  </Col>

                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div
                      className={styles.info_b}
                      style={{ backgroundColor: "#318CE7" }}
                      data-aos="zoom-in-up"
                    >
                      <div
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          backgroundColor: "white",
                          margin: "auto",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          marginTop: "-60px",
                          border: "3px solid #318CE7",
                        }}
                      >
                        <img src="https://image.flaticon.com/icons/png/512/3829/3829933.png" />
                      </div>
                      <h3>Bitiruvchilar</h3>
                      <p style={{ fontSize: "18px" }}>
                        {this.state.school !== null
                          ? this.state.school.q_bitiruv !== null
                            ? this.state.school.q_bitiruv
                            : "Bitiruv to'g'risida ma'lumotlar"
                          : "Bitiruv to'g'risida ma'lumotlar"}

                        {/* 2019-2020 o‘quv yili yakuniga ko‘ra 106 nafar 11-sinf o‘quvchilari maktabni tamomlashdi va ulardan 42 nafar o‘quvchi Xalqaro Universitetlarga kirish imtihonlaridan muvaffaqiyatli o‘tishdi. */}
                      </p>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div
                      className={styles.info}
                      style={{ backgroundColor: "white" }}
                      data-aos="zoom-in-up"
                    >
                      <div
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "50%",
                          backgroundColor: "white",
                          margin: "auto",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          marginTop: "-60px",
                          border: "3px solid #318CE7",
                        }}
                      >
                        <img src="https://image.flaticon.com/icons/png/512/950/950145.png" />
                      </div>
                      <h3>O'quvchilar</h3>
                      <p style={{ fontSize: "18px" }}>
                        {this.state.school !== null
                          ? this.state.school.q_oquvchi !== null
                            ? this.state.school.q_oquvchi
                            : "O'quvchilar to'g'risida ma'lumot"
                          : "O'quvchilar to'g'risida ma'lumot"}
                        {/* 2019-2020 o‘quv yilida 5- sinfdan 11-sinfgacha bo’lgan 656 nafar o‘quvchi ta’lim oldi. */}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.jarayon}>
              <Container fluid style={{ padding: "0" }}>
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "Lobster",
                    fontSize: "50px",
                  }}
                >
                  Qabul jarayoni
                </h1>
                <div
                  className={styles.line}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                ></div>
                <Row>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.jarayon_text}>
                      <h3>1. Onlayn ro'yxatdan o'ting</h3>
                      <div className={styles.line}></div>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_j_online !== null
                            ? this.state.school.q_j_online
                            : "O'nline ro'yxatdan o'tish haqida"
                          : "O'nline ro'yxatdan o'tish haqida"}

                        {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                      </p>
                    </div>

                    <div className={styles.jarayon_text}>
                      <h3>2. Ariza yozing</h3>
                      <div className={styles.line}></div>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_j_forma !== null
                            ? this.state.school.q_j_forma
                            : "Ro'yxatdan o'tishdagi ariza haqida ma'lumot"
                          : "Ro'yxatdan o'tishdagi ariza haqida ma'lumot"}

                        {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                      </p>
                    </div>

                    <div className={styles.jarayon_text}>
                      <h3>3. Arizani ko'zdan kechiring</h3>
                      <div className={styles.line}></div>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_j_koz !== null
                            ? this.state.school.q_j_koz
                            : "Arizani ko'zdan kechirish haqida ma'lumot"
                          : "Arizani ko'zdan kechirish haqida ma'lumot"}

                        {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                      </p>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.jarayon_img}>
                      <img src={jarayon} />
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.jarayon_text}>
                      <h3>4. Kerakli hujjatlarni to'plang</h3>
                      <div className={styles.line}></div>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_j_hujjat !== null
                            ? this.state.school.q_j_hujjat
                            : "Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"
                          : "Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"}
                        {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                      </p>
                    </div>

                    <div className={styles.jarayon_text}>
                      <h3>5. Suhbat jarayoni</h3>
                      <div className={styles.line}></div>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_j_intervyu !== null
                            ? this.state.school.q_j_intervyu
                            : "Suhbat jarayoni haqida ma'lumot"
                          : "Suhbat jarayoni haqida ma'lumot"}

                        {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                      </p>
                    </div>

                    <div className={styles.jarayon_text}>
                      <h3>6. So'nggi qaror</h3>
                      <div className={styles.line}></div>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_j_qaror !== null
                            ? this.state.school.q_j_qaror
                            : "So'ngi qaror haqida ma'lumot"
                          : "So'ngi qaror haqida ma'lumot"}

                        {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.tavsilotlar} style={{ height: "580px" }}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col
                    style={{ padding: "0" }}
                    lg={4}
                    md={12}
                    sm={12}
                    className={styles.tavsilot}
                  >
                    <img
                      src={
                        this.state.school !== null
                          ? this.state.school.q_imtihon_r !== null
                            ? this.state.school.q_imtihon_r
                            : talab
                          : talab
                      }
                      data-aos="zoom-in-up"
                    />
                  </Col>
                  <Col
                    style={{ padding: "0" }}
                    lg={8}
                    md={12}
                    sm={12}
                    className={styles.tavsilottext}
                    data-aos="zoom-in-up"
                    style={{ height: "570px" }}
                  >
                    <h3 style={{ fontSize: "30px" }}>
                      Imtihonda ishtirok etish talablari
                    </h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_imtihon_t !== null
                          ? this.state.school.q_imtihon_t
                          : "Imtixonda ishtirok etish talablari haqida ma'lumot"
                        : "Imtixonda ishtirok etish talablari haqida ma'lumot"}
                    </p>
                    {/* <p>
                            O‘quvchilarning ota-onasi yoki ota-onasining o‘rnini bosuvchi shaxslar quyidagi talablarni bajarishi shart:
                            – ro‘yxatdan o‘tish vaqtida o‘quvchining ID ko‘rsatib yuborilgan SMS xabarni qabul qiluvchi telefon raqamni aniq ko‘rsatilishi; – veb-ilova orqali uydan yoki infrastruktura mavjud bo‘lgan istalgan joydan o‘quvchi imtihonga qatnasha olishi uchun Internet tarmog‘i bo‘lgan hamda ZOOM ilovasi o‘rnatilgan kompyuter yoki planshet yoki smartfon bilan ta’minlashi; – o‘quvchiga tarmoq orqali sinovlarda qatnashishga tayyorlashi.
                            </p>
                            <p>
                            Ixtisoslashtirilgan maktabga saralash imtihonlarida ishtirok etish uchun hujjatlar davlat va nodavlat umumiy o‘rta ta’lim muassasalarining tartibli bosqichdagi sinflarini muvaffaqiyatli “4” va “5” baholariga tamomlagan o‘quvchilardan qabul qilinadi.
                            </p>
                            <p>
                            O‘quvchining taqdim etgan hujjatlari haqqoniyligi va farzandining sinovlarda shaffof ishtirokini taʼminlash ota-ona zimmasiga yuklatiladi.
                            </p> */}
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.muddat} data-aos="fade-up">
              <Container fluid style={{ padding: "0" }}>
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "Lobster",
                    fontSize: "40px",
                  }}
                >
                  Ma'lumotlar
                </h1>
                <div
                  className={styles.line}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                ></div>
                <Row>
                  <div className={styles.muddat_item}>
                    <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                      <div className={styles.muddat_text1}>
                        <div>
                          <h3>O'quv yili</h3>
                          <p>
                            {this.state.school !== null
                              ? this.state.school.q_oquv_yili !== null
                                ? this.state.school.q_oquv_yili
                                : "O'quv yili"
                              : "O'quv yili"}
                            {/* 2020/2021 */}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                      <div className={styles.muddat_text2}>
                        <div>
                          <h3>Hujjat topshirish muddati</h3>
                          <p>
                            {this.state.school !== null
                              ? this.state.school.q_muddat !== null
                                ? this.state.school.q_muddat
                                : "Muddati haqida ma'lumot"
                              : "Muddati haqida ma'lumot"}
                            {/* 10-20-sentabr kunlari */}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                      <div className={styles.muddat_text3}>
                        <div>
                          <h3>Imtihon kuni</h3>
                          <p>
                            {this.state.school !== null
                              ? this.state.school.q_imtihon !== null
                                ? this.state.school.q_imtihon
                                : "Imtixon kuni"
                              : "Imtixon kuni"}
                            {/* 25-sentabrdan 9-oktabrgacha */}
                          </p>
                        </div>
                      </div>
                    </Col>
                  </div>
                </Row>
              </Container>
            </div>

            <Container fluid style={{ padding: "0" }}>
              <div className={styles.hujjat}>
                <div className={styles.hujjat_text} data-aos="fade-right">
                  <h3>Kerakli hujjatlar</h3>
                  <div className={styles.line}></div>
                  <p style={{ padding: "10px" }}>
                    <b>1.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t1 !== null
                        ? this.state.school.q_hujjat_t1
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* O‘quvchining tug‘ilganligi haqida guvohnoma (pdf-10Mb oshmagan holatda). */}
                  </p>
                  <p style={{ padding: "10px" }}>
                    <b>2.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t2 !== null
                        ? this.state.school.q_hujjat_t2
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* 2019-2020 o‘quv yilini “4”va “5” baholarga bitirganligini tasdiqlovchi o‘quvchining tabeli. Maktab direktori tomonidan tasdiqlangan bo‘lishi kerak (pdf-10Mb oshmagan holatda). */}
                  </p>
                  <p style={{ padding: "10px" }}>
                    <b>3.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t3 !== null
                        ? this.state.school.q_hujjat_t3
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* 3/4 Rasm (jpg/png/jpeg-formatida). */}
                  </p>
                  <p style={{ color: "darkgray", marginTop: "30px" }}>
                    {this.state.school !== null
                      ? this.state.school.address !== null
                        ? this.state.school.address
                        : "Maktab manzili "
                      : "Maktab manzili "}
                    {/* Toshkent shahar, Yashnabod tumani, Mahtumquli ko’chasi Call-Center: 1206 (Ish vaqti 08:00dan – 20:00gacha) */}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default Qabul;
