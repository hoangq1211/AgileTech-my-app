import { EditOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Table, Button, Input, Divider } from "antd";
import React, { Component } from "react";

import "../index.css";

const buttonStyle = {
  background: "lightgray",
  width: "30%",
  marginRight: "15px",
  fontWeight: "700",
};

const contents1 = [
  {
    title: "Comapany Name:",
    content: "123",
  },
  {
    title: "Description:",
    content: "123",
  },
  {
    title: "Version Number:",
    content: "123",
  },
  {
    title: "Version Date:",
    content: "123",
  },
  {
    title: "Deployment Date:",
    content: "123",
  },
  {
    title: "Hash:",
    content: "123",
  },
];

class SessionsTab extends Component {
  state = {};

  renderAllContent = (contents) => {
    contents.map((item) => this.renderSingleContent(item.title, item.content));
  };

  renderSingleContent = (title, content) => {
    return (
      <Row className="ai-model-tab-content">
        <Col span={6}>{title}</Col>
        <Col span={18}>{content}</Col>
      </Row>
    );
  };

  render() {
    return (
      <div className="content-container">
        <Row>
          <Col span={24}>
            <Row>
              <h2 className="left-title-container">AI Model</h2>
              <div
                className="right-title-container"
                style={{ flexDirection: "row-reverse" }}
              >
                <div className="custom-button">
                  <Button>Export</Button>
                </div>
                <div className="custom-button">
                  <Button>Upload</Button>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        {contents1.map((item) =>
          this.renderSingleContent(item.title, item.content)
        )}
        
        <div className="divider" />
        <Row>
          <Col span={24}>
            <Row>
              <h2 className="left-title-container">Model Usage Statistics</h2>
            </Row>
          </Col>
        </Row>
        {contents1.map((item) =>
          this.renderSingleContent(item.title, item.content)
        )}
      </div>
    );
  }
}

export default SessionsTab;
