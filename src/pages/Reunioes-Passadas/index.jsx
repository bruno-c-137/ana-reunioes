import "./style.scss";
import IMGlink from "../../assets/imgs/link-externo.svg";
export default function ReunioesPassadas() {
  return (
    <>
      <h1 className="text-titulo">
        Acesse todas <br /> as reuniões
      </h1>
      <div>
        <div className="margin-sub-b">
          <p className="text-sub">
            Acompanhe as reuniões das Salas de Crise ao vivo, pelo Youtube.
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="border-t">
          <div className="margin-content-t">
            <button className="button margin-r">Próximas reuniões</button>
            <button className="button">Reuniões Anteriores</button>
          </div>
        </div>
        <div className="margin-content-t">
          <div className="margin-b-content text-link">
            <b> 2020</b>
          </div>
          <div className="flex">
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
            <div className="margin-b-content">
              <h3 className="titulo-h3 max-content h3-margin-b-content">
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

          <div className="flex margin-b-content">
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
              <h3 className="titulo-h3 max-content h3-margin-b-content">
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
          <div className="flex margin-b-content">
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
              <h3 className="titulo-h3 max-content h3-margin-b-content">
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
          <div className="margin-b-content text-link">
            <b> 2019</b>
          </div>
          <div className="flex margin-b-content">
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
              <h3 className="titulo-h3 max-content h3-margin-b-content">
                1ª reunião em 2021 da Sala de Crise da Região Sul
              </h3>
              <p className="titulo-h3 margin-b-0">Horário: 10h</p>
              <div className="flex">
                <div className="text-link">Acessar</div>
                <div>
                  <img src={IMGlink} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex margin-b-content">
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
              <h3 className="titulo-h3 max-content h3-margin-b-content">
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
    </>
  );
}
