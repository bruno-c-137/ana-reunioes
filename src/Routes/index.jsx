import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LayoutBase from "../layouts/base";
import Geral from '../pages/Geral'

export default function Routes() {
  return (
    <LayoutBase>
      <Router>
        <Switch>
          <Route path='/' exact component={Geral} />
        </Switch>
      </Router>
    </LayoutBase>
  );
};
