import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";

export default function About() {
  return (
    <GridLine markers className="px-20 py-30">
      <div className="flex flex-col gap-5">
        <Eyebrow title="ABOUT" />
        <h2 className="font-primary text-foreground text-[52px] leading-15 font-medium">
          Specializing in modern web technologies, I turn complex ideas into
          fast, reliable, and maintainable applications.
        </h2>
      </div>
      <div>
        <div>
          <p>
            I specialize in system architecture and scalable web engineering.
            From backend services to frontend performance, I approach
            development with structure, clarity, and long-term thinking.
          </p>
        </div>
      </div>
    </GridLine>
  );
}
