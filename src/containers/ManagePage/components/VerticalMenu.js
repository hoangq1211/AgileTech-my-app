import { Menu, Layout } from "antd";

import "../index.css";

const items = [
  {
    key: "sessions",
    content: "Sessions",
  },
  {
    key: "threshold_sets",
    content: "Threshold Sets",
  },
  {
    key: "questionnaire",
    content: "Questionnaire",
  },
  {
    key: "ai-model",
    content: "AI Model",
  },
];

const { Sider } = Layout;

function VerticalMenu(props) {
  const renderMenuItem = ({ key, content }) => (
    <Menu.Item key={key} className="vertical-menu-content-container">
      <a onClick={() => props.selectTab(key)}>
        <span className="vertical-menu-content">{content}</span>
      </a>
    </Menu.Item>
  );

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        className="vertical-menu-container"
        theme="light"
        mode="vertical"
        defaultSelectedKeys={["sessions"]}
        items={items}
      >
        {items.map((item) => renderMenuItem(item))}
      </Menu>
    </Sider>
  );
}

export default VerticalMenu;
