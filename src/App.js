import "./App.css";
import { Route, Switch } from "react-router-dom";

import ROUTER from "./config/router";
import ManagePage from "./containers/ManagePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path={ROUTER.HOME} component={ManagePage} />
      </Switch>
    </div>
  );
}

export default App;
