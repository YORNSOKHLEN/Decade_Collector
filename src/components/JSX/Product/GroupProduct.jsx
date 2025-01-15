import React from "react";
import Gavv from "../../../assets/images/KamenRider/KRGavv/KamenRiderGavv.png";

const GroupProduct = () => {
  return (
    <React.Fragment>
      <div className="bg-[#16191E]  py-[13.5px]">
        <h1 className="mx-7 text-2xl">Home</h1>
      </div>
      <div className="flex space-x-8 uppercase text-xl mx-7 py-3 items-center">
        {/* <!-- Dropdown Menu --> */}
        <div className="group z-10">
          <div className="flex gap-2 items-center hover:text-[#38A93B] group-hover:text-[#38A93B]">
            <a href="./KamenRider/KamenRider.html" className="">
              Kamen Rider
            </a>
            <i className="fas fa-chevron-down"></i>
          </div>
          {/* <!-- Dropdown Content --> */}
          <div className="absolute mt-0 left-[65px] bg-[#16191E] hidden group-hover:block shadow-lg rounded-lg p-4 gap-5 w-auto h-auto">
            <div className="flex text-lg">
              {/* <!-- Column 1 --> */}
              <div>
                <a
                  href="./KamenRider/KamenRiderGavv.html"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Kamen Rider Gavv
                </a>
                <a
                  href="./KamenRiderGotchard.html"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Kamen Rider Gotchard
                </a>
                <a
                  href="./KamenRiderGeats.html"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Kamen Rider Geats
                </a>
              </div>
              {/* <!-- Column 2 --> */}
              <div className="mb-2">
                <a
                  href="./KamenRiderRevice.html"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Kamen Rider Revice
                </a>
                <a
                  href="./KamenRiderSaber.html"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Kamen Rider Saber
                </a>

                <a
                  href="./KamenRiderZero-One.html"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Kamen Rider Zero One
                </a>
              </div>
              <div>
                <img src={Gavv} alt="Kamen Rider Gavv" className="w-[300px]" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="#" className="hover:text-[#38A93B]">
            Demon Slayer
          </a>
        </div>
        <div>
          <a href="#" className="hover:text-[#38A93B]">
            Jujutsu Kaisen
          </a>
        </div>
        <div className="group z-10">
          <div className="flex gap-2 items-center hover:text-[#38A93B] group-hover:text-[#38A93B]">
            <a href="#" className="">
              {" "}
              Marvel universe{" "}
            </a>
            <i className="fas fa-chevron-down"></i>
          </div>
          {/* <!-- Dropdown Content --> */}
          <div className="absolute mt-0 right-[117px] bg-[#16191E] hidden group-hover:block shadow-lg rounded-lg p-4 gap-5 w-auto h-auto">
            <div className="flex text-lg">
              {/* <!-- Column 1 --> */}
              <div className="mt-0 m-2">
                <a
                  href="#kamen-rider-gavv"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Iron Man
                </a>
                <a
                  href="#kamen-rider-gotchard"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Spider man
                </a>
                <a
                  href="#kamen-rider-geats"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Hulk
                </a>
                <a
                  href="#kamen-rider-geats"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Thor
                </a>
              </div>
              {/* <!-- Column 2 --> */}
              <div className="mb-2">
                <a
                  href="#kamen-rider-revice"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  captain america
                </a>
                <a
                  href="#kamen-rider-saber"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Doctor Strange
                </a>
                <a
                  href="#kamen-rider-saber"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                ></a>
                <a
                  href="#kamen-rider-saber"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Moon Knight
                </a>

                <a
                  href="#kamen-rider-zero-one"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Thanos
                </a>
              </div>
              <div>
                <img
                  src="./assets/images/MCU/MCU.png"
                  alt="MCU"
                  className="w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="group z-10">
          <div className="flex gap-2 items-center hover:text-[#38A93B] group-hover:text-[#38A93B]">
            <a href="#" className="">
              {" "}
              Dc Universe{" "}
            </a>
            <i className="fas fa-chevron-down"></i>
          </div>
          {/* <!-- Dropdown Content --> */}
          <div className="absolute mt-0 right-[320px] bg-[#16191E] hidden group-hover:block shadow-lg rounded-lg p-4 gap-5 w-auto h-auto">
            <div className="flex text-lg">
              <div>
                <img
                  src="./assets/images/DCU/DCU.png"
                  alt="Kamen Rider Gavv"
                  className="w-[300px]"
                />
              </div>
              {/* <!-- Column 1 --> */}
              <div>
                <a
                  href="#kamen-rider-gavv"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Spuer Man
                </a>
                <a
                  href="#kamen-rider-gotchard"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Batman
                </a>
                <a
                  href="#kamen-rider-geats"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  wonder woman
                </a>
              </div>
              {/* <!-- Column 2 --> */}
              <div className="mb-2">
                <a
                  href="#kamen-rider-revice"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Aquaman
                </a>
                <a
                  href="#kamen-rider-saber"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  the flash
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="group z-10">
          <div className="flex gap-2 items-center hover:text-[#38A93B] group-hover:text-[#38A93B]">
            <a href="#" className="">
              {" "}
              Super Sentai{" "}
            </a>
            <i className="fas fa-chevron-down"></i>
          </div>
          {/* <!-- Dropdown Content --> */}
          <div className="absolute mt-0 right-36 bg-[#16191E] hidden group-hover:block shadow-lg rounded-lg p-4 gap-5 w-auto h-auto">
            <div className="flex text-lg">
              <div>
                <img
                  src="./assets/images/SuperSentai/Boonboomger.webp"
                  alt="Kamen Rider Gavv"
                  className="w-[300px] rounded-lg"
                />
              </div>
              {/* <!-- Column 1 --> */}
              <div>
                <a
                  href="#kamen-rider-gavv"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Boonboomger
                </a>
                <a
                  href="#kamen-rider-gotchard"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  KingOhger
                </a>
                <a
                  href="#kamen-rider-geats"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Donbrothers
                </a>
              </div>
              {/* <!-- Column 2 --> */}
              <div className="mb-2">
                <a
                  href="#kamen-rider-revice"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Zenkaiger
                </a>
                <a
                  href="#kamen-rider-saber"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Kiramager
                </a>

                <a
                  href="#kamen-rider-zero-one"
                  className="block px-2 py-1 hover:text-[#38A93B] rounded"
                >
                  Ryusoulger
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GroupProduct;
