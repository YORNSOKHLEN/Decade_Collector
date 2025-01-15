import React from "react";
import GroupSerieMovie from "./GroupSerieMovie";

const SerieMovie = ({
  titleOfSerie: {
    titleSerie,
    titleMovie1,
    titleMovie2,
    titleMovie3,
    titleMovie4,
    titleMovie5,
    titleMovie6,
    titleMovie7,
    titleMovie8,
    icon,
    imgMovie,
  },
}) => {
  return (
    <div className="group z-10">
      <div className="flex gap-2 items-center hover:text-[#38A93B] group-hover:text-[#38A93B]">
        <a href="./KamenRider/KamenRider.html">{titleSerie}</a>
        {icon}
      </div>
      <div className="absolute mt-0 bg-[#16191E] hidden group-hover:block shadow-lg rounded-lg p-4 gap-5 justify-items-center right-32 left-20 w-auto h-auto">
        <div className="flex text-lg gap-10">
          {/* <!-- Column 1 --> */}
          <div>
            <a
              href="./KamenRider/KamenRiderGavv.html"
              className="block px-2 py-1 hover:text-[#38A93B] rounded"
            >
              {titleMovie1}
            </a>
            <a
              href="./KamenRiderGotchard.html"
              className="block px-2 py-1 hover:text-[#38A93B] rounded"
            >
              {titleMovie2}
            </a>
            <a
              href="./KamenRiderGeats.html"
              className="block px-2 py-1 hover:text-[#38A93B] rounded"
            >
              {titleMovie3}
            </a>
            <a
              href="./KamenRiderGeats.html"
              className="block px-2 py-1 hover:text-[#38A93B] rounded"
            >
              {titleMovie7}
            </a>
          </div>
          {/* <!-- Column 2 --> */}
          <div className="mb-2">
            <a
              href="./KamenRiderRevice.html"
              className="block px-2 py-1 hover:text-[#38A93B] rounded"
            >
              {titleMovie4}
            </a>
            <a
              href="./KamenRiderSaber.html"
              className="block px-2 py-1 hover:text-[#38A93B] rounded"
            >
              {titleMovie5}
            </a>

            <a
              href="./KamenRiderZero-One.html"
              className="block px-2 py-1 hover:text-[#38A93B] rounded"
            >
              {titleMovie6}
            </a>
            <a
              href="./KamenRiderZero-One.html"
              className="block px-2 py-1 hover:text-[#38A93B] rounded"
            >
              {titleMovie8}
            </a>
          </div>
          <div>
            <img src={imgMovie} className="w-[300px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerieMovie;
