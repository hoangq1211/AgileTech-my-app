import { EditOutlined } from "@ant-design/icons";
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

class SessionsTab extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    const { onSelectChange, onSelectRow } = this.props;

    return (
      <div className="content-container">
        <Row>
          <Col span={24}>
            <Row>
              <h2 className="left-title-container">Sessions</h2>
              <div className="right-title-container">
                <Button style={buttonStyle}>Create</Button>
                <Button style={buttonStyle}>Export</Button>
                <input className="custom-input" placeholder="Search" />
              </div>
            </Row>
          </Col>
        </Row>
        <table className="table">
          <tr>
            <th>
              <input type="checkbox" name="vehicle1" />
            </th>
            <th>Sessions Name</th>
            <th>Date</th>
            <th />
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Session</td>
            <td>5/16/2021 10:00</td>
            <td>
              <EditOutlined style={iconStyle} />
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Session</td>
            <td>5/16/2021 10:00</td>
            <td>
              <EditOutlined style={iconStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Session</td>
            <td>5/16/2021 10:00</td>
            <td>
              <EditOutlined style={iconStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Session</td>
            <td>5/16/2021 10:00</td>
            <td>
              <EditOutlined style={iconStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Session</td>
            <td>5/16/2021 10:00</td>
            <td>
              <EditOutlined style={iconStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Session</td>
            <td>5/16/2021 10:00</td>
            <td>
              <EditOutlined style={iconStyle} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default SessionsTab;
