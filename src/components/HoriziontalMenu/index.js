import { Menu } from "antd";
import { Link } from "react-router-dom";

import ROUTER from "../../config/router";
import "./index.css";

const items = [
  {
    key: "sessions",
    label: 
    (
      <Link to="/sessions">
        <span className="horiziontal-menu-content">SESSIONS</span>
      </Link>
    ),
  },
  {
    key: "manage",
    label: 
    (
      <Link to="/manage">
        <span className="horiziontal-menu-content">MANAGE</span>
      </Link>
    ),
  },
  {
    key: "user-admin",
    label: 
    (
      <Link to="/user-admin">
        <span className="horiziontal-menu-content">USER-ADMIN</span>
      </Link>
    ),
  },
];

function HorizontalMenu() {
  const currentRoute = window.location.pathname;

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
      />
    </>
  );
}

export default HorizontalMenu;
