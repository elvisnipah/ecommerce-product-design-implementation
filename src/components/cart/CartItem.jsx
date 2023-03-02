import React from "react";

import deleteIcon from "../../assets/icon-delete.svg";
import productThumbnail from "../../assets/image-product-1-thumbnail.jpg";

function CartItem(props) {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex gap-3 text-gray-500">
        <img src={productThumbnail} alt="" className="w-[50px] rounded" />
        <div className="flex flex-col">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            ${props.cartInfo.price}.00 x {props.cartInfo.numberOfItems}{" "}
            <strong className="text-black">
              ${props.cartInfo.price * props.cartInfo.numberOfItems}.00
            </strong>
          </p>
        </div>
        <button>
          <img src={deleteIcon} alt="Delete button" onClick={props.clearCart} />
        </button>
      </section>
      <button className="bg-orange-500 rounded-lg p-4 text-white font-bold">
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
