import React, { Component } from "react";
import ParentCabinet from "./pages/ParentCabinet";
import MaktabHayoti from "./pages/MaktabHayoti";
import BoshSahifa from "./pages/BoshSahifa";
import Qabul from "./pages/Qabul";
import Yangiliklar from "./pages/Yangiliklar";
import MaktabOshxonasi from "./pages/MaktabOshxonasi";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from "./pages/gallery";
import Login from "./pages/Login/Login";
import Alochilar from "./pages/alochilar";
import Yutuqlarimiz from "./pages/yutuqlarimiz";
import NavBar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Error from "./pages/Error";
import Tadbirlar from "./pages/Tadbirlar";
import TeacherCabinet from "./pages/TeacherCabinet";
import Main from "./pages/Rahbar/Main";
import Maktabmamuriyati from "./pages/maktabmamuriyati";
import MaktabTadbirlari from "./pages/MaktabTadbirlari";
import Register from "./pages/Login/Register";
import Global from "./host/Global";
import axios from "axios";
import { url, user } from "./host/Host";
import { FadeLoader } from "react-spinners";
import SelectMap from "./pages/Error";
import Error404 from "./pages/Error404";
export default class App extends Component {
  state = {
    loader: true,
    error: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    // var a = window.location.href.split("/");
    var v = user;

    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        Global.schoolId = res.data.id;
        Global.user = user;
        this.setState({
          loader: false,
        });
        // console.log(Global.user, Global.schoolId);
      })
      .catch((err) => {
        // console.log("scmkscmskcm");
        this.setState({ error: true, loader: false });
      });
  }

  render() {
    return (
      <div style={{ width: "100%", overflowX: "hidden" }}>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : this.state.error ? (
          <SelectMap />
        ) : (
          <BrowserRouter>
            <Switch>
              {/* <Route exact path="/register/">
              <Register />
            </Route> */}
              <Route path="/login">
                <Login />
              </Route>
              {/* <Route path="/cabinet/parents/">
              <ParentCabinet />
            </Route> */}
              <Route path="/cabinet/teacher/bolim/">
                <TeacherCabinet />
              </Route>

              <Route path="/cabinet/teacher/rahbar/">
                <Main />
              </Route>

              <Route exact path="/qabul/">
                <NavBar />
                <Qabul />
                <Footer />
              </Route>

              <Route exact path="/rahbariyat/">
                <NavBar />
                <Maktabmamuriyati />
                <Footer />
              </Route>

              <Route exact path="/yangiliklar/">
                <NavBar />
                <Yangiliklar />
                <Footer />
              </Route>

              <Route exact path="/hayot/">
                <NavBar />
                <MaktabHayoti />
                <Footer />
              </Route>

              <Route exact path="/alochilar/">
                <NavBar />
                <Alochilar />
                <Footer />
              </Route>

              <Route exact path="/gallery/">
                <NavBar />
                <Gallery />
                <Footer />
              </Route>

              <Route exact path="/yutuqlar/">
                <NavBar />
                <Yutuqlarimiz />
                <Footer />
              </Route>

              <Route exact path="/maktaboshxonasi/">
                <NavBar />
                <MaktabOshxonasi />
                <Footer />
              </Route>
              <Route exact path="/tadbirlar/">
                <NavBar />
                <Tadbirlar />
                <Footer />
              </Route>

              <Route exact path="/">
                <BoshSahifa />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          </BrowserRouter>
        )}{" "}
      </div>
    );
  }
}
