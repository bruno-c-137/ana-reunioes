import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import "./style.scss";
export default function LayoutBase({ children }) {
  return (
    <div>
      <div className="display-flex">
        <Aside />
        <div className="container-main">
          <Header />

          <div className="navigation">
            <div>main</div>
          </div>
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
