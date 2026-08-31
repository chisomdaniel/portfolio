import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import CornerBox from "../common/corner-box";

function SkillItem({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-10">{children}</div>;
}

function SvgBox({ children }: { children: React.ReactNode }) {
  return (
    <CornerBox className="w-16 h-16 flex justify-center items-center border border-green-a bg-green-light-a">
      {children}
    </CornerBox>
  );
}

export default function Skills() {
  return (
    <GridLine
      markers
      className="px-10 py-15 lg:px-20 lg:py-30 flex flex-col gap-12 xl:flex-row xl:gap-48.75"
    >
      <div className="flex flex-col shrink-0 gap-5 xl:w-85">
        <Eyebrow title="TECHNICAL EXPERTISE" />
        <h2>Built Across the Full Stack</h2>
        <p>
          My expertise spans frontend systems, backend architectjre,
          infrastructure, and performance optimization.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-x-4 xl:gap-y-20">
        <SkillItem>
          <SvgBox>
            <svg
              aria-hidden="true"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 fill-primary"
            >
              <path d="M149.9 349.1l-.2-.2-32.8-28.9 32.8-28.9c3.6-3.2 4-8.8.8-12.4l-.2-.2-17.4-18.6c-3.4-3.6-9-3.7-12.4-.4l-57.7 54.1c-3.7 3.5-3.7 9.4 0 12.8l57.7 54.1c1.6 1.5 3.8 2.4 6 2.4 2.4 0 4.8-1 6.4-2.8l17.4-18.6c3.3-3.5 3.1-9.1-.4-12.4zm220-251.2L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 51.9l76.1 76.1H256zM336 464H48V48h160v104c0 13.3 10.7 24 24 24h104zM209.6 214c-4.7-1.4-9.5 1.3-10.9 6L144 408.1c-1.4 4.7 1.3 9.6 6 10.9l24.4 7.1c4.7 1.4 9.6-1.4 10.9-6L240 231.9c1.4-4.7-1.3-9.6-6-10.9zm24.5 76.9l.2.2 32.8 28.9-32.8 28.9c-3.6 3.2-4 8.8-.8 12.4l.2.2 17.4 18.6c3.3 3.5 8.9 3.7 12.4.4l57.7-54.1c3.7-3.5 3.7-9.4 0-12.8l-57.7-54.1c-3.5-3.3-9.1-3.2-12.4.4l-17.4 18.6c-3.3 3.5-3.1 9.1.4 12.4z"></path>
            </svg>
          </SvgBox>
          <div>
            <h6 className="mb-3">Frontend Architecture</h6>
            <p>
              Building performant, accessible, and scalable UI systems with
              modern frameworks and structured state management.
            </p>
          </div>
        </SkillItem>

        <SkillItem>
          <SvgBox>
            <svg
              aria-hidden="true"
              className="w-8 h-8 fill-primary"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path>
            </svg>
          </SvgBox>
          <div>
            <h6 className="mb-3">Backend & API Systems</h6>
            <p>
              Designing secure, scalable backend systems with clean architecture
              and reliable data handling.
            </p>
          </div>
        </SkillItem>

        <SkillItem>
          <SvgBox>
            <svg
              aria-hidden="true"
              className="w-8 h-8 fill-primary"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
            </svg>
          </SvgBox>
          <div>
            <h6 className="mb-3">Cloud & DevOps</h6>
            <p>
              Deploying and maintaining production systems with automation,
              observability, and performance monitoring.
            </p>
          </div>
        </SkillItem>

        <SkillItem>
          <SvgBox>
            <svg
              aria-hidden="true"
              className="w-8 h-8 fill-primary"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
            </svg>
          </SvgBox>
          <div>
            <h6 className="mb-3">System Architecture & Scalability</h6>
            <p>
              Architecting distributed systems with scalability, resilience, and
              long-term maintainability in mind.
            </p>
          </div>
        </SkillItem>

        <SkillItem>
          <SvgBox>
            <svg
              aria-hidden="true"
              className="w-8 h-8 fill-primary"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"></path>
            </svg>
          </SvgBox>
          <div>
            <h6 className="mb-3">Engineering Leadership</h6>
            <p>
              Driving technical standards, mentoring developers, and aligning
              engineering execution with product strategy.
            </p>
          </div>
        </SkillItem>
      </div>
    </GridLine>
  );
}
