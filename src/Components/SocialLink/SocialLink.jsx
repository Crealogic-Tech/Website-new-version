import { NavLink } from "react-router-dom"

export const SocialLink = (props) => {

    return (
        <li className="mb-[10px]">
            <NavLink to={props.to} target="_blank" className="hover-this" aria-label={props.label}>
                <span className="hover-anim">
                    {props.name}
                </span>
            </NavLink>
        </li>
    )
}