import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/log-new-session">Log New Session</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
