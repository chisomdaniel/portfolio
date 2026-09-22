import { GridLine, VerticalGreenGridBar } from "../page-grid";
import { ChildDiv } from "../motion";
import BtnPrimary from "../btn-primary";

export default function ContactMeSection() {
  return (
    <GridLine
      markers
      className="px-(--page-inset) py-15 xl:py-30 lg:py-30 flex"
    >
      <VerticalGreenGridBar markerSide="left" />
      <ChildDiv className="p-0 md:p-6 xl:p-6 bg-primary grow">
        <div
          className="p-8 xl:p-14.25 flex flex-col items-center gap-6 
          bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)]
          bg-size-[18px_18px]"
        >
          <h2 className="text-background text-center max-w-181.25 leading-[43.7px] lg:leading-[50.6px] xl:leading-[59.8px]">
            Let&apos;s Built Systems That Scale with Confidence
          </h2>
          <p className="text-background text-center max-w-147.5 mb-4">
            If you&apos;re looking for technical leadership, architectural
            clarity, and disciplined execution, I&apos;m open to discussing your
            next product or platform.
          </p>
          <BtnPrimary
            url="/contact"
            text="START A CONVERSATION"
            className="w-full justify-between md:w-fit gap-1.25 text-[15px] md:text[16px] text-center bg-green-light-a border-green-light-b hover:bg-green-a active:bg-green-a hover:border-green-a active:border-green-a text-primary stroke-primary "
          />
        </div>
      </ChildDiv>
      <VerticalGreenGridBar markerSide="right" />
    </GridLine>
  );
}
