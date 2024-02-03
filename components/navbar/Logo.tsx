"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="cursor-pointer w-[77px] h-[32px] sm:w-[138px] sm:h-[56px]"
      src="./assets/images/logo.svg"
      alt="Logo"
      width="138"
      height="56"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
