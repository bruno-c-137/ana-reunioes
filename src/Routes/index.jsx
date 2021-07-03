import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import LayoutBase from "../layouts/base";
import Geral from "../pages/Geral";
import SistemasHidricos from "../pages/Sistemas Hídricos";
import Reunioes from "../pages/Reuniões";
import Noticias from "../pages/Noticias";
import ReunioesPassadas from "../pages/Reunioes-Passadas";

export default function Routes() {
  return (
    <LayoutBase>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Geral} />
          <Route path="/sistemashidricos" component={SistemasHidricos} />
          <Route path="/reunioes" component={Reunioes} />
          <Route path="/reunioes-passadas" component={ReunioesPassadas} />
          <Route path="/noticias" component={Noticias} />
        </Switch>
      </BrowserRouter>
    </LayoutBase>
  );
}
