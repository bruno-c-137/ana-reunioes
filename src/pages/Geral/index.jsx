import IMGlink from "../../assets/imgs/link-externo.svg";
import "./style.scss";
export default function Geral() {
  return (
    <>
      <h1 className="text-titulo">
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
      </h1>
      <div className="flex">
        <div className="flex-2 padding-r">
          <div className="border-b">
            <div className="margin-b">
              <h1 className="titulo-content">Acesse as reuniões</h1>
              <p className="text-sub">
                Acompanhe as reuniões das Salas de Crise ao vivo, pelo Youtube.
              </p>
            </div>
          </div>
          <div>
            <div className="flex margin-t">
              <div className="margin-r">
                <div className="bloco-content">
                  <p className="data-content">
                    <span className="data">
                      <b> 15/01</b>
                    </span>
                    <br />
                    SEG
                  </p>
                </div>
              </div>
              <div>
                <h3 className="titulo-h3">
                  1ª reunião em 2021 da Sala de Crise da Região Sul
                </h3>
                <p className="titulo-h3">Horário: 10h</p>
                <div className="flex">
                <div className="text-link">Acessar</div>
                <div>
                  <img src={IMGlink} alt="" srcset="" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="titulo-content">Acompanhe os sistemas hídricos</h1>
          <p className="text-sub">
            Escolha o Sistema Hídrico que você quer acompanhar
          </p>
          <div className="flex">
            <button className="button margin-r">Paraíba do Sul</button>
            <button className="button">Sistema Cantareira</button>
          </div>
          <div className="flex">
            <button className="button margin-r">São Francisco</button>
            <button className="button">Nordeste e Semiárido</button>
          </div>
          <div className="flex">
            <button className="button margin-r">Tocantins</button>
            <button className="button">Outros Sistemas Hídricos</button>
          </div>
        </div>
      </div>
    </>
  );
}
