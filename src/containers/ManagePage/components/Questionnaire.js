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

class SessionsTab extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
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
        <table className="table">
          <tr>
            <th>
              <input type="checkbox" name="vehicle1" />
            </th>
            <th>Questionnaire</th>
            <th />
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Questionnaire</td>
            <td>
              <EditOutlined style={iconStyle} />
              <DeleteOutlined style={iconStyle} />
            </td>
          </tr>

          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Questionnaire</td>
            <td>
              <EditOutlined style={iconStyle} />
              <DeleteOutlined style={iconStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Questionnaire</td>
            <td>
              <EditOutlined style={iconStyle} />
              <DeleteOutlined style={iconStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Questionnaire</td>
            <td>
              <EditOutlined style={iconStyle} />
              <DeleteOutlined style={iconStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Questionnaire</td>
            <td>
              <EditOutlined style={iconStyle} />
              <DeleteOutlined style={iconStyle} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="vehicle1" />
            </td>
            <td>Testing Questionnaire</td>
            <td>
              <EditOutlined style={iconStyle} />
              <DeleteOutlined style={iconStyle} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default SessionsTab;
