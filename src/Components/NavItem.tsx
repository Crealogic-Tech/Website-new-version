import React from "react";
import Link from "next/link";

interface NavItemProps {
  name: string;
  href: string;
  dropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

const NavItem: React.FC<NavItemProps> = ({ name, href, dropdown, dropdownItems }) => {
  return (
    <div className="relative group">
      <Link
        href={href}
        className="py-6 px-3 font-bold text-gray-900 hover:text-[#c06c84] transition"
      >
        {name}
      </Link>
      {dropdown && dropdownItems && (
        <div className="absolute left-0 hidden group-hover:block mt-2 w-64 bg-white shadow-lg p-3 z-10 rounded-md">
          {dropdownItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#c06c84] rounded transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
