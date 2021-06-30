import { BrowserRouter, Router, Switch } from "react-router-dom";
import LayoutBase from "../layouts/base";
import Geral from '../pages/Geral'

const Routes = () => {
  return (
    <LayoutBase>
      <BrowserRouter>
        <Switch>
            <Routes path='/' exact component={Geral} />

        </Switch>
      </BrowserRouter>
    </LayoutBase>
  );
};
export default Routes;
