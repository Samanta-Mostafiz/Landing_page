/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { pricingOptions } from "./constants";
import { CheckCircle2 } from "lucide-react";

const Price = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-white font-medium sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-500 rounded-xl">
              <p className="text-4xl mb-8 font-bold text-white ">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r  from-indigo-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl font-medium mt-6 mr-2 text-yellow-200">{option.price}</span>
                <span className="text-neutral-500 tracking-tight text-green-500">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items- text-red-500">
                    <CheckCircle2 />
                    <span className="ml-2 text-yellow-300" >{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className=" text-white bg-fuchsia-500 inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
