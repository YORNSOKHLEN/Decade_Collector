import React from "react";
import Header from "../Elements/Header";
import GroupMenu from "../Elements/GroupMenu";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import GroupSerieMovie from "../Elements/GroupSerieMovie";
import GroupCard from "./GroupCard";

const Card = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-[90px] flex">
        <GroupMenu />
        <div className="w-full ml-[60px]">
          <NavBar />
          <GroupSerieMovie />
          <GroupCard />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Card;
