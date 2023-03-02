import React, { useState } from "react";

import minusIcon from "../assets/icon-minus.svg";
import plusIcon from "../assets/icon-plus.svg";
import CartIcon from "../assets/CartIcon";

function Main(props) {
  const [currentCount, setCurrentCount] = useState(0);

  const increaseItems = () => {
    setCurrentCount(currentCount + 1);
  };

  const decreaseItems = () => {
    if (currentCount === 0) {
      return;
    }

    setCurrentCount(currentCount - 1);
  };

  const addToCart = () => {
    props.updateCart(currentCount);
    setCurrentCount(0);
  };

  return (
    <section className="flex flex-col gap-4 p-5 lg:h-full lg:py-8">
      <h4 className="text-sm font-bold text-orange-500">SNEAKER COMPANY</h4>
      <h2 className="font-bold text-2xl pr-3 lg:text-4xl">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-gray-500 lg:w-[90%] lg:py-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <section className="flex justify-between lg:flex-col lg:gap-2">
        <div className="flex gap-4 items-center">
          <p className="font-bold text-2xl">$125.00</p>
          <p className="font-bold text-orange-500 bg-orange-100 px-2 rounded-md">
            50%
          </p>
        </div>
        <p className="font-bold text-gray-300">
          <s>$250.00</s>
        </p>
      </section>

      <section className="flex flex-col gap-3 lg:flex-row lg:w-full lg:justify-between">
        <div className="flex justify-between items-center bg-gray-100 p-3 px-4 rounded-md lg:w-[30%]">
          <button className="hover:opacity-60">
            <img src={minusIcon} alt="" onClick={decreaseItems} />
          </button>
          <p className="font-bold">{currentCount}</p>
          <button className="hover:opacity-60">
            <img src={plusIcon} alt="" onClick={increaseItems} />
          </button>
        </div>
        <div
          onClick={addToCart}
          className="font-bold bg-orange-500 text-white p-3 rounded-md flex gap-4 items-center justify-center cursor-pointer lg:w-[70%] hover:opacity-70"
        >
          <CartIcon color="currentColor" />
          <p>Add to cart</p>
        </div>
      </section>
    </section>
  );
}

export default Main;
