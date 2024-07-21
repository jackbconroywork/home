import { Link } from "react-router-dom";
function HeaderButton() {
  return (
    <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
      <Link
        className="aximo-default-btn aximo-header-btn blue-btn2"
        to="/contact-us"
      >
        <span className="aximo-label-up">Get Started!</span>
        <span className="aximo-label-up">Get Started!</span>
      </Link>
    </div>
  );
}

export default HeaderButton;
