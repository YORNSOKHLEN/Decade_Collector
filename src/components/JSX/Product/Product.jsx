import React, { useState } from "react";

const Product = ({ serieProduct: { old_pic, new_pic, Detail, Price } }) => {
  const [currentPic, setCurrentPic] = useState(old_pic);
  return (
    <article className="mb-7 hover:scale-110 transition-transform duration-300">
      <div className="uppercase py-1 mb-3 flex justify-center rounded-sm bg-[#38A93B]">
        in stock
      </div>
      <div className="grid justify-items-center">
        <a href="">
          <img
            src={currentPic}
            alt=""
            className="rounded-xl mb-3 h-72"
            id="pic"
            onMouseOver={() => setCurrentPic(new_pic)}
            onMouseOut={() => setCurrentPic(old_pic)}
          />
        </a>
      </div>
      <div>
        <span className="text-base text-gray-300">{Detail}</span>
      </div>
      <div className="flex justify-between items-center mx-1 mt-5">
        <div>
          <span className="font-bold text-2xl">{Price}</span>
        </div>
        <div className="text-xl flex gap-2">
          <button id="top1">
            <i className="fas fa-heart"></i>
          </button>
          <button>
            <i className="fas fa-link"></i>
          </button>
        </div>
      </div>
      <div className="mt-4 items-center py-3 border-[1px] rounded-xl hover:border-[#38A93B] hover:text-[#38A93B]">
        <a href="#" className="w-full flex justify-around uppercase">
          Add to cart <i className="fas fa-basket-shopping"></i>
        </a>
      </div>
    </article>
  );
};

export default Product;

// import React, { useState } from "react";

// const Product = ({ serieProduct: { old_pic, new_pic, Detail, Price } }) => {
//   const [currentPic, setCurrentPic] = useState(old_pic);

//   return (
//     <article className="mb-7 hover:scale-110 transition-transform duration-300">
//       <div className="uppercase py-1 mb-3 flex justify-center rounded-sm bg-[#38A93B]">
//         in stock
//       </div>
//       <div className="grid justify-items-center">
//         <img
//           src={currentPic}
//           alt={Detail}
//           className="rounded-xl mb-3 h-72"
//           onMouseOver={() => setCurrentPic(new_pic)}
//           onMouseOut={() => setCurrentPic(old_pic)}
//         />
//       </div>
//       <div>
//         <span className="text-base text-gray-300">{Detail}</span>
//       </div>
//       <div className="flex justify-between items-center mx-1 mt-5">
//         <div>
//           <span className="font-bold text-2xl">{Price}</span>
//         </div>
//         <div className="text-xl flex gap-2">
//           <button>
//             <i className="fas fa-heart"></i>
//           </button>
//           <button>
//             <i className="fas fa-link"></i>
//           </button>
//         </div>
//       </div>
//       <div className="mt-4 items-center py-3 border-[1px] rounded-xl hover:border-[#38A93B] hover:text-[#38A93B]">
//         <a href="#" className="w-full flex justify-around uppercase">
//           Add to cart <i className="fas fa-basket-shopping"></i>
//         </a>
//       </div>
//     </article>
//   );
// };

// export default Product;
