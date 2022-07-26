import { Layout } from "antd";
import React, { Component } from "react";

import VerticalMenu from "./components/VerticalMenu";
import "./index.css";
import SessionsTab from "./components/SessionsTab";
import AiModelTab from "./components/AiModelTab";
import Questionnaire from "./components/Questionnaire";

import { ConsoleSqlOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
class ManagePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    curTab: "sessions",
  };

  selectTab = (tab) => {
    this.setState({ curTab: tab });
  };

  renderTab = () => {
    switch (this.state.curTab) {
      case "sessions":
        return <SessionsTab />;
      case "ai-model":
        return <AiModelTab />;
      case "questionnaire":
        return <Questionnaire />;
    }
  };

  render() {
    return (
      <Layout className="layout">
        <Header style={{ paddingRight: "0px" }}>
          <div className="tab-menu-container">
            <div className="tab-menu-title">MANAGE</div>
            <VerticalMenu selectTab={this.selectTab} />
          </div>
        </Header>
        <Content>{this.renderTab()}</Content>
      </Layout>
    );
  }
}

export default ManagePage;
