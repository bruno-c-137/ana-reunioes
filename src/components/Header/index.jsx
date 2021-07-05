import "./style.scss";
import { useLayout } from "../../contexts/layout";
import Sand from "../../assets/imgs/sand.svg";
export default function Header() {
  const layoutContext = useLayout();

  return (
    <header className="header-component">
      <div className="flex justify-flex-end margin-t">
        <div>
          <div className="logo-text">
            Acompanhamento <br /> de Sistemas Hidrícos
          </div>
        </div>
        <div className="img-logo border-l">
          <div className="div-img-logo"></div>
        </div>
        <div className="hidden-md">
          <button
            className="button-menu"
            onClick={() => layoutContext.setnavOpen(!layoutContext.navOpen)}
          >
            <img src={Sand} alt="" srcset="" />
          </button>
        </div>
      </div>
    </header>
  );
}
