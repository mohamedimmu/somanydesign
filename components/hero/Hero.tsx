import React from "react";
import Container from "../Container";
import Icon from "../Icon";
import Regenerate from "../../public/assets/icons/regenerate.svg";
import DropDown from "./DropDown";

const Hero = () => {
  return (
    <section className="mt-10">
      <Container>
        <div className="py-6 mb-6">
          <p className="mb-2 sm:mb-4 font-pherome not-italic font-normal text-center text-textHighlight text-lg sm:text-2xl">
            Find the best
          </p>
          <h1 className="text-textHighlight text-center font-bold text-3xl sm:text-5xl">
            Handpicked Fonts <br /> & Colour Palette
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <DropDown />

          <button className="px-6 py-3 rounded-full bg-cta text-cardColour">
            <a href="#" className="flex items-center gap-2.5 ">
              <Icon
                altText="Regenerate Icon"
                iconSrc={Regenerate}
                width={16}
                height={16}
                className="text-cardColour"
              />
              <span className="text-sm font-bold text-center uppercase">
                Generate
              </span>
            </a>
          </button>
        </div>

        <p className="text-sm font-normal text-textSub text-center hidden lg:block">
          Enter spacebar to Generate variations
        </p>
      </Container>
    </section>
  );
};

export default Hero;
