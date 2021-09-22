import { Card, List} from 'antd'
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import '../../css/TeacherCss/Davomad.module.css';
export default class Davomad extends Component {
  render() {
    const data = [
      {
        title: 'Dushanba',
        id: 1,
        dars: ['matematika',
          "matematika ",
          "chizmachilik"],
        soat: [1, 2, 3],
        sinf: ['9-A', '6-B', '11-D']
      },
      {
        title: 'Seshanba',
        id: 1,
        dars: ['matematika',
          "matematika ",
          "chizmachilik"],
        soat: [1, 2, 3],
        sinf: ['9-A', '6-B', '11-D']
      },
      {
        title: 'Chorshanba',
        id: 1,
        dars: ['matematika',
          "matematika ",
          "chizmachilik"],
        soat: [1, 2, 3],
        sinf: ['9-A', '6-B', '11-D']
      },
      {
        title: 'Title 4',
        id: 1,
        dars: ['matematika',
          "matematika ",
          "chizmachilik"],
        soat: [1, 2, 3],
        sinf: ['9-A', '6-B', '11-D']
      },
      {
        title: 'Title 5',
        id: 1,
        dars: ['matematika',
          "matematika ",
          "chizmachilik"],
        soat: [1, 2, 3],
        sinf: ['9-A', '6-B', '11-D']
      },
      {
        title: 'Title 6',
        id: 1,
        dars: ['matematika',
          "matematika ",
          "chizmachilik"],
        soat: [1, 2, 3],
        sinf: ['9-A', '6-B', '11-D']
      },
    ];
    return (
      <div style={{ width: "90%", margin: "0 auto" }}>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 4,
          }}
          header={<div>Dars jadvali</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item style={{padding: 0}}>
            <Card title={item.title} style={{ padding: 0 }}>

              {[0, 1, 2, 3].map(i =>
                <List.Item style={{padding: 0}}><Row>
                  <Col lg={'auto'}>{item.soat[i]}</Col>
                  <Col >{item.dars[i]}</Col>
                  <Col >{item.sinf[i]}</Col>
                </Row>
                </List.Item>

              )}

            </Card>
          </List.Item>}
        />
        
      </div>
    )
  }
}