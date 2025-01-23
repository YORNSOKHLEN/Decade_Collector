import React, { useState } from "react";
import Decade from "../../../assets/images/KamenRider/Decade/Decade1/Decade1.png";
import { Link } from "react-router-dom";

const GroupCard = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 150;
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const subtotal = price * quantity;
  const subtotalkh = subtotal * 4100;
  return (
    <div className=" flex gap-3 mx-7 mt-8">
      <div className=" border-2 border-gray-900 flex w-2/3 justify-between ">
        <div className=" w-full">
          <h2 className=" px-5 py-3 border-b-2 border-gray-900 text-2xl font-thin">
            Product
          </h2>
          <div className="flex gap-5 ">
            <div>
              <img src={Decade} className="h-[130px] px-1" />
            </div>
            <div className="grid items-center mx-1">
              <Link to={"/detail-decade"} className=" hover:text-[#38A93B]">
                DX Neo Decade Driver & K-Touch 21
              </Link>
              <span className="uppercase w-24 py-1 px-1 flex rounded-sm bg-[#38A93B]">
                in stock
              </span>
              <span className=" text-blue-500">${price}</span>
            </div>
          </div>
        </div>
        <div className=" w-1/3">
          <h2 className=" px-5 py-3 border-b-2 border-gray-900 text-2xl font-thin">
            Quantity
          </h2>
          <div>
            <div className="flex items-center justify-center text-white mt-10 border-2 border-gray-900 w-2/3 rounded-sm ">
              <button onClick={handleDecrement} className="px-1 py-1 rounded-l">
                -
              </button>
              <span className="px-5 py-1">{quantity}</span>
              <button onClick={handleIncrement} className="px-1 py-1 rounded-r">
                +
              </button>
            </div>
            <button className="mt-2 text-gray-500 mx-2 hover:text-[#38A93B] ">
              Remove
            </button>
          </div>
        </div>
        <div className=" w-1/3">
          <h2 className=" px-5 py-3 border-b-2 border-gray-900 text-2xl font-thin">
            Total
          </h2>
          <div className="items-center mt-11 ">$ {subtotal.toFixed(2)}</div>
        </div>
      </div>
      <div className=" border-2 border-gray-900 w-1/3">
        <h2 className="px-5 py-3 border-b-2 border-gray-900 text-2xl font-thin">
          Total
        </h2>
        <div className="px-5 py-5 flex justify-between">
          <h2>USD {subtotal.toFixed(2)}</h2>
          <h2>=</h2>
          <h2>KHR {subtotalkh}</h2>
        </div>
        <p className=" font-thin px-5 my-7">
          Taxes and shipping calculated at checkout
        </p>
        <div className="mx-2 my-4">
          <Link to={"/shopping"}>
            <button className="bg-[#38A93B] w-full py-4 rounded-2xl hover:bg-gray-900 ">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
