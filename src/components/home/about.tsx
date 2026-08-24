import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import SocialIcons from "../common/social-icon";
import Image from "next/image";
import CornerBox from "../common/corner-box";
import BtnPrimary from "../common/btn-primary";

export default function About() {
  return (
    <GridLine markers className="px-20 py-30 flex flex-col gap-18">
      <div className="flex flex-col gap-5">
        <Eyebrow title="ABOUT" />
        <h2 className="font-primary text-foreground text-[52px] leading-15 font-medium">
          Specializing in modern web technologies, I turn complex ideas into
          fast, reliable, and maintainable applications.
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-14 text-secondary-text">
        <div className="flex flex-col justify-between">
          <p>
            I specialize in system architecture and scalable web engineering.
            From backend services to frontend performance, I approach
            development with structure, clarity, and long-term thinking.
          </p>
          <SocialIcons />
        </div>
        <div className="justify-self-center">
          <CornerBox>
            <Image
              src="/images/me.png"
              alt="Profile Picture"
              width={400}
              height={500}
              className="h-125 w-auto object-cover object-center"
            />
          </CornerBox>
        </div>
        <div className="self-end flex flex-col items-start gap-10">
          <p>
            Over the years, I&apos;ve led architectural initiatives, optimized
            high-traffic applications, and contributed to technical
            decision-making that supports product growth. I believe strong
            engineering is defined not just by delivery, but by durability.
          </p>
          <BtnPrimary text="LEARN MORE" />
        </div>
      </div>
    </GridLine>
  );
}
