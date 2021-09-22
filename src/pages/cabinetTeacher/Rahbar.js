import { Input, message, Modal, Space, Table } from "antd";
import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Highlighter from "react-highlight-words";
import { createPupil, deletePupils, editPupils, getPupils } from "../../host/Config";
import Global from "../../host/Global";
import ImageDemo from "../ImageDemo";
import { SearchOutlined } from "@ant-design/icons";

export default class Rahbar extends Component {
  state = {
    pupils: [],
    show: false,
    edit: null,
    image: "",
    imageUrl: "",
    pup: {},
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
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
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
    onFilter: (value, record) => (record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ""),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) => (this.state.searchedColumn === dataIndex ? <Highlighter highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }} searchWords={[this.state.searchText]} autoEscape textToHighlight={text ? text.toString() : ""} /> : text),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  getPupils = () => {
    getPupils(Global.classId).then((res) => {
      var pupils = res.data.sort((a, b) => {
        let x = a.full_name.toLowerCase();
        let y = b.full_name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      for (let i = 0; i < pupils.length; i++) {
        pupils[i].key = i + 1;
      }
      this.setState({ pupils: pupils });
    });
  };
  editPupil = (id) => {
    // console.log('sdkskmdsmsdksm')
    getPupils(Global.classId).then((res) => {
      var pupils = {};
      res.data.map((item) => {
        // console.log(item, id)
        if (item.id === id) {
          pupils = item;
        }
      });

      this.setState({ edit: pupils.id, imageUrl: pupils.image, pup: pupils });
    });
    this.openModal();
  };
  deletePupil = (id) => {
    deletePupils(id)
      .then((res) => {
        this.getPupils();
        message.success("Ma'lumot o'chirildi!");
      })
      .catch((err) => message.error("Ma'lumot o'chirilmadi!"));
  };
  savePupil = () => {
    var data = {
      full_name: document.getElementById("fullname").value,
      birth_day: document.getElementById("birthday").value,
      clas: Global.classId,
      father_name: document.getElementById("fathername").value,
      father_tel: document.getElementById("fathertel").value,
      mother_name: document.getElementById("mothername").value,
      mother_tel: document.getElementById("mothertel").value,
    };
    let formData = new FormData();
    formData.append("full_name", data.full_name ?? "");
    formData.append("birth_day", data.birth_day ?? null);
    formData.append("clas", data.clas ?? null);
    formData.append("father_name", data.father_name ?? null);
    formData.append("father_tel", data.father_tel ?? null);
    formData.append("mother_name", data.mother_name ?? null);
    formData.append("mother_tel", data.mother_tel ?? null);
    if (this.state.edit !== null) {
      if (this.state.image !== "") {
        formData.append("image", this.state.image ?? null);

        editPupils(formData, this.state.edit)
          .then((res) => {
            this.getPupils();
            message.success("Ma'lumot o'zgartirildi!");
          })
          .catch((err) => message.error("Ma'lumot o'zgartirilmadi!"));
      }
      editPupils(data, this.state.edit)
        .then((res) => {
          this.getPupils();
          this.handleCancel();

          message.success("Ma'lumot o'zgartirildi!");
        })
        .catch((err) => message.error("Ma'lumot o'zgartirilmadi!"));
    } else {
      formData.append("image", this.state.image ?? null);

      createPupil(formData)
        .then((res) => {
          this.getPupils();
          message.success("Ma'lumot qo'shildi!");
          this.handleCancel();
        })
        .catch((err) => message.error("Ma'lumot qo'shilmadi!"));
    }
  };
  openModal = () => {
    this.setState({ show: true });
  };

  changeInput = (e) => {
    var a = this.state.pup;
    a[`${e.target.name}`] = e.target.value;
    this.setState({
      pup: a,
    });
  };
  handleCancel = () => {
    this.setState({ pup: {}, show: false, edit: null, imageUrl: "", image: "" });
    // document.getElementById("fullname").value = "";
    // document.getElementById("birthday").value = "";
    // document.getElementById("rasmlar").value = "";
    // document.getElementById("fathername").value = "";
    // document.getElementById("fathertel").value = "";
    // document.getElementById("mothername").value = "";
    // document.getElementById("mothertel").value = "";
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  componentDidMount() {
    this.getPupils();
  }
  render() {
    const columns = [
      {
        title: "T/r",
        dataIndex: "key",
        key: "key",

        width: 50,
      },
      {
        title: "Rasm",
        dataIndex: "image",
        key: "image",
        width: "10%",
        render: (image) => {
          return <img src={image} style={{ width: "100%", borderRadius: "0%" }} alt="" />;
        },
      },
      {
        title: "F.I.Sh.",
        dataIndex: "full_name",
        key: "full_name",

        ...this.getColumnSearchProps("full_name"),
      },
      {
        title: "Tug'ilgan kun",
        dataIndex: "birth_day",
        key: "birth_day",
      },
      {
        title: "Otasi",
        dataIndex: "father_name",
        key: "father_name",
        ...this.getColumnSearchProps("father_name"),
      },
      {
        title: "Otasining telefon raqami",
        dataIndex: "father_tel",
        key: "father_tel",
        ...this.getColumnSearchProps("father_tel"),
      },
      {
        title: "Onasi",
        dataIndex: "mother_name",
        key: "mother_name",
        ...this.getColumnSearchProps("mother_name"),
      },
      {
        title: "Onasining telefon raqami",
        dataIndex: "mother_tel",
        key: "mother_tel",
        ...this.getColumnSearchProps("mother_tel"),
      },
      {
        title: "Amallar",
        dataIndex: "id",
        key: "id",
        width: "10%",
        fixed: "right",
        render: (id) => {
          return (
            <div className="wrapper">
              <div>
                <div style={{ marginLeft: "20px" }} onClick={() => this.editPupil(id)} className="icon twitter">
                  <div className="tooltip">O'zgartirish</div>
                  <span>
                    <i className="fas fa-edit"></i>
                  </span>
                </div>
                <div style={{ marginLeft: "20px" }} onClick={() => this.deletePupil(id)} className="icon instagram">
                  <div className="tooltip">O'chirish</div>
                  <span>
                    <i className="fas fa-trash"></i>
                  </span>
                </div>
              </div>
              {/* <div>
                 <div className="icon facebook">
                  <div className="tooltip">Baholar</div>
                  <span><i className="fas fa-star"></i></span>
                </div> 
                <div className="icon youtube">
<div className="tooltip">Xabar</div>
<span><i className="fas fa-envelope"></i></span>
</div>
                </div> */}
            </div>
          );
        },
      },
    ];

    return Global.teacherId !== null ? (
      <div>
        <Container>
          <Button variant="primary" style={{ margin: "20px 0" }} onClick={this.openModal}>
            O'quvchi qo'shish
          </Button>
          {this.state.pupils !== [] ? <Table columns={columns} dataSource={this.state.pupils} size="small" scroll={{ x: 1366, y: 600 }} bordered="true" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "5px", width: "100%" }} /> : ""}
          <Modal title="O'quvchi yaratish" visible={this.state.show} onCancel={this.handleCancel} footer={false}>
            <Form>
              <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>O'quvchining ism familiya ochistvasi</Form.Label>
                <Form.Control value={!this.state.pup.full_name ? "" : this.state.pup.full_name} name="full_name" onChange={(e) => this.changeInput(e)} placeholder="F.I.O" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="birthday">
                <Form.Label>Tug'ilgan kun</Form.Label>
                <Form.Control value={!this.state.pup.birth_day ? "" : this.state.pup.birth_day} name="birth_day" onChange={(e) => this.changeInput(e)} type="date" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rasm</Form.Label>
                <Input type="file" id="rasmlar" required={this.state.edit === null ? true : false} style={{ marginBottom: "20px" }} onChange={this.customRequest} />
                {this.state.image === "" && this.state.imageUrl !== "" ? ImageDemo(this.state.imageUrl) : ""}
              </Form.Group>
              <br />

              <Form.Group className="mb-3" controlId="fathername">
                <Form.Label>Otasining ism familiya ochistva</Form.Label>
                <Form.Control value={!this.state.pup.father_name ? "" : this.state.pup.father_name} name="father_name" onChange={(e) => this.changeInput(e)} placeholder="F.I.O" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="fathertel">
                <Form.Label>Otasining telefon raqami</Form.Label>
                <Form.Control value={!this.state.pup.father_tel ? "" : this.state.pup.father_tel} name="father_tel" onChange={(e) => this.changeInput(e)} placeholder="Otasining telefon raqami" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mothername">
                <Form.Label>Onasining ism familiya ochistva</Form.Label>
                <Form.Control value={!this.state.pup.mother_name ? "" : this.state.pup.mother_name} name="mother_name" onChange={(e) => this.changeInput(e)} placeholder="F.I.O" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mothertel">
                <Form.Label>Onasining telefon raqami</Form.Label>
                <Form.Control value={!this.state.pup.mother_tel ? "" : this.state.pup.mother_tel} name="mother_tel" onChange={(e) => this.changeInput(e)} placeholder="Onasining telefon raqami" />
              </Form.Group>

              <Button variant="danger" style={{ marginRight: "10px" }} onClick={this.handleCancel}>
                Bekor qilish
              </Button>
              <Button variant="primary" onClick={this.savePupil}>
                Saqlash
              </Button>
            </Form>
          </Modal>
        </Container>
      </div>
    ) : (
      (window.location.href = "/")
    );
  }
}
