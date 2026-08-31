import { GridMarker, GridLine } from "../page-grid";
import Link from "next/link";
import { Links, Resources } from "@/data/links.data";
import { ArrowRight } from "lucide-react";
import { SOCIALS } from "@/data/socials";

function SocialLink({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-14.5 border border-line-color"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative">
      {/* grid markers */}
      <GridMarker side="left" />
      <GridMarker side="right" />
      {/* end of markers */}

      <div className="flex flex-col xl:flex-row px-5 xl:px-10">
        <div className="flex-1 flex flex-col gap-6 pt-15 px-5 md:pr-0 xl:pt-30 xl:pl-10 xl:border-b border-r border-line-color">
          <Link href="/">
            <h1 className="text-5xl font-bold">
              D<span className="text-primary">.</span>
            </h1>
          </Link>

          <p className="max-w-140 xl:max-w-87.5">
            Senior Software Engineer focused on scalable architecture,
            performance optimization, and disciplined execution.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 justify-items-stretch py-10 px-5 xl:px-10 gap-6">
          <div className="flex flex-col gap-6 md:w-65">
            <h6 className="font-primary font-medium text-[18px]/[25.2px] md:text-[20px]/[28px]">
              Navigation:
            </h6>
            <div>
              <ul className="flex flex-col gap-2">
                {Links.map((value, idx) => (
                  <li key={idx}>
                    <Link
                      href={value.link}
                      className="flex justify-between items-center p-2 text-secondary-text hover:bg-primary hover:text-background duration-500"
                    >
                      <span>{value.name}</span>
                      <ArrowRight size={16} strokeWidth={3} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:w-65">
            <h6 className="font-primary font-medium text-[18px]/[25.2px] md:text-[20px]/[28px]">
              Resources:
            </h6>
            <div>
              <ul className="flex flex-col gap-2">
                {Resources.map((value, idx) => (
                  <li key={idx}>
                    <Link
                      href={value.link}
                      className="flex justify-between items-center p-2 text-secondary-text hover:bg-primary hover:text-background"
                    >
                      <span>{value.name}</span>
                      <ArrowRight size={16} strokeWidth={3} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <GridLine
        markers
        bottomBorder={false}
        className="px-5 xl:px-10 flex justify-items-stretch" // grid grid-cols-1 md:grid-cols-2
      >
        <div className="flex-1">
          <p>© 2026 – Built by Me</p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4">
          <SocialLink link={SOCIALS.github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              className="fill-primary"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </SocialLink>
          <SocialLink link={SOCIALS.linkedin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              className="fill-primary"
            >
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
            </svg>
          </SocialLink>
          <SocialLink link={SOCIALS.twitter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              className="fill-primary"
            >
              <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
            </svg>
          </SocialLink>
          <SocialLink link={SOCIALS.twitter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              className="fill-primary"
            >
              <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
            </svg>
          </SocialLink>
        </div>
      </GridLine> */}
    </footer>
  );
}
