import { GridLine } from "../common/page-grid";
import Image from "next/image";
import { BrandsInfo } from "@/data/brands";
import { ChildDiv } from "../common/motion";
// import NHSLogo from "../../../public/nhs-logo-nobg.png";

export default function BrandLogos() {
  return (
    <GridLine
      bottomBorder={false}
      markers={true}
      className="z-30 flex flex-row flex-wrap"
    >
      {BrandsInfo.map((logo, idx) => (
        <ChildDiv
          key={idx}
          className="group relative grow min-w-30 px-14 py-10 bg-green-light-a border-l border-b border-accent flex justify-center items-center p-4 overflow-hidden"
        >
          <Image
            src={logo.url}
            alt={logo.brandName}
            className="h-10 w-full object-center object-contain group-hover:scale-120 group-active:scale-120 transition-transform duration-300 ease-in-out"
            width={150}
            height={40}
          />
          <div className="absolute group-hover:opacity-0 group-active:opacity-0 top-0 left-0 w-full h-full bg-green-light-a mix-blend-hue pointer-events-none transition-opacity duration-300" />
        </ChildDiv>
      ))}
    </GridLine>
  );
}
