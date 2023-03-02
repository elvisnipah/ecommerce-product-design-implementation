import React from "react";
import CartItem from "./CartItem";

function CartDisplay(props) {
  const cartInfo = props.cartInfo;
  return (
    <div className="w-[95%] max-w-[360px] lg:min-h-[250px] bg-white absolute top-[1%] left-0 right-0 m-auto h-[33%] lg:top-[-14%] lg:left-[64%] rounded-lg py-4 shadow-xl flex flex-col">
      <p className="px-4 pb-4 font-bold">Cart</p>
      <hr />
      <div className=" flex flex-col items-center justify-center grow p-2">
        {cartInfo.numberOfItems === 0 ? (
          <p className="font-bold text-gray-500">Your cart is empty.</p>
        ) : (
          <CartItem cartInfo={cartInfo} clearCart={props.clearCart} />
        )}
      </div>
    </div>
  );
}

export default CartDisplay;
