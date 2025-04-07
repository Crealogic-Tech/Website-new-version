import { NavLink } from "react-router-dom";

const NavMenu = ({ label, name, route, onClick }) => {
  return (
    <li>
      <div>
        <NavLink
          to={route}
          className="link cursor-pointer dmenu"
          aria-label={label}
          onClick={onClick}
        >
          <span className="fill-text" data-text={name}>
            {name}
          </span>
        </NavLink>
      </div>
    </li>
  );
};

export default NavMenu;
