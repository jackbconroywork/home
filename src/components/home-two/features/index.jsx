import Illustrator1Img from "../../../assets/images/v2/paw4.png";
import img2 from "../../../assets/images/v2/howtwo.png";
import img3 from "../../../assets/images/v2/howthree.png";
import img4 from "../../../assets/images/v2/howfour.png";
import img from "../../../assets/images/v2/howone.png";
import Shape2Img from "../../../assets/images/v2/shape2.png";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="section bg-light2 aximo-section-paddingHIW position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title clash-grotesk">
              <h2>How It Works</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-4">
            <div className="aximo-iconbox-wrap2">
              <div className="aximo-iconbox-icon2">
                <img src={img} alt="Illustrator1Img" />
              </div>
              <div className="aximo-iconbox-data2">
                <h4>Tell us about your cat or dog</h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4">
            <div className="aximo-iconbox-wrap2">
              <div className="aximo-iconbox-icon2">
                <img src={img2} alt="Illustrator1Img" />
              </div>
              <div className="aximo-iconbox-data2">
                <h4>We create a tailored health plan</h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4">
            <div className="aximo-iconbox-wrap2">
              <div className="aximo-iconbox-icon2">
                <img src={img3} alt="Illustrator1Img" />
              </div>
              <div className="aximo-iconbox-data2">
                <h4>Receive your FetchKit direct each month</h4>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4">
            <div className="aximo-iconbox-wrap2">
              <div className="aximo-iconbox-icon2">
                <img src={img4} alt="Illustrator1Img" />
              </div>
              <div className="aximo-iconbox-data2">
                <h4>Your pet stays happy and healthy</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aximo-shape">
        <img src={Shape2Img} alt="Shape2Img" />
      </div>
    </div>
  );
}

export default Features;
