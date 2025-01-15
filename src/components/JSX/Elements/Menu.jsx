import React from "react";

const Menu = ({ item, isActive, onClick }) => {
  return (
    <div
      className={`py-4 px-4 ${isActive ? "bg-[#16191E]" : ""}`}
      onClick={() => onClick(item.id)}
    >
      <a href={item.link}>{item.icon}</a>
    </div>
  );
};

export default Menu;
