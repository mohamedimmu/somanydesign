"use client";

import Image from "next/image";

interface IconProps {
  altText: string;
  iconSrc: string;
  width: number;
  height: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  altText,
  iconSrc,
  width,
  height,
  className,
}) => {
  return (
    <Image
      alt={altText}
      src={iconSrc}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Icon;
