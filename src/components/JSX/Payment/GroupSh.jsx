import React from "react";
import Shopping from "./shopping";
import Footer from "../Elements/Footer";

const GroupSh = () => {
  return (
    <>
      <div className="w-full mt-[90px] flex">
        <div className="w-full ml-[60px]">
          <Shopping />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GroupSh;
