import IMGInfo from "../../assets/imgs/Union-(1).svg";
import IMGInfo2 from "../../assets/imgs/Union-(2).svg";
import IMGInfo3 from "../../assets/imgs/Union-(3).svg";
import { useLayout } from "../../contexts/layout";
import "./style.scss";
export default function Menu() {
  const layoutContext = useLayout();
  return (
    <>
      <div
        className="flex-1"
        onClick={() => layoutContext.setmenuOpen(!layoutContext.menuOpen)}
      >
        <div className="IMG-info-r">
          <img src={IMGInfo} alt="" />
        </div>
        <div className="text-sub">
          <b> Informações</b>
        </div>
      </div>
      <div
        className="flex-1"
        onClick={() => layoutContext.setmenuOpen2(!layoutContext.menuOpen2)}
      >
        <div className="IMG-info-r">
          <img src={IMGInfo2} alt="" />
        </div>
        <div className="text-sub">
          <b> Boletins</b>
        </div>
      </div>
      <div
        className="flex-1"
        onClick={() => layoutContext.setmenuOpen3(!layoutContext.menuOpen3)}
      >
        <div className="IMG-info-r">
          <img src={IMGInfo3} alt="" />
        </div>
        <div className="text-sub">
          <b> Notícias</b>
        </div>
      </div>
    </>
  );
}
