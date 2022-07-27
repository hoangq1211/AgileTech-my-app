import { Menu, Layout } from "antd";

import "../index.css";

const items = (selectTab) => [
  {
    key: "sessions",
    label: 
    (
      <a onClick={() => selectTab("sessions")}>
        <span className="vertical-menu-content">Sessions</span>
      </a>
    ),
  },
  {
    key: "threshold_sets",
    label: 
    (
      <a onClick={() => selectTab("threshold_sets")}>
        <span className="vertical-menu-content">Threshold Sets</span>
      </a>
    ),
  },
  {
    key: "questionnaire",
    label: 
    (
      <a onClick={() => selectTab("questionnaire")}>
        <span className="vertical-menu-content">Questionnaire</span>
      </a>
    ),
  },
  {
    key: "ai-model",
    label: 
    (
      <a onClick={() => selectTab("ai-model")}>
        <span className="vertical-menu-content">AI Model</span>
      </a>
    ),
  },
];

const { Sider } = Layout;

function VerticalMenu(props) {

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        className="vertical-menu-container"
        theme="light"
        mode="vertical"
        defaultSelectedKeys={["sessions"]}
        items={items(props.selectTab)}
      />
    </Sider>
  );
}

export default VerticalMenu;
