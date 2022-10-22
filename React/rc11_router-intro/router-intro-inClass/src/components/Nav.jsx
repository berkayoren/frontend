import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <link to="/">Home</link>
      </li>
      <li>
        <link to="/instructors">Instructors</link>
      </li>
      <li>
        <link to="/contact">Contact</link>
      </li>
    </ul>
  );
};

export default Nav;
