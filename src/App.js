import './App.css';
import { Route, Switch } from 'react-router-dom';
import ManagePage from './containers/ManagePage';


import ROUTER from './config/router';


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
