import React from "react";
import Product from "./Product";
import Geats1 from "../../../assets/images/KamenRider/Geats/Geats1/Geats1.png";
import Geats2 from "../../../assets/images/KamenRider/Geats/Geats1/Geats2.png";
import Tycoon1 from "../../../assets/images/KamenRider/Geats/Tycoon1/Tycoon1.png";
import Tycoon2 from "../../../assets/images/KamenRider/Geats/Tycoon1/Tycoon2.png";
import Decade1 from "../../../assets/images/KamenRider/Decade/Decade1/Decade1.png";
import Decade2 from "../../../assets/images/KamenRider/Decade/Decade1/Decade2.png";
import Hb1 from "../../../assets/images/MCU/HulkBuster1/HulkBuster1.png";
import Hb2 from "../../../assets/images/MCU/HulkBuster1/HulkBuster2.png";

const GroupProduct = () => {
  const productOfMovie = [
    {
      id: "GS",
      old_pic: Geats1,
      new_pic: Geats2,
      Detail: "DX Desire Driver",
      Price: "$85.00",
    },
    {
      id: "TC",
      old_pic: Tycoon1,
      new_pic: Tycoon2,
      Detail: "DX Bujin Sword Raise Buckle",
      Price: "$95.00",
    },
    {
      id: "DC",
      old_pic: Decade1,
      new_pic: Decade2,
      Detail: "DX Neo Decade Driver & K-Touch 21",
      Price: "$160.00",
    },
    {
      id: "HB",
      old_pic: Hb1,
      new_pic: Hb2,
      Detail: "DLX Infinity Saga Hulkbuster Armor",
      Price: "$135.00",
    },
  ];
  return (
    <div className="my-9 mx-7 grid grid-cols-4 gap-10">
      {productOfMovie.map((p) => {
        return <Product serieProduct={p} key={p.id} />;
      })}
    </div>
  );
};

export default GroupProduct;
