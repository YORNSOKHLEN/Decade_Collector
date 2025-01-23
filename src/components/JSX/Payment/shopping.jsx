import React from "react";
import Tycoon2 from "../../../assets/images/KamenRider/Geats/Tycoon1/Tycoon2.png";
import { Link } from "react-router-dom";
// Correctly import the image

const Shopping = () => {
  return (
    <div className="max-w-7xl mx-auto pt-8 pb-3 flex">
      <div className="w-1/2 border-r border-gray-700 pr-8 mx-5">
        <div className="flex mb-6 gap-40">
          <Link to={"card"}>
            <i className="fas fa-arrow-left text-white mr-4 cursor-pointer mb-1 top-0"></i>
          </Link>
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        </div>

        {/* Item 1 */}
        <div className="mb-4 flex items-center justify-between mx-5">
          <div className="flex gap-5">
            <img
              src={Tycoon2}
              alt="Black Image"
              className="w-[80px] h-[80px] mr-4"
            />
            <div className="justify-items-start">
              <p>Black Panther</p>
              <div className="flex items-center text-gray-300 mt-4">
                <button className="px-2 py-1 bg-gray-800 rounded-l">-</button>
                <span className="px-2 py-1 bg-gray-700">1</span>
                <button className="px-2 py-1 bg-gray-800 rounded-r">+</button>
              </div>
            </div>
          </div>
          <div className="justify-items-center">
            <p className="text-sm text-white">$65.00</p>
            <i className="fas fa-trash mt-5"></i>
          </div>
        </div>

        {/* Item 2 */}
        <div className="mb-4 flex items-center justify-between mx-5">
          <div className="flex gap-5">
            <img
              src={Tycoon2}
              alt="Black Image"
              className="w-[80px] h-[80px] mr-4"
            />
            <div className="justify-items-start">
              <p>Black Panther</p>
              <div className="flex items-center text-gray-300 mt-4">
                <button className="px-2 py-1 bg-gray-800 rounded-l">-</button>
                <span className="px-2 py-1 bg-gray-700">2</span>
                <button className="px-2 py-1 bg-gray-800 rounded-r">+</button>
              </div>
            </div>
          </div>
          <div className="justify-items-center">
            <p className="text-sm text-white">$95.00</p>
            <i className="fas fa-trash mt-5"></i>
          </div>
        </div>

        {/* Discount Code */}
        <div className="mb-4 mx-5">
          <label
            htmlFor="discount-code"
            className="block text-sm font-medium mb-1"
          >
            Gift Card / Discount code
          </label>
          <div className="flex items-center gap-3 mb-6">
            <input
              type="text"
              id="discount-code"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-l px-3 py-2"
            />
            <button className="px-4 py-2 bg-[#38A93B] text-white rounded-r">
              Apply
            </button>
          </div>
        </div>

        {/* Pricing Details */}
        <div className="text-sm mb-2 mx-5">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$160.00</span>
          </div>
          <div className="flex justify-between">
            <span>Sales tax (6.5%)</span>
            <span>$4.23</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-[#38A93B]">FREE</span>
          </div>
        </div>
        <div className="flex justify-between text-lg font-semibold mx-5">
          <span>Total due</span>
          <span className="text-blue-500">$164.23</span>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="w-1/2 pl-8">
        {/* Progress Steps */}
        <div className="mb-6 flex items-center text-gray-300 justify-between">
          <span className="mr-4 text-[#38A93B]">Shipping</span>
          <div>
            <i className="fa-solid fa-minus fa-lg"></i>
            <i className="fa-solid fa-circle-check fa-lg"></i>
            <i className="fa-solid fa-minus fa-lg"></i>
          </div>
          <span>Delivery</span>
          <div>
            <i className="fa-solid fa-minus fa-lg"></i>
            <i className="fa-solid fa-circle-check fa-lg"></i>
            <i className="fa-solid fa-minus fa-lg"></i>
          </div>
          <span>Payment</span>
        </div>

        {/* Contact Details */}
        <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
            />
          </div>
          <div className="mb-6">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
            />
          </div>

          {/* Shipping Details */}
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <div className="rounded mb-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Flat/House no"
                className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Address"
                className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="State"
                className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="same-address"
                className="bg-gray-800 border border-gray-700 rounded text-blue-500 focus:ring-0 focus:ring-offset-0"
              />
              <label htmlFor="same-address" className="ml-2 text-sm">
                My shipping and billing address are the same
              </label>
            </div>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-[#38A93B] text-white py-2 rounded font-semibold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shopping;
