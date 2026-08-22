import { GridLine } from "../page-grid";
import Image from "next/image";
import { BrandsInfo } from "@/data/brands";
// import NHSLogo from "../../../public/nhs-logo-nobg.png";

export default function BrandLogos() {
  return (
    <GridLine markers={true} className="z-30 flex flex-row flex-wrap">
      {BrandsInfo.map((logo, idx) => (
        <div
          key={idx}
          className="group relative grow min-w-30 px-14 py-10 bg-green-light-a border-l border-accent flex justify-center items-center p-4 overflow-hidden"
        >
          {/* <div className="w-full h-full relative flex justify-center items-center hover-scale-105 transition-transform duration-300 ease-in-out"> */}
          <Image
            src={logo.url}
            alt={logo.brandName}
            className="h-10 w-full object-center object-contain group-hover:scale-120 transition-transform duration-300 ease-in-out"
            width={150}
            height={40}
          />
          <div className="absolute group-hover:opacity-0 top-0 left-0 w-full h-full bg-green-light-a mix-blend-hue pointer-events-none transition-opacity duration-300" />
          {/* </div> */}
        </div>
      ))}
    </GridLine>
  );
}
