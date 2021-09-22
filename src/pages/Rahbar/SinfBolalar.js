import React, { Component } from 'react';
import style from '../../css/SinfBolalar.module.css'
import { Table, Input, Button, Space , Modal} from 'antd';
import {Form} from 'react-bootstrap'
import Highlighter from 'react-highlight-words';
import { SearchOutlined, FormOutlined } from '@ant-design/icons';
import { faKickstarter } from '@fortawesome/free-brands-svg-icons';
export default class SinfBolalar extends Component {
  state={
    show:false,
    searchText: '',
    searchedColumn: '',
      students:[
        {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
          {
            id: '0',
            fullname: "Ismoilov Rahmon Farhod o'g'li",
            date:'12.03.2000',
            address: 'Imom-Buxoriy mahallasi Ibn-Sino ko\'chasi 7-uy',
  father:"Rahmonov Zohid Ismoilovich",
  fatherNumber:'+998930820372',
  mother:"Qilichova Mamlakat Arslonova",
  motherNumber:'+998914191479',
  image:'https://www.nicepng.com/png/full/256-2566431_inspire-lifelong-courage-to-cultivate-character-child-student.png',
  
  
          },
        
      ], 
      load:false,
  }

  openModal=()=>{
  this.setState({
      show:true
    })
  }
  
  handleClose=()=>{
    this.setState({
      show:false
    })
  }
  

  componentDidMount(){
      var students=this.state.students
      students.map((item, key)=>{
          item.number=key+1
      })
  }
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

    render() {

        const columns = [
            {
                title: 'T/R',
                dataIndex: 'number',
                key: 'number',
              
               
              },
              {
                title: 'Rasm',
                dataIndex: 'image',
                key: 'image',
                width: '10%',
                render:(image)=>{
                    return(
                        <img src={image} style={{width:'70px', height:'80px', borderRadius:'0%'}}/>
                    )
                }
               
              },
            {
              title: 'FIO',
              dataIndex: 'fullname',
              key: 'fullname',
              ...this.getColumnSearchProps('fullname'),
              sorter: (a, b) => a.fullname.length - b.fullname.length,
              sortDirections: ['descend', 'ascend'],
            },
            {
              title: "Tug'ilgan sana",
              dataIndex: 'date',
              key: 'date',
              ...this.getColumnSearchProps('date'),
            
            },
            {
              title: "Yashash manzili",
              dataIndex: 'address',
              key: 'address',
              ...this.getColumnSearchProps('address'),
            
            },
              {
                title: "Otasi",
                dataIndex: 'father',
                key: 'father',
                ...this.getColumnSearchProps('father'),
              
              },
              {
                title: "Otasining nomeri",
                dataIndex: 'fatherNumber',
                key: 'fatherNumber',
                ...this.getColumnSearchProps('fatherNumber'),
              
              },
              {
                title: "Onasi",
                dataIndex: 'mother',
                key: 'mother',
            
                ...this.getColumnSearchProps('mother'),
              
              },
              {
                title: "Onasining nomeri",
                dataIndex: 'motherNumber',
                key: 'motherNumber',
                ...this.getColumnSearchProps('motherNumber'),
              
              },
              {
                title: 'Amallar',
                dataIndex: 'id',
                key: 'id',
                width: '10%',
                render:(id)=>{
                    return(
                        <div class="wrapper">
                      <div>
                        <div class="icon twitter">
                          <div class="tooltip">O'zgartirish</div>
                          <span><i class="fas fa-edit"></i></span>
                        </div>
                        <div class="icon instagram">
                          <div class="tooltip">O'chirish</div>
                          <span><i class="fas fa-trash"></i></span>
                        </div>
                        </div>
                        <div>
                        <div class="icon facebook">
                          <div class="tooltip">Baholar</div>
                          <span><i class="fas fa-star"></i></span>
                        </div> 
                        <div class="icon youtube">
    <div class="tooltip">Xabar</div>
    <span><i class="fas fa-envelope"></i></span>
  </div>
                        </div>
                      </div>
                    )
                }
               
              },

            ];
    return (
      <div> 
          <Table columns={columns} dataSource={this.state.students} bordered="true"/>
          <Button onClick={this.openModal} style={{position:'absolute', top:'15px', right:'20px', backgroundColor:'#001529', borderColor:'#001529'}} type="primary" icon={<FormOutlined style={{transform:'translate(0px, -2px)'}}/>}  >O'quvchi qo'shish</Button>
          <Modal title="O'quvchi qo'shish" visible={this.state.show} onOk={this.handleClose} style={{top:'0px'}} onCancel={this.handleClose}>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicfullname">
    <Form.Label>O'quvchining FIO si</Form.Label>
    <Form.Control type="text" placeholder="FIO" />
  </Form.Group><hr/>

  <Form.Group className="mb-3" controlId="formBasicdate">
    <Form.Label>O'quvchining tug'ilgan sanasi</Form.Label>
    <Form.Control type="date" placeholder="Sana" />
  </Form.Group><hr/>

  <Form.Group className="mb-3" controlId="formBasicfather">
    <Form.Label>O'quvchining otasining FIO</Form.Label>
    <Form.Control type="text" placeholder="Otasining FIO" />
  </Form.Group><hr/>
  
  <Form.Group className="mb-3" controlId="formBasicfatherNumber">
    <Form.Label>O'quvchining otasining telefon nomeri</Form.Label>
    <Form.Control type="text" placeholder="Telefon nomer" />
  </Form.Group><hr/>

  <Form.Group className="mb-3" controlId="formBasicmother">
    <Form.Label>O'quvchining onasining FIO</Form.Label>
    <Form.Control type="text" placeholder="Onasining FIO" />
  </Form.Group><hr/>
  
  <Form.Group className="mb-3" controlId="formBasicmotherNumber">
    <Form.Label>O'quvchining onasining telefon nomeri</Form.Label>
    <Form.Control type="text" placeholder="Telefon nomer" />
  </Form.Group>
</Form>
      </Modal>
      </div>
    );
  }
}
