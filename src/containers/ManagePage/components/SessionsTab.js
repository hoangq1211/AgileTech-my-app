import { EditOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Table, Button, Input } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../index.css";

const iconStyle = {
  marginLeft: "50px",
  cursor: "pointer",
};

const dataSource = [
  {
    key: "1",
    session_name: "Testing sesion",
    date: "5/16/2021 10:00",
  },
  {
    key: "2",
    session_name: "Testing sesion",
    date: "5/16/2021",
  },
  {
    key: "3",
    session_name: "Testing sesion",
    date: "5/16/2021",
  },
  {
    key: "4",
    session_name: "Testing sesion",
    date: "5/16/2021",
  },
  {
    key: "5",
    session_name: "Testing sesion",
    date: "5/16/2021",
  },
  {
    key: "6",
    session_name: "Testing sesion",
    date: "5/16/2021",
  },
];

const columns = [
  {
    title: "Session Name",
    dataIndex: "session_name",
    key: "session_name",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    align: 'center',
    className: 'custom-date-col',
    sorter: (a, b) => a.date - b.age,
  },
  {
    title: "",
    dataIndex: "address",
    key: "address",
    render: () => (
      <>
        <EditOutlined style={iconStyle} />
      </>
    ),
  },
];
class SessionsTab extends Component {
  state = {
    selectedRowKeys: [],
  };

  onSelectChange = (selectedRowKey) => {
    this.setState({ selectedRowKeys: selectedRowKey });
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
              <h2 className="left-title-container">Sessions</h2>
              <div className="right-title-container">
                <div className="custom-button">
                  <Button>Create</Button>
                </div>
                <div className="custom-button">
                  <Button>Export</Button>
                </div>
                <input className="custom-input" placeholder="Search" />
              </div>
            </Row>
          </Col>
        </Row>
        <br />

        <Table
          className="custom-table"
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
        />
      </div>
    );
  }
}

export default SessionsTab;
