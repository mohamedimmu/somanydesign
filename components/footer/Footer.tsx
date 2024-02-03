import React from "react";
import Container from "../Container";
import CTA from "./CTA";
import CopyrightText from "./CopyrightText";

const Footer = () => {
  return (
    <footer className="rounded-t-[40px] bg-cardColour mt-20  pt-10 sm:pt-20">
      <Container>
        <h2
          className="
          text-textGrey 
          font-pherome 
          font-normal 
          text-5xl
          sm:text-8xl
          text-center 
          sm:text-left 
          mb-8 
          sm:mb-10
          "
        >
          So Many Design&nbsp;<span className="inline-block mt-3">&reg;</span>
        </h2>
        <CTA />
        <CopyrightText />
      </Container>
    </footer>
  );
};

export default Footer;
