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
          <div className="conteiner">
            <div className="display-flex flex-direction-c">
              <Header />

              <div className="flex-12 margin-content-b">{children}</div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
