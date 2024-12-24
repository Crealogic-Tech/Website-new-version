import { NavLink } from "react-router-dom";

export const NavManu = (props) => {


    return (
        <li>
            <div className="o-hidden">
                <NavLink to={props.route} onClick={props.navigate} className='link cursor-pointer dmenu' aria-label={props.label}>
                    <span className="fill-text" data-text={props.name}>
                        {props.name}
                    </span>
                </NavLink>
            </div>
        </li>
    )
}