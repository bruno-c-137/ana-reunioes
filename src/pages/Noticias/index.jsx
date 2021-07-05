import IMGcontant from "../../assets/imgs/img-contant.png";
import Union from "../../assets/imgs/Union.svg";
import Subtract from "../../assets/imgs/Subtract.svg";
import "./style.scss"
export default function Noticias() {
  return (
    <>
      <div className="margin-t-head text-sub">Publicada em 00/00/0000</div>
      <h1 className="text-titulo margin-t-0">
        Nome da notícia relacionada Lorem ipsum dolor sit amet
      </h1>
      <div>
        <p className="text-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
          libero lorem, nec venenatis neque efficitur id. Nulla elit ligula,
          consectetur eget risus in, accumsan pharetra eros. Duis fringilla
          lacinia nibh eu pellentesque.
        </p>
        <div className="img">
         
        </div>
        <p className="text-sub">
          Donec eu justo sit amet tellus pretium posuere non vitae tortor. Duis
          elementum lectus eu nibh dictum, quis gravida neque consectetur. Sed
          quis euismod nunc. Nunc vestibulum ligula sem, in malesuada orci
          vulputate sit amet. Mauris convallis lectus non tincidunt tincidunt.
          Aenean ac rhoncus quam, non auctor eros. Proin tristique aliquam elit
          at bibendum. Mauris at dignissim diam. Proin hendrerit quam sit amet
          ante dictum, et dapibus mi accumsan. Nunc luctus, dui sit amet
          fermentum cursus, odio velit sollicitudin tellus, nec commodo ante
          nibh quis metus.
        </p>

        <p className="text-sub">
          Proin sagittis odio ut egestas bibendum. In hac habitasse platea
          dictumst. Etiam interdum, nibh at dapibus finibus, ante quam gravida
          mi, et efficitur diam mauris quis ipsum. Suspendisse ac consequat leo,
          id mattis dui. Sed semper, nulla id convallis sagittis, sem justo
          laoreet dolor, vel cursus massa tortor non mauris. Vivamus rutrum
          feugiat placerat. Aliquam sit amet mi sit amet elit semper convallis
          non id orci. Nullam mauris lacus, pulvinar pretium turpis eget, dictum
          faucibus tellus. Nullam eu arcu a ante pretium commodo. Aenean
          pretium, mi at maximus suscipit, mauris urna vehicula nisi, non
          aliquet lacus justo non ex. Cras eu ex cursus, dignissim eros
          fringilla, posuere mauris. Ut laoreet sapien vitae massa condimentum
          vulputate. Cras diam neque, placerat vel urna quis, tincidunt interdum
          erat.
        </p>
        <div className="flex margin-icons-b-t">
          <div className="margin-icon-r">
            <img src={Subtract} alt="" srcset="" />
          </div>
          <div>
            <img src={Union} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}
