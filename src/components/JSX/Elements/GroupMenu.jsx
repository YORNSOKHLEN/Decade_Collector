import React, { useState } from "react";
import Menu from "./Menu";

const GroupMenu = () => {
  const [activeItem, setActiveItem] = useState("home-icon");
  const menuIcons = [
    {
      id: "home-icon",
      link: "#",
      icon: <i className="fas fa-home text-[24px] text-[#38A93B]"></i>,
    },
    {
      id: "heart-icon",
      link: "#",
      icon: <i className="fas fa-heart text-[24px] text-[#38A93B]"></i>,
    },
    {
      id: "shop-icon",
      link: "#",
      icon: (
        <i className="fas fa-basket-shopping text-[24px] text-[#38A93B]"></i>
      ),
    },
    {
      id: "about-icon",
      link: "#",
      icon: <i className="fas fa-info-circle text-[24px] text-[#38A93B]"></i>,
    },
  ];
  const handleMenuClick = (id) => {
    setActiveItem(id); // Update the active item
  };

  return (
    <React.Fragment>
      <div
        id="menu"
        className="fixed bg-[#06070D] w-[60px] h-screen border-r-2 border-gray-400"
      >
        {menuIcons.map((item) => (
          <Menu
            key={item.id}
            item={item}
            isActive={item.id === activeItem}
            onClick={handleMenuClick}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default GroupMenu;
