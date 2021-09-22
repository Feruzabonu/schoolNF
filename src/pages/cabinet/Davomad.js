import React, { Component } from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import style from '../../css/Davomad.module.css'
export default class Davomad extends Component {
  state={
    searchText: '',
    searchedColumn: '',
      davomad:[
        {
            id: '0',
            
            date:'12.08.2021',
            subject:'Biologiya',
            teacher:'Elmurodova Shahnoza',
            para:'3'
          },
          {
            id: '1',
            
            date:'12.08.2021',
            subject:'Biologiya',
            teacher:'Elmurodova Shahnoza',
            para:'3'
          },
        {
          id: '2',
          
          date:'12.08.2021',
          subject:'Biologiya',
          teacher:'Elmurodova Shahnoza',
          para:'3'
        },
        {
          id: '3',
          
          date:'12.08.2021',
          subject:'Biologiya',
          teacher:'Elmurodova Shahnoza',
          para:'3'
        },
        {
          id: '4',
          
          date:'12.08.2021',
          subject:'Jismoniy tarbiya',
          teacher:'Rutamov Farhod',
          para:'3'
        },
      ],

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
              width: '20%',
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
                title: 'Sana',
                dataIndex: 'date',
                key: 'date',
                width: '20%',
                ...this.getColumnSearchProps('date'),
              },
              {
                title: 'Soat',
                dataIndex: 'para',
                key: 'para',
                width: '10%',
                ...this.getColumnSearchProps('para'),
              },
            
          ];
    return (
      <div>
          <Container>
          <Table className={style.tablef} style={{marginTop:'40px', backgroundColor:'white', padding:'10px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} columns={columns} dataSource={this.state.davomad} />
          
          </Container>
           </div>
    );
  }
}
