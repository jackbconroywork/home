import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
function HeroContent() {
  return (
    <div className="aximo-hero-content">
      <h1>
        <span className="aximo-title-animation">
          We help TikTok Creators grow your audience, build your brand and
          launch your own business.
          <img src={StarImg} alt="StarImg" />
        </span>{" "}
      </h1>
      <p>
        {`We turn TikTok creators into unstoppable brands. Our agency doesn't just grow your audience - we build your empire.`}
      </p>
      <div className="aximo-hero-user-wrap">
        <div className="aximo-hero-user-thumb">
          <div className="aximo-hero-user-thumb-item">
            <img src={User1Img} alt="User1Img" />
          </div>
          <div className="aximo-hero-user-thumb-item">
            <img src={User3Img} alt="User3Img" />
          </div>
          <div className="aximo-hero-user-thumb-item">
            <img src={User2Img} alt="User2Img" />
          </div>
        </div>
        <div className="aximo-hero-user-data">
          <p>Believed by more than a thousand people</p>
        </div>
      </div>
      <Link className="aximo-call-btn" to="/contact-us">
        Book a free consultation <i className="icon-call"></i>
      </Link>
      <div className="aximo-hero-shape">
        <img src={ShapeImg} alt="ShapeImg" />
      </div>
    </div>
  );
}

export default HeroContent;
