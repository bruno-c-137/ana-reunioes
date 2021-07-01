import "./style.scss";
import Logo from "../../assets/imgs/logo.png";
export default function Header() {
  return (
    <header className="header-component">
      <div className="flex justify-flex-end margin-t">
        <div className="border-r">
          <div className="logo-text">
            Acompanhamento <br /> de Sistemas Hidrícos
          </div>
        </div>
        <div className="img-logo">
          <div>
            <img src={Logo} alt="" srcset="" />
          </div>
        </div>
      </div>
    </header>
  );
}
