import React from "react";
import Product from "./Product";
import DataProduct from "../../JS/dataProduct";

const GroupProduct = () => {
  return (
    <div className="my-9 mx-7 grid grid-cols-4 gap-10">
      {DataProduct.map((p) => {
        return <Product {...p} key={p.id} />;
      })}
    </div>
  );
};

export default GroupProduct;
