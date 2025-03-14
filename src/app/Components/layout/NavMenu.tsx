import { NavLink } from "react-router-dom";
 
interface NavManuProps {
  label: string;
  name: string;
  route: string;
  onClick: () => void;
}

const NavManu: React.FC<NavManuProps> = (props) => {
  return (
    <li>
      <div className="">
        <NavLink
          to={props.route} 
          className="link cursor-pointer dmenu"
          aria-label={props.label}
          onClick={props.onClick}
        >
          <span className="fill-text" data-text={props.name}>
            {props.name}
          </span>
        </NavLink>
      </div>
    </li>
  );
};

export default NavManu;
