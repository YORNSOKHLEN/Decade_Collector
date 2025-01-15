import React from "react";

const Product = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Product;
