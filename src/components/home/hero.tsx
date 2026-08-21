import { GridLine } from "../page-grid";
import { CornerBox } from "../common/corner-box";

export default function Hero() {
  return (
    <GridLine markers={true} className="min-h-screen px-20 py-10">
      <div className="min-h-screen flex flex-col justify-between">
        <h1 className="text-[132px] font-medium text-foreground font-primary leading-33 tracking-[-2.64px]">
          Architecting the <br /> Modern Web
        </h1>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <span>.</span>
            <p>Available for new projects</p>
          </div>

          <div className="w-125 flex flex-col items-start gap-10">
            <CornerBox>
              <p className="tp-primary leading-7.5">
                Hi, I&apos;m Daniel. Specializing in modern web technologies, I
                turn complex ideas into fast, reliable, and maintainable
                applications.
              </p>
            </CornerBox>
            <button>VIEW PROJECTS -&gt;</button>
          </div>
        </div>
      </div>
    </GridLine>
  );
}
