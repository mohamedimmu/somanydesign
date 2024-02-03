import React from "react";
import Icon from "../Icon";
import Link from "../../public/assets/icons/link.svg";

const socialLinks = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/somanydesign/",
  },
  {
    name: "Pinterest",
    link: "https://pin.it/6ZzZ8eMEx",
  },
  {
    name: "X",
    link: "https://x.com/somanydesign?t=_peMw-Yr2VXWGq8EuLroEw&s=08",
  },
];

const CTA = () => {
  return (
    <div className="flex items-center justify-between flex-col sm:flex-row mb-8 sm:mb-6">
      <div className="mb-14 text-center sm:text-left">
        <p className="text-xl md:text-[32px] not-italic font-normal text-textGrey mb-3 sm:mb-6">
          Made from Madras with <span>&#x2764;&#xFE0F;</span>
        </p>
        <p className="text-xl sm:text-[32px] text-textGrey not-italic font-normal">
          By{" "}
          <a href="#" className="underline underline-offset-8">
            Syed Shamsudeen
          </a>
        </p>
      </div>

      <div className="text-center sm:text-left">
        <p className="uppercase text-base font-extrabold text-textGrey not-italic mb-10 sm:mb-6">
          Follow on
        </p>
        <ul>
          {socialLinks.map((social) => (
            <li
              className="text-textGrey text-xl not-italic font-medium mb-10 sm:mb-6 text-center"
              key={social.link}
            >
              <a href={social.link} className="flex items-center justify-center sm:justify-start gap-0.5">
                <span>{social.name}</span>
                <Icon
                  altText="linkIcon"
                  iconSrc={Link}
                  width={16}
                  height={16}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CTA;
