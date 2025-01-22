import React from "react";

const Menu = ({ item, isActive }) => {
  return (
    <div
      className={`py-4 px-4 cursor-pointer ${isActive ? "bg-[#16191E]" : ""}`}
    >
      <a href={item.link}>{item.icon}</a>
    </div>
  );
};

export default Menu;
