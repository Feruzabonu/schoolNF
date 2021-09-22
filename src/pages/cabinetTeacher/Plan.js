import { Card, Table } from 'antd';
import React, { Component } from 'react'


export default class Plan extends Component { 

  render() {
    const columns = [
        {
            title: 'No',
            dataIndex: 'id',
        },
        {
          title: 'Fanlar',
          dataIndex: 'name',
          
        },
        {
          title: 'Yuklama',
          dataIndex: 'yuklama',
        },
        {
          title: 'Sinf',
          dataIndex: 'sinf',
        },
        // {
        //     title: 'Fan reja',
        //     dataIndex: 'batafsil',
        //     render: (text) => <Link to="/cabinet/techer/plan-resourse">{"Batafsil"}</Link>,
        //   },
      ];
      const data = [
        {
          key: '1',
          id: '1',
          name: 'matematika',
          yuklama: '40 soat',
          sinf: '6-sinf',
        },
        {
            key: '2',
            id: '2',
            name: 'matematika',
            yuklama: '60 soat',
            sinf: '7-sinf',
          },
          {
            key: '3',
            id: '3',
            name: 'matematika',
            yuklama: '60 soat',
            sinf: '8-sinf',
          },
          {
            key: '4',
            id: '4',
            name: 'chizmachilik',
            yuklama: '30 soat',
            sinf: '9-sinf',
          },
      ];
      
    return (
      <div style={{width: '90%', margin: "0 auto"}}>
          <Card title="O'quv reja">
          
        <Table
        columns={columns}
        dataSource={data}
      />
         
      </Card>
      </div>
    )
  }
}