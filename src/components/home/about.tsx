import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import SocialIcons from "../common/social-icon";
import Image from "next/image";
import CornerBox from "../common/corner-box";
import BtnPrimary from "../common/btn-primary";
import { H2, P, ChildDiv } from "../common/motion";

export default function About() {
  return (
    <GridLine
      markers
      className="px-10 py-15 lg:px-20 lg:py-30 flex flex-col gap-12 lg:gap-18"
    >
      <div className="flex flex-col gap-5">
        <Eyebrow title="ABOUT" />
        <H2 className="font-primary text-foreground text-[38px]/[43.7px] md:text-[44px]/[50.6px] xl:text-[52px]/[50.6px] font-medium">
          Specializing in modern web technologies, I turn complex ideas into
          fast, reliable, and maintainable applications.
        </H2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 text-secondary-text">
        <div className="md:col-span-2 xl:col-span-1 flex gap-6 flex-wrap items-end xl:items-start xl:flex-col justify-between">
          <P className="max-w-90">
            I specialize in system architecture and scalable web engineering.
            From backend services to frontend performance, I approach
            development with structure, clarity, and long-term thinking.
          </P>
          <SocialIcons />
        </div>
        <ChildDiv className="justify-self-center w-full">
          <CornerBox className="w-full">
            <Image
              src="/images/me.png"
              alt="Profile Picture"
              width={400}
              height={500}
              className="w-full h-87.5 xl:h-125 object-cover object-center"
            />
          </CornerBox>
        </ChildDiv>
        <ChildDiv className="self-end flex flex-col items-start gap-10">
          <p>
            Over the years, I&apos;ve led architectural initiatives, optimized
            high-traffic applications, and contributed to technical
            decision-making that supports product growth. I believe strong
            engineering is defined not just by delivery, but by durability.
          </p>
          <BtnPrimary text="LEARN MORE" url="/about" />
        </ChildDiv>
      </div>
    </GridLine>
  );
}
