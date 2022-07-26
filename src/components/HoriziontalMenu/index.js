import { Menu } from "antd";
import { Link } from "react-router-dom";

import ROUTER from "../../config/router";
import "./index.css";

const items = [
  {
    key: "sessions",
    to: ROUTER.SESSIONS,
    content: "SESSIONS",
  },
  {
    key: "manage",
    to: ROUTER.MANAGE,
    content: "MANAGE",
  },
  {
    key: "user-admin",
    to: ROUTER.USER_ADMIN,
    content: "USER-ADMIN",
  },
];

function HorizontalMenu() {
  const renderMenuItem = ({ key, to, content }) => (
    <Menu.Item key={key} className="horiziontal-menu-content-container">
      <Link to={to}>
        <span className="horiziontal-menu-content">{content}</span>
      </Link>
    </Menu.Item>
  );

  const currentRoute = window.location.pathname;
  console.log("xxx currentRoute", currentRoute.slice(1));

  return (
    <>
      <Menu
        className="horiziontal-menu-container"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[
          currentRoute !== "/" ? currentRoute.slice(1) : "manage",
        ]}
        items={items}
      >
        {items.map((item) => renderMenuItem(item))}
      </Menu>
    </>
  );
}

export default HorizontalMenu;
