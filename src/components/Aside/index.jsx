import "./style.scss";
export default function Aside() {
  return (
    <aside className="flex-1 aside">
      <div className="flex content">
        <div>
          <button className="margin-b button-content"> Geral</button> <br />
          <button className="margin-b button-content"> Sistemas Hídricos </button>
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
