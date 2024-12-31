import React from "react";

interface NameAndRoleProps {
  name: string;
  role: string;
}

const NameAndRole: React.FC<NameAndRoleProps> = ({ name, role }) => (
  <div className="text-center mb-5">
    <h3 className="text-xl text-c-blue-900 dark:text-white font-semibold leading-6 mb-2.5">{name}</h3>
    <span className="text-base font-semibold">{role}</span>
  </div>
);

export default NameAndRole;
