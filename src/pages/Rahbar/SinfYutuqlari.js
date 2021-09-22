import React, { Component } from 'react';
import style from '../../css/SinfBolalar.module.css'
import { Table, Input, Button, Space , Modal} from 'antd';
import {Form} from 'react-bootstrap'
import Highlighter from 'react-highlight-words';
import { SearchOutlined, FormOutlined } from '@ant-design/icons';

export default class SinfYutuqlari extends Component { state={
    show:false,
    searchText: '',
    searchedColumn: '',
      students:[
        {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
          },  {
            id: '0',
            fullname: "Ismoilov Rahmon Zohid o'g'li",
            date:'12.03.2000',
            nameT:"Yuksak ma'naviyatli avlod",
  storyT:'Tanlovda "Qonunshunos" yo\'nalishida birinchi o\'rinni egalladi',
  rateT:"1-o'rin",
  image:'https://starjournalnow.com/wp-content/uploads/2019/01/01-30-19-Community-NHS-stand-aloneW-660x400.jpg',
  
  
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
                width: '15%',
                render:(image)=>{
                    return(
                        <img src={image} style={{width:'120px', height:'90px', borderRadius:'0%'}}/>
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
                title: "O'rin",
                dataIndex: 'rateT',
                key: 'rateT',
            
                ...this.getColumnSearchProps('rateT'),
              
              },
              
            {
                title: "Erishilgan sana",
                dataIndex: 'date',
                key: 'date',
                ...this.getColumnSearchProps('date'),
              
              },
              {
                title: "Yutuqning nomi",
                dataIndex: 'nameT',
                key: 'nameT',
                ...this.getColumnSearchProps('nameT'),
              
              },
              {
                title: "Yutuq haqida",
                dataIndex: 'storyT',
                key: 'storyT',
                ...this.getColumnSearchProps('storyT'),
              
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
          <Button onClick={this.openModal} style={{position:'absolute', top:'15px', right:'20px', backgroundColor:'#001529', borderColor:'#001529'}} type="primary" icon={<FormOutlined style={{transform:'translate(0px, -2px)'}}/>}  >Yutuq qo'shish</Button>
          <Modal title="O'quvchi qo'shish" visible={this.state.show} onOk={this.handleClose} style={{top:'0px'}} onCancel={this.handleClose}>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicfullname">
    <Form.Label>O'quvchining FIO si</Form.Label>
    <Form.Control type="text" placeholder="FIO" />
  </Form.Group><hr/>
  
  <Form.Group className="mb-3" controlId="formBasicrateT">
    <Form.Label>O'rin</Form.Label>
    <Form.Control type="text" placeholder="Yutuq" />
  </Form.Group><hr/>
  
  <Form.Group className="mb-3" controlId="formBasicdate">
    <Form.Label>Yutuqning erishilgan sanasi</Form.Label>
    <Form.Control type="date" placeholder="Sana" />
  </Form.Group><hr/>

  <Form.Group className="mb-3" controlId="formBasicnameT">
    <Form.Label>Yutuqning yoki tanlovning nomi</Form.Label>
    <Form.Control type="text" placeholder="Yutuqning nomi" />
  </Form.Group><hr/>
  
  <Form.Group className="mb-3" controlId="formBasicstoryT">
    <Form.Label>Yutuq haqida</Form.Label>
    <Form.Control type="text" placeholder="Telefon nomer" />
  </Form.Group>

</Form>  
      </Modal>      </div>
    );
  }

}
