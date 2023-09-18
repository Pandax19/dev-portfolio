import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers.js";

function Nav({ currentPage }) {
  const pages = [ "contact", "portfolio", 'resume'];

  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`navBar ${currentPage === "/" && "navActive"}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && "navActive"}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
