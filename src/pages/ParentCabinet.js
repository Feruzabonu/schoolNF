import React, { Component } from 'react'
import HeaderParent from './cabinet/HeaderParent'
import {Col, Row} from 'react-bootstrap'
import Box from './cabinet/Box'
import Yutuqlar from './cabinet/Yutuqlar'
import News from './News'
import Chat from './cabinet/Chat'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Davomad from './cabinet/Davomad'
import Sinfdoshlar from './cabinet/Sinfdoshlar'
import Oqituvchilar from './cabinet/Oqituvchilar'
import Baholar from './cabinet/Baholar'

export default class ParentCabinet extends Component {
    render() {
        return (
            <div>
<BrowserRouter>
            <HeaderParent/>
     
            <Row>
            <Col lg={9} md={12}>

<Switch>
<Route exact path="/cabinet/parents/chat/uz">
    <Chat/>
    </Route>
    <Route exact path="/cabinet/parents/yutuqlar/uz">
    <Yutuqlar/>
    </Route>
    <Route exact path="/cabinet/parents/davomad/uz">
    <Davomad/>
    </Route>
    <Route exact path="/cabinet/parents/baholar/uz">
    <Baholar/>
    </Route>
    <Route exact path="/cabinet/parents/sinfdoshlar/uz">
    <Sinfdoshlar/>
    </Route>
    <Route exact path="/cabinet/parents/oqituvchilar/uz">
    <Oqituvchilar/>
    </Route>
    
    <Route exact path="/cabinet/parents">
    <Box/>
    
    </Route>
    
</Switch>



</Col>
<Col lg={3} md={12} style={{paddingLeft:'0px'}}>
<News/>
</Col>

            </Row>
            </BrowserRouter>
            </div>
        )
    }
}
