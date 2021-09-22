import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Radio } from 'antd';
import style from '../../css/Baholar.module.css'
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

export default class Baholar extends Component {
    state = {
        sinf: '9',
        searchText: '',
    searchedColumn: '',
chorak:'4',
davomad:[
    {
        id: '0',
        subject:'Biologiya',
        teacher:'Elmurodova Shahnoza',
        rate:'5'
      },
      {
        id: '1',
        subject:'Matematika',
        teacher:'Elmurodova Dilnoza',
        rate:'5'
      },
    {
      id: '2',
      subject:'Fizika',
      teacher:'Elmurodova Shahnoza',
      rate:'5'
    },
    {
        id: '3',
        subject:'Ona tili',
        teacher:'Elmurodova Shahnoza',
        rate:'4'
      },
      {
        id: '4',
        subject:'Jismoniy tarbiya',
        teacher:'Rutamov Farhod',
        rate:'4'
      },
      {
        id: '5',
        subject:'Kimyo',
        teacher:'Elmurodova Shahnoza',
        rate:'3'
      },
      {
        id: '6',
        subject:'Adabiyot',
        teacher:'Rutamov Farhod',
        rate:'5'
      },
      {
        id: '7',
        subject:'Ingliz tili',
        teacher:'Elmurodova Shahnoza',
        rate:'4'
      },
      {
        id: '8',
        subject:'Rus tili',
        teacher:'Rutamov Farhod',
        rate:'3'
      },
      
    ],


      };
      
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
    
      handleSinf = e => {
        this.setState({ sinf: e.target.value });
      };
      handleChorak = e => {
        this.setState({ chorak: e.target.value });
      };
 
    render() {
        const columns = [
            {
              title: 'T/R',
              dataIndex: 'id',
              key: 'id',
              width: '10%',
              ...this.getColumnSearchProps('id'),
              render:(id)=>{return(Number(id)+1)}
            },
            {
              title: 'Fan',
              dataIndex: 'subject',
              key: 'subject',
              width: '30%',
              ...this.getColumnSearchProps('subject'),
            },
            {
              title: 'O\'qituvchi',
              dataIndex: 'teacher',
              key: 'teacher',
              ...this.getColumnSearchProps('teacher'),
              sorter: (a, b) => a.teacher.length - b.teacher.length,
              sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'Baho',
                dataIndex: 'rate',
                key: 'rate',
                width: '10%',
                ...this.getColumnSearchProps('rate'),
              },
             
          ];
    return (
      <div>
          <Container style={{marginTop:'50px'}}>
          <div  style={{ display:'flex',justifyContent:'center',}}>
          <Radio.Group style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}} value={this.state.sinf} onChange={this.handleSinf}>/
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="1">1 - sinf</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="2">2 - sinf</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="3">3 - sinf</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="4">4 - sinf</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="5">5 - sinf</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="6">6 - sinf</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="7">7 - sinf</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="8">8 - sinf</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="9">9 - sinf</Radio.Button>
         
        </Radio.Group>
        </div>
        <div  style={{ display:'flex',justifyContent:'center', marginTop:'50px'}}>
          <Radio.Group style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}} value={this.state.chorak} onChange={this.handleChorak}>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="1">1 - chorak</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="2">2 - chorak</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="3">3 - chorak</Radio.Button>
          <Radio.Button style={{fontSize:'17px', padding:'10px, 20px'}} value="4">4 - chorak</Radio.Button>
          
        </Radio.Group>
        </div><br/><br/>
          <div style={{ display:'flex',justifyContent:'center', flexWrap:'wrap'}}>
              <h4 className={style.text}>{this.state.sinf} - sinf {this.state.chorak} - chorakning yakuniy baholari</h4>
              
              <Table className={style.tablef} style={{marginTop:'40px', borderRadius:'20px', width:'90%', backgroundColor:'white', padding:'10px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} columns={columns} dataSource={this.state.davomad} />
        
          </div>
          </Container>
          
          
</div>
    );
  }
}
