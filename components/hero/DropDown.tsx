"use client";

import React, { useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const designType = [
  { label: "Luxury", value: "luxury" },
  { label: "Retro", value: "retro" },
  { label: "Sports", value: "sports" },
  { label: "Technology", value: "technology" },
  { label: "Dark Theme", value: "darktheme" },
  { label: "Minimal", value: "minimal" },
];

const DropDown = () => {
  const [open, setOpen] = React.useState(false);
  const [dropdownValue, setDropdownValue] = useState("Luxury");

  return (
    <Popover open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="bg-dropdown border-[1px] border-stroke text-textHighlight rounded-3xl p-2 pl-7 w-72 flex items-center justify-between hover:bg-cardColour transition-all duration-300 ease-in-out hover:text-textHighlight"
        >
          <span className="text-base font-semibold text-center">
            {dropdownValue}
          </span>
          <span className="bg-cardColour rounded-full w-8 h-8 flex items-center justify-center group hover:bg-dropdown transition-all duration-300 ease-in-out">
            <ChevronDown
              size={18}
              strokeWidth={3}
              className="group-hover:text-cta"
            />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0 border-0 bg-dropdown">
        <Command className="bg-dropdown text-textSub p-0">
          <CommandInput placeholder="Search Category..." className="placeholder:text-stroke opacity-80" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className="p-0 pt-1">
            {designType.map((design, index) => (
              <CommandItem
                key={design.value}
                value={design.value}
                onSelect={(currentValue) => {
                  setDropdownValue(design.label);
                  setOpen(false);
                }}
                className={`text-base font-semibold pl-7 py-4 text-textSub ${index === 0 ? "" : "border-stroke border-t-[1px]"} aria-selected:bg-background aria-selected:text-textSub cursor-pointer leading-4`}
              >
                {/* <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                /> */}
                {design.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DropDown;

{
  /* <div className="relative w-[290px] h-12">
            <select className="appearance-none font-base font-semibold  text-textHighlight w-full h-full rounded-full border-2 border-stroke hover:border-textGrey duration-300 ease-in-out transition pl-7 px-2 pr-2 bg-cardColour cursor-pointer">
              {designType.map((design) => (
                <option key={design.value} value={design.value}>
                  {design.name}
                </option>
              ))}
            </select>
          </div> */
}
