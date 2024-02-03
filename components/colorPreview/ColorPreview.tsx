"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import { ClipboardCheck, Copy } from "lucide-react";
import { Button } from "../ui/button";

const ColorPreview = () => {
  const colors: string[] = ["#00373E", "#067D8C", "#F8F6F5"];
  const [copiedColorCode, setCopiedColorCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (clickedColor: string) => {
    navigator.clipboard.writeText(clickedColor);
    setCopiedColorCode(clickedColor);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [copied]);

  return (
    <section>
      <Container>
        <div className="mt-8 md:mt-10">
          <p className="mb-4 text-lg font-medium text-center text-textHighlight">Colour Palette</p>
          <div className="p-4 rounded-3xl border-[1px] border-stroke bg-cardColour flex flex-col sm:flex-row gap-4  items-stretch sm:items-center justify-center flex-wrap">
            {colors.map((color) => (
              <div
                className="pt-16 flex-1 rounded-xl border-[1px] min-w-auto sm:min-w-60"
                key={color}
                style={{ backgroundColor: color, borderColor: color }}
              >
                <div className="p-4 flex items-center justify-between bg-black/25 ">
                  <p className="text-colorCode text-sm font-bold">{color}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:bg-black/40 p-2 w-9 rounded-lg cursor-pointer transition duration-300 ease-in-out bg-t"
                    onClick={() => handleCopyClick(color)}
                  >
                    <span className="sr-only">Copy</span>
                    {copied && copiedColorCode === color ? (
                      <ClipboardCheck className="text-colorCode w-4 h-4" />
                    ) : (
                      <Copy className="text-colorCode w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ColorPreview;
