import "./assets/sass/main.scss";
import { ProvideLayout } from "./contexts/layout";
import Routes from "./Routes";

export default function App() {
  return (
    <ProvideLayout>
      <Routes />
    </ProvideLayout>
  );
}
