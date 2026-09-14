import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import { H2, P, ChildDiv } from "../common/motion";
import ContactForm from "./contact-form";
import SvgBox from "../common/svg-box";
import SocialIcons from "../common/social-icon";

export default function ConnectSection() {
  return (
    <GridLine
      markers
      className="py-15 px-10 xl:px-20 xl:py-30 flex flex-col lg:flex-row-reverse gap-12 xl:gap-20"
    >
      <div className="flex-1 flex flex-col gap-5 justify-between">
        <div className="flex flex-col gap-5">
          <Eyebrow title="LET'S CONNECT" />
          <H2>Let&apos;s Connect for Your Next Project</H2>
          <P>
            I enjoy working with clients who value quality and innovation. Send
            a message and let’s start building something great.
          </P>
          <SocialIcons className="mb-6 lg:mb-20" />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <ChildDiv className="flex-1">
            <SvgBox className="mb-10">
              <svg
                aria-hidden="true"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-primary"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            </SvgBox>
            <h6 className="mb-3 text-foreground font-primary">Email Address</h6>
            <p>
              Send your project details and I&apos;ll respond as soon as
              possible
            </p>
          </ChildDiv>

          <ChildDiv className="flex-1">
            <SvgBox className="mb-10">
              <svg
                aria-hidden="true"
                viewBox="0 0 640 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-primary"
              >
                <path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"></path>
              </svg>
            </SvgBox>
            <h6 className="mb-3 text-foreground font-primary">
              Work Availabilty
            </h6>
            <p>
              Currently available for freelance and contract-based projects.
            </p>
          </ChildDiv>
        </div>
      </div>
      <div className="flex-1">
        <ChildDiv>
          <ContactForm />
        </ChildDiv>
      </div>
    </GridLine>
  );
}
