import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Table, Button, Input } from "antd";
import React, { Component } from "react";

import "../index.css";

const buttonStyle = {
  background: "lightgray",
  width: "30%",
  marginRight: "15px",
  fontWeight: "700",
};

const iconStyle = {
  marginLeft: "50px",
  cursor: "pointer",
};

const dataSource = [
  {
    key: "1",
    questionnaire: "Testing questionnaire",
  },
  {
    key: "2",
    questionnaire: "Testing questionnaire",
  },
  {
    key: "3",
    questionnaire: "Testing questionnaire",
  },
  {
    key: "4",
    questionnaire: "Testing questionnaire",
  },
  {
    key: "5",
    questionnaire: "Testing questionnaire",
  },
  {
    key: "6",
    questionnaire: "Testing questionnaire",
  },
];

const columns = [
  {
    title: "Questionnaire",
    dataIndex: "questionnaire",
    key: "questionnaire",
  },
  {
    title: "",
    dataIndex: "address",
    key: "address",
    render: () => (
      <>
        <EditOutlined style={iconStyle} />
        <DeleteOutlined style={iconStyle} />
      </>
    ),
  },
];

class SessionsTab extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedRowKeys: [],
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className="content-container">
        <Row>
          <Col span={24}>
            <Row>
              <h2 className="left-title-container">Questionnaire</h2>
              <div
                className="right-title-container"
                style={{ flexDirection: "row-reverse" }}
              >
                <input className="custom-input" placeholder="Search" />
                <Button style={buttonStyle}>Create</Button>
              </div>
            </Row>
          </Col>
        </Row>
        <br />
        <Table
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
        />
      </div>
    );
  }
}

export default SessionsTab;
