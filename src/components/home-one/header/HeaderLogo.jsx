import { Link } from "react-router-dom";
import Logo from "../../../assets/images/v1/JoltClickMain.svg";
function HeaderLogo() {
  return (
    <div className="brand-logo">
      <Link to="/">
        <img src={Logo} alt="Logo" className="light-version-logo" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
