import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, href, dropdown, dropdownItems }) => {
  return (
    <div className="relative group">
      <NavLink
        to={href}
        className="py-6 px-3 font-bold text-gray-900 hover:text-[#c06c84] transition"
      >
        {name}
      </NavLink>
      {dropdown && dropdownItems && (
        <div className="absolute left-0 hidden group-hover:block mt-2 w-64 bg-white shadow-lg p-3 z-10 rounded-md">
          {dropdownItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#c06c84] rounded transition"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
