import "./App.css";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import HorizontalMenu from "./components/HoriziontalMenu";
import ROUTER from "./config/router";
import ManagePage from "./containers/ManagePage";
import SessionsPage from "./containers/SessionsPage";
import UserAdminPage from "./containers/UserAdminPage";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout className="layout">
      <Header>
        <div className="log-out-button">Logout</div>
        <HorizontalMenu />
      </Header>
      <Content style={{ padding: "5px 0px" }}>
        <Routes>
          <Route exact path={ROUTER.HOME} element={<ManagePage />} />
          <Route exact path={ROUTER.MANAGE} element={<ManagePage />} />
          <Route exact path={ROUTER.SESSIONS} element={<SessionsPage />} />
          <Route exact path={ROUTER.USER_ADMIN} element={<UserAdminPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
