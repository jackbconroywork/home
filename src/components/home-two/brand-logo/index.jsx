import Brand1Img from "../../../assets/images/v2/howone.png";
import Brand2Img from "../../../assets/images/v2/howtwo.png";
import Brand3Img from "../../../assets/images/v2/b_3.png";
import Brand4Img from "../../../assets/images/v2/b_4.png";
import Brand5Img from "../../../assets/images/v2/b_5.png";
import Brand6Img from "../../../assets/images/v2/b_6.png";
import Brand7Img from "../../../assets/images/v2/b_7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
  {
    id: crypto.randomUUID(),
    img: Brand1Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand2Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand3Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand4Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand5Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand6Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand7Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand1Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand2Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand3Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand4Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand5Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand6Img,
  },
  {
    id: crypto.randomUUID(),
    img: Brand7Img,
  },
];

const swiperSettings = {
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  allowTouchMove: false,
  modules: [Autoplay],
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
};
function BrandLogo() {
  return (
    <div className="aximo-brandlogo-section-HIW extra-side-margin">
      <div className="aximo-brandlogo-title-HIW">
        <div className="container">
          <div className="row">
            <div className="aximo-section-title">
              <h2>How It Works</h2>
            </div>
            <p></p>
            <div className="col-lg-3">
              <div className="aximo-iconbox-icon2">
                <img src={Brand1Img} alt="Illustrator1Img" />
              </div>
              <h3>Tell us about your cat or dog</h3>
            </div>
            <div className="col-lg-3">
              <div className="aximo-iconbox-icon2">
                <img src={Brand2Img} alt="Illustrator1Img" />
              </div>
              <h3>We create a tailored health plan</h3>
            </div>
            <div className="col-lg-3">
              <h3>Receive your FetchKit each month automatically</h3>
            </div>
            <div className="col-lg-3">
              <h3>Your pet stays happy and healthy</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandLogo;
