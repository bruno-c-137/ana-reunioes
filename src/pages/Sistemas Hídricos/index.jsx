import "./style.scss";
import IMGInfo from "../../assets/imgs/Union-(1).svg";
import IMGInfo2 from "../../assets/imgs/Union-(2).svg";
import IMGInfo3 from "../../assets/imgs/Union-(3).svg";
import PDF1 from "../../assets/imgs/pdf-1.svg";
import Compartilhar from "../../assets/imgs/compartilhar-pdf.svg";
import Dowload from "../../assets/imgs/dowload-pdf.svg";
import IMGpdf from "../../assets/imgs/pdf.svg";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Menu from "../../components/Menu";
import { useLayout } from "../../contexts/layout";

export default function SistemasHidricos() {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div onClick={toggle}>
      <button
        className={
          isClass
            ? "button-data-1 button-data-1::before"
            : "button-data button-data::before"
        }
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  ));
  const [isClass, setClass] = useState(false);

  function toggle() {
    setClass((prevState) => !prevState);
  }
  const layoutContex = useLayout();
  return (
    <>
      <div className="margin-t-head text-sub">Sistema Hídrico</div>
      <h1 className="text-titulo margin-t-0">Paraíba do Sul</h1>
      <div className="flex hidden-dt">
        <Menu />
      </div>
      <div className="flex flex-position-colunm">
        <div
          id="menu1"
          className={String(
            layoutContex.menuOpen
              ? "flex-1 margin-content-component-b column-menu-mb"
              : "flex flex-1 margin-content-component-b menu-dt"
          )}
        >
          <div className="flex-1 order-informacao column-menu-mb">
            <div className="flex menu-dt">
              <div className="IMG-info-r">
                <img src={IMGInfo} alt="" />
              </div>
              <div className="text-sub">
                <b> Informações</b>
              </div>
            </div>
            <div className="order-informacao">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </div>
            <div className="margin-content-volume">
              <div className="flex-mb">
                <div className="flex flex-1">
                  <div className="volume-content margin-text-grafico-r-10 color-volume-1"></div>
                  <div className="text-sub margin-text-b ">Paraibuma</div>
                </div>
                <div className="flex flex-1">
                  <div className="volume-content margin-text-grafico-r-10 color-volume-2"></div>
                  <div className="text-sub margin-text-b">Santa Branca</div>
                </div>
              </div>
              <div className="flex-mb">
                <div className="flex flex-1">
                  <div className="volume-content margin-text-grafico-r-10 color-volume-3"></div>
                  <div className="text-sub margin-text-b">Jaguari</div>
                </div>
                <div className="flex flex-1">
                  <div className="volume-content margin-text-grafico-r-10 color-volume-4"></div>
                  <div className="text-sub">Funil</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <div className="text-sub">
              <b>Volume acumulado (%)</b>
            </div>
            <div className="flex align-end">
              <div>
                <div className="width-text-gafico text-sub margin-text-grafico-r-10">
                  70,72%
                </div>
                <div className="grafico"></div>
              </div>
              <div>
                <div className="width-text-gafico text-sub margin-text-grafico-r-10">
                  62,85%
                </div>
                <div className="grafico-2"></div>
              </div>
              <div>
                <div className="width-text-gafico text-sub margin-text-grafico-r-10">
                  40,70%
                </div>
                <div className="grafico-3"></div>
              </div>
              <div>
                <div className="width-text-gafico text-sub margin-text-grafico-r-25">
                  50,15%
                </div>
                <div className="grafico-4"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 order-reservatorio">
            <div>
              <div className="text-sub">
                <b>Reservatório</b>
              </div>
              <div>
                <div class="select">
                  <select name="slct" id="slct">
                    <option value="1"> Mensal</option>
                    <option value="2">No JS</option>
                    <option value="3">Nice!</option>
                  </select>
                  <div class="svg-select">
                    <svg viewBox="0 0 24 24">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="border-grafico-bloco IMG-info-r">
                  <div className="grafico-content">
                    <div className="text-margin- text-sub">
                      Afluência (m³/s)
                    </div>
                  </div>
                  <div className="text-grafico-content">
                    <div className="text-grafico">99,17</div>
                  </div>
                </div>

                <div className="border-grafico-bloco">
                  <div className="grafico-content">
                    <div className="text-margin- text-sub">
                      Defluência (m³/s)
                    </div>
                  </div>
                  <div className="text-grafico-content">
                    <div className="text-grafico">99,17</div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="border-grafico-bloco IMG-info-r">
                  <div className="grafico-content">
                    <div className="text-margin- text-sub">Nível (m)</div>
                  </div>
                  <div className="text-grafico-content">
                    <div className="text-grafico">99,17</div>
                  </div>
                </div>

                <div className="border-grafico-bloco">
                  <div className="grafico-content">
                    <div className="text-margin- text-sub">Volume útil (%)</div>
                  </div>
                  <div className="text-grafico-content">
                    <div className="text-grafico">99,17</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="menu2"
          className={String(
            layoutContex.menuOpen2
              ? "flex-1"
              : "flex flex-1 margin-content-component-DT-b menu-dt"
          )}
        >
          <div className="flex-1 border-t-content-component ">
            <div className="margin-content-component-t">
              <div className="flex menu-dt">
                <div className="IMG-info-r">
                  <img src={IMGInfo2} alt="" />
                </div>
                <div className="text-sub">
                  <b> Boletins</b>
                </div>
              </div>
            </div>
            <div className="flex column-data-dt">
              <div className="flex-1">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<ExampleCustomInput />}
                />
              </div>
              <div className="flex-1">
                <div class="select">
                  <select name="slct" id="slct">
                    <option value="1"> Mensal</option>
                    <option value="2">No JS</option>
                    <option value="3">Nice!</option>
                  </select>
                  <div class="svg-select">
                    <svg viewBox="0 0 24 24">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2 margin-content-component-t">
            <div className="flex margin-text-b">
              <div className="bloco-img-pdf margin-r-bloco-pdf">
                <div>
                  <img src={IMGpdf} alt="" />
                  <div className="text-pdf">124 kb</div>
                </div>
              </div>
              <div className="data-text-pdf border-text-b">
                <div className="flex-2">
                  <div className="text-boletim">
                    <b> Boletim Diário de monitoramento</b>
                  </div>
                  <div className="text-sub">16/11/2020</div>
                </div>
                <div className="flex margin-icon">
                  <div className="margin-r-icon-pdf">
                    <img src={PDF1} alt="" />
                  </div>
                  <div className="margin-r-icon-pdf">
                    <img src={Compartilhar} alt="" />
                  </div>
                  <div>
                    <img src={Dowload} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex margin-text-b">
              <div className="bloco-img-pdf margin-r-bloco-pdf">
                <div>
                  <img src={IMGpdf} alt="" />
                  <div className="text-pdf">124 kb</div>
                </div>
              </div>
              <div className="data-text-pdf border-text-b">
                <div className="flex-2">
                  <div className="text-boletim">
                    <b> Boletim Diário de monitoramento</b>
                  </div>
                  <div className="text-boletim">16/11/2020</div>
                </div>
                <div className="flex margin-icon">
                  <div className="margin-r-icon-pdf">
                    <img src={PDF1} alt="" />
                  </div>
                  <div className="margin-r-icon-pdf">
                    <img src={Compartilhar} alt="" />
                  </div>
                  <div>
                    <img src={Dowload} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex margin-text-b">
              <div className="bloco-img-pdf margin-r-bloco-pdf">
                <div>
                  <img src={IMGpdf} alt="" />
                  <div className="text-pdf">124 kb</div>
                </div>
              </div>
              <div className="data-text-pdf border-text-b">
                <div className="flex-2">
                  <div className="text-boletim">
                    <b> Boletim Diário de monitoramento</b>
                  </div>
                  <div className="text-boletim">16/11/2020</div>
                </div>
                <div className="flex margin-icon">
                  <div className="margin-r-icon-pdf">
                    <img src={PDF1} alt="" />
                  </div>
                  <div className="margin-r-icon-pdf">
                    <img src={Compartilhar} alt="" />
                  </div>
                  <div>
                    <img src={Dowload} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="bloco-img-pdf margin-r-bloco-pdf">
                <div>
                  <img src={IMGpdf} alt="" />
                  <div className="text-pdf">124 kb</div>
                </div>
              </div>
              <div className="data-text-pdf border-text-b">
                <div className="flex-2">
                  <div className="text-boletim">
                    <b> Boletim Diário de monitoramento</b>
                  </div>
                  <div className="text-boletim">16/11/2020</div>
                </div>
                <div className="flex margin-icon">
                  <div className="margin-r-icon-pdf">
                    <img src={PDF1} alt="" />
                  </div>
                  <div className="margin-r-icon-pdf">
                    <img src={Compartilhar} alt="" />
                  </div>
                  <div>
                    <img src={Dowload} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="menu1"
          className={String(
            layoutContex.menuOpen3 ? "flex-1" : "flex flex-1 menu-dt"
          )}
        >
          <div className="flex-1 border-t-content-component  ">
            <div className="margin-content-component-t">
              <div className="flex menu-dt">
                <div className="IMG-info-r">
                  <img src={IMGInfo3} alt="" />
                </div>
                <div className="text-sub">
                  <b> Notícias</b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-2">
            <div className="margin-content-component-t">
              <div className="border-text-b">
                <div className="text-sub margin-text-b">
                  Publicada em 00/00/0000
                  <h3 className="h3-graficos">
                    Nome da notícia relacionada lorem ipsum dolor sit amet
                  </h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                </div>
              </div>
              <div className="border-text-b">
                <div className="text-sub margin-text-b margin-text-t">
                  Publicada em 00/00/0000
                  <h3 className="h3-graficos">
                    Nome da notícia relacionada lorem ipsum dolor sit amet
                  </h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                </div>
              </div>
              <div className="border-text-b">
                <div className="text-sub margin-text-b margin-text-t">
                  Publicada em 00/00/0000
                  <h3 className="h3-graficos">
                    Nome da notícia relacionada lorem ipsum dolor sit amet
                  </h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
