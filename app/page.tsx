import ColorPreview from "@/components/colorPreview/ColorPreview";
import ExamplePreview from "@/components/examplePreview/ExamplePreview";
import FontPreview from "@/components/fontPreview/FontPreview";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <FontPreview />
      <ColorPreview />
      <ExamplePreview />
    </div>
  );
}
