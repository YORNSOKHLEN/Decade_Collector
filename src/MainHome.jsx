import React from "react";
import Header from "./components/JSX/Elements/Header";
import GroupMenu from "./components/JSX/Elements/GroupMenu";
import NavBar from "./components/JSX/Elements/NavBar";
import GroupSerieMovie from "./components/JSX/Elements/GroupSerieMovie";
import GroupProduct from "./components/JSX/Product/GroupProduct";
import Footer from "./components/JSX/Elements/Footer";
import Poster from "./components/JSX/Elements/Poster";

const MainHome = () => {
  return (
    <>
      <Header />
      <div className="w-full mt-[90px] flex">
        <GroupMenu />
        <div className="w-full ml-[60px]">
          <NavBar />
          <GroupSerieMovie />
          <Poster />
          <GroupProduct />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainHome;
