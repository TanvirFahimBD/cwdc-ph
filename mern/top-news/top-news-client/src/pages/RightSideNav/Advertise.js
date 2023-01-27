import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/news (1).jpg";
import img2 from "../../assets/images/news (2).jpg";
import img3 from "../../assets/images/news (3).jpg";

function Advertise() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          width={200}
          height={200}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          width={200}
          height={200}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          width={200}
          height={200}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Advertise;
