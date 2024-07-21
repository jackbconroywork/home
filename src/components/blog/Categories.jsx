import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="widget">
      <h3 className="wp-block-heading">Categories:</h3>
      <ul>
        <li>
          <Link to="/">Health & Wellness</Link>
        </li>
        <li>
          <Link to="/">Nutrition & Diet</Link>
        </li>
        <li>
          <Link to="/">Behavior & Training</Link>
        </li>
        <li>
          <Link to="/">Grooming & Hygiene</Link>
        </li>
        <li>
          <Link to="/">Safety & Emergency Care</Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
