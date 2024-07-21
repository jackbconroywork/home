import { Link } from "react-router-dom";
function HeroContent() {
  return (
    <div className="aximo-hero-content2">
      <h1>Your Pet's Health Kit, Personalised and Delivered</h1>
      <p>
        Make pet care a breeze! With our fun, all-in-one package, you'll get
        preventive, proactive, and personalised wellness for your furry
        friend—no fuss, just happy tails!
      </p>
      <div className="aximo-hero-btn-wrap center">
        <Link className="aximo-default-btn" to="/contact-us">
          <span className="aximo-label-up">Get Started Now</span>
          <span className="aximo-label-up">Get Started Now</span>
        </Link>
        <Link
          className="aximo-default-btn aximo-default-btn-outline"
          to="/service"
        >
          <span className="aximo-label-up">Learn More</span>
          <span className="aximo-label-up">Learn More</span>
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;
