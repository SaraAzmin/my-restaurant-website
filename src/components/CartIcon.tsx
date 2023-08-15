import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cart from "@/assets/images/cart.png";


const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-1">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src={Cart} alt="" fill />
      </div>
      <span>Cart (0)</span>
    </Link>
  );
};

export default CartIcon;