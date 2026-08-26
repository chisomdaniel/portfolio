import { GridLine } from "../common/page-grid";
import CornerBox from "../common/corner-box";
import BtnPrimary from "../common/btn-primary";

export default function Hero() {
  return (
    <GridLine
      markers={true}
      className="min-h-162.5 xl:min-h-screen p-10 xl:p-20 xl:pt-10 bg-background bg-hero-pattern bg-center bg-cover bg-no-repeat overlay"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-background/30" />
      <div className="relative min-h-162.5 xl:min-h-screen flex flex-col justify-center gap-6 xl:justify-between">
        <h1 className="mb-10 text-center xl:text-start text-[50px] md:text-[70px] xl:text-[132px] font-medium text-foreground font-primary leading-12.5 md:leading-17.5 xl:leading-33 tracking-[-1px] md:tracking-[-1.4px] xl:tracking-[-2.64px]">
          Architecting the Modern Web
        </h1>
        <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-end justify-between">
          <div className="flex flex-row items-center gap-1.5 text-white-text">
            <span className="w-3.5 h-3.5 rounded-full bg-primary border-4 border-green-a"></span>
            <p>Available for new projects</p>
          </div>

          <div className="max-w-82.5 md:max-w-125 flex flex-col items-center xl:items-start gap-10">
            <CornerBox className="p-4 border border-green-a">
              <p className="text-center xl:text-start text-[18px] md:text-[20px] xl:text-[22px] leading-6 md:leading-6.75 xl:leading-7.5">
                Hi, I&apos;m Daniel. Specializing in modern web technologies, I
                turn complex ideas into fast, reliable, and maintainable
                applications.
              </p>
            </CornerBox>

            <BtnPrimary text="VIEW PROJECTS" />
          </div>
        </div>
      </div>
    </GridLine>
  );
}
