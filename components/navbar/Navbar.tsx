"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import ShareButton from "./ShareButton";

const Navbar = () => {
  return (
    <header className="bg-cardColour h-16 sm:h-24">
      <Container>
        <div className="py-4 md:py-5 flex justify-between items-center gap-5">
          <Logo />
          <ShareButton />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
