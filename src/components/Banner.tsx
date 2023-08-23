import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/images/slide3.jpg";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Banner = () => {

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-orange-50">
      <div className="flex-1 flex items-center justify-center flex-col gap-5 text-orange-600 font-bold">
        <h1 className="text-4xl text-center uppercase p-2 md:p-10 md:text-5xl xl:text-6xl">
        the best pizza to share with your loved ones!
        </h1>
        <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:border-orange-600 hover:bg-white hover:text-orange-600 border-2 border-transparent">Order Now</button>
      </div>
      <div className="w-full flex-1 relative">
        <Image
          src={BannerImage}
          alt="Banner image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
