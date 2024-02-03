import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../public/assets/Images/logo.svg";
import { Colors } from "@/types";
import LogoPreview from "./LogoPreview";

interface LeftLayoutProps {
  colors: Colors;
}

const LeftLayout: React.FC<LeftLayoutProps> = ({ colors }) => {
  return (
    <div
      className="py-8 md:py-9 lg:py-10 px-5 md:px-12 lg:px-20 flex-1"
      style={{ backgroundColor: colors.background }}
    >
      <LogoPreview color={colors.primary} height={48} width={120} />
      <div className="py-12">
        <h3
          style={{ color: colors.primary }}
          className="mb-4 sm:mb-6 font-semibold text-2xl sm:text-4xl md:text-4xl"
        >
          Create stylish, functional & memorable Design
        </h3>
        <p
          style={{ color: colors.primary }}
          className="text-sm sm:text-base font-normal"
        >
          Selecting the perfect colors and fonts enhances the allure of your
          design, making it captivating and irresistible to your audience.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          style={{
            background: colors.primary,
            color: colors.background,
          }}
          className="font-semibold text-base uppercase text-center rounded-xl px-6 py-4 leading-4 w-full sm:w-44"
        >
          Explore
        </Button>
        <Button
          variant="outline"
          style={{
            color: colors.primary,
            borderColor: colors.primary,
          }}
          className=" rounded-xl border-2  px-6 py-4 uppercase font-base text-center font-semibold leading-4 bg-transparent w-full sm:w-44"
        >
          Know More
        </Button>
      </div>
    </div>
  );
};

export default LeftLayout;
