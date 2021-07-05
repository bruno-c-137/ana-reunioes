import "./style.scss";
import IMGInfo from "../../assets/imgs/Union-(1).svg";
import IMGInfo2 from "../../assets/imgs/Union-(2).svg";
import IMGInfo3 from "../../assets/imgs/Union-(3).svg";
import IMGpdf from "../../assets/imgs/pdf.svg";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
export default function Nav() {
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
  return (
    <>
      <div className="flex flex-1">
        <div className="flex-1">
          <div className="flex">
            <div className="IMG-info-r">
              <img src={IMGInfo} alt="" />
            </div>
            <div className="text-sub">
              <b> Informações</b>
            </div>
          </div>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />
          </div>
        </div>
        <div className="flex flex-1">
          <div className="text-sub">
            <b>Volume acumulado (%)</b>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="text-sub">
            <b>Reservatório</b>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="flex-1">
          <div className="flex">
            <div className="IMG-info-r">
              <img src={IMGInfo2} alt="" />
            </div>
            <div className="text-sub">
              <b> Boletins</b>
            </div>
          </div>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <div className="bloco-img-pdf">
              <div>
                <img src={IMGpdf} alt="" />
                <div className="text-pdf">124 kb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="flex-1">
          <div className="flex">
            <div className="IMG-info-r">
              <img src={IMGInfo3} alt="" />
            </div>
            <div className="text-sub">
              <b> Notícias</b>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div>
            <div className="border-text-b">
              <div className="text-sub margin-text-b">
                Publicada em 00/00/0000
                <h3 className="h3-graficos">
                  Nome da notícia relacionada lorem ipsum dolor sit amet
                </h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              </div>
            </div>
            <div className="border-text-b">
              <div className="text-sub margin-text-b margin-text-t">
                Publicada em 00/00/0000
                <h3 className="h3-graficos">
                  Nome da notícia relacionada lorem ipsum dolor sit amet
                </h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              </div>
            </div>
            <div className="border-text-b">
              <div className="text-sub margin-text-b margin-text-t">
                Publicada em 00/00/0000
                <h3 className="h3-graficos">
                  Nome da notícia relacionada lorem ipsum dolor sit amet
                </h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
