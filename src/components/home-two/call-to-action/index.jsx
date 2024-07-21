import { Link } from "react-router-dom";
import Shape4Img from "../../../assets/images/v2/shape4.png";
import StarImg from "../../../assets/images/v2/star.png";
function CallToAction() {
  return (
    <div className="aximo-cta-section aximo-section-padding extra-side-margin position-relative">
      <div className="container">
        <div className="aximo-cta-wrap">
          <h2>Your pet's health boost awaits!</h2>
          <Link className="aximo-default-btn" to="/contact-us">
            <span className="aximo-label-up">Start Now</span>
            <span className="aximo-label-up">Start Now</span>
          </Link>
        </div>
      </div>
      <div className="aximo-cta-shape1">
        <img src={Shape4Img} alt="Shape4Img" />
      </div>
      <div className="aximo-cta-shape2">
        <img src={StarImg} alt="StarImg" />
      </div>
    </div>
  );
}

export default CallToAction;
