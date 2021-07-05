import "./style.scss";
import { useLayout } from "../../contexts/layout";
export default function Aside() {
  const layoutContex = useLayout();
  return (
    <aside className={String(layoutContex.navOpen ? "flex-1 aside" : "flex-1 aside aside-dt")}>
      <div className="flex content">
        <div>
          <button className="margin-b button-content">
            Geral 
          </button>
          <br />
          <button className="margin-b button-content">Sistemas Hídricos</button>
          <br />
          <button className="margin-b button-content"> Reuniões </button>
          <br />
          <button className="button-content">
            Sistemas de <br />
            Acompanhamento de <br />
            Reservatórios
          </button>
          <br />
        </div>
      </div>
    </aside>
  );
}
