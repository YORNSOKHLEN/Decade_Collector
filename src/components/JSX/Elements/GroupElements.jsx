import React from "react";
import GroupMenu from "./GroupMenu";
import NavBar from "./NavBar";
import GroupSerieMovie from "./GroupSerieMovie";
import GroupProduct from "../Product/GroupProduct";

const GroupElements = () => {
  return (
    <div className="w-full mt-[90px] flex justify-between">
      <GroupMenu />
      <div className="w-full ml-[60px]">
        <NavBar />
        <div className="flex space-x-8 uppercase text-xl mx-7 py-3 items-center">
          <GroupSerieMovie />
        </div>
        <div className="my-9 mx-7 grid grid-cols-4 gap-10">
          <GroupProduct />
        </div>
      </div>
    </div>
  );
};

export default GroupElements;
