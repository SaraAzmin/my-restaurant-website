import React from "react";
import { featuredProducts } from "@/data";
import Image from "next/image";

const FeaturedProduct = () => {
  return (
    <div className="w-screen text-orange-600">
      <h1 className="text-4xl text-center p-2 md:p-10 md:text-4xl xl:text-5xl font-bold uppercase">
        Popular Items
      </h1>
      <div className="overflow-x-scroll">
        <div className="w-max flex">
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all duration-300 md:w-[45vw] xl:w-[25vw] xl:h-[70vh] border-2 rounded-md mr-5"
            >
              {item.img && (
                <div className="relative flex-1 w-2/3 h-2/3 hover:rotate-[60deg] transition-all duration-500">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div className=" flex-1 flex flex-col items-center justify-start text-center">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl my-5">
                  {item.title}
                </h1>
                <p className="text-justify px-5">{item.desc}</p>
                <div className="flex pt-5 px-5 items-center w-full">
                  <div className="flex justify-start w-1/2">
                    <span className="text-xl font-semibold px-5 py-3 bg-orange-50 rounded-md">
                      ${item.price}
                    </span>
                  </div>
                  <div className="flex justify-end w-1/2">
                    <button className="bg-orange-600 text-white px-5 py-3 rounded-md">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
