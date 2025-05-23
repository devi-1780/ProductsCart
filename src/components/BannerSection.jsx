import LogoSection from "./LogoSection";
import { BANNER_IMG } from "../helpers/constants";
import React from "react";
function BannerSection() {
  return (
    <div className="px-[3%]">
      <LogoSection />
      <div className="hidden lg:flex  bg-purple-400 justify-between px-20 py-14 rounded-lg h-[5%]">
        <p className="font-bold text-3xl w-6/12">
          Grab upto 50% off on <br /> Selected Products
        </p>
        <img
          src={BANNER_IMG}
          alt="banner-image"
          className="lg:w-[280px] -m-4 sm:w-[100px]"
        />
      </div>
    </div>
  );
}
export default BannerSection;
