import { GridMarker, GridLine } from "../page-grid";
import Link from "next/link";
import { Links, Resources } from "@/data/links.data";
import { ArrowRight } from "lucide-react";
import { SOCIALS } from "@/data/socials";
import { ParentDiv, ChildDiv, H6, P, Li } from "../motion";

function SocialLink({
  link,
  children,
}: {
  link: string;
  children: React.ReactNode;
}) {
  return (
    <ChildDiv>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group h-14.5 p-4 flex justify-center items-center border-r border-t border-line-color hover:bg-primary active:bg-primary"
      >
        {children}
      </Link>
    </ChildDiv>
  );
}

export default function Footer() {
  return (
    <footer className="relative">
      {/* grid markers */}
      <GridMarker side="left" />
      <GridMarker side="right" />
      {/* end of markers */}

      <ParentDiv className="grid grid-cols-1 xl:grid-cols-2 justify-items-stretch px-5 xl:px-10">
        {" "}
        {/* // flex flex-col xl:flex-row */}
        <div className="relative flex-1 flex flex-col gap-6 pt-15 px-5 md:pr-0 xl:pt-30 xl:pl-10 border-r border-line-color">
          {/* grid markers */}
          <GridMarker side="right" className="right-0" />
          {/* end of markers */}
          <ChildDiv>
            <Link href="/">
              <h1 className="text-5xl font-bold">
                D<span className="text-primary">.</span>
              </h1>
            </Link>
          </ChildDiv>

          <P className="max-w-140 xl:max-w-87.5">
            Senior Software Engineer focused on scalable architecture,
            performance optimization, and disciplined execution.
          </P>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 justify-items-stretch py-10 px-5 xl:px-10 gap-6">
          <div className="flex flex-col gap-6 md:w-65">
            <H6 className="font-primary font-medium text-[18px]/[25.2px] md:text-[20px]/[28px]">
              Navigation:
            </H6>

            <ul className="flex flex-col gap-2">
              {Links.map((value, idx) => (
                <Li key={idx}>
                  <Link
                    href={value.link}
                    className="flex justify-between items-center p-2 text-secondary-text hover:bg-primary active:bg-primary hover:text-background active:text-background duration-500"
                  >
                    <span className="text-[14px]">{value.name}</span>
                    <ArrowRight size={16} strokeWidth={3} />
                  </Link>
                </Li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 md:w-65">
            <H6 className="font-primary font-medium text-[18px]/[25.2px] md:text-[20px]/[28px]">
              Resources:
            </H6>

            <ul className="flex flex-col gap-2">
              {Resources.map((value, idx) => (
                <Li key={idx}>
                  <Link
                    href={value.link}
                    className="flex justify-between items-center p-2 text-secondary-text hover:bg-primary active:bg-primary hover:text-background active:text-background"
                  >
                    <span className="text-[14px]">{value.name}</span>
                    <ArrowRight size={16} strokeWidth={3} />
                  </Link>
                </Li>
              ))}
            </ul>
          </div>
        </div>
      </ParentDiv>

      <GridLine
        markers
        bottomBorder={false}
        className="px-5 xl:px-10 grid grid-cols-1 md:grid-cols-2 justify-items-stretch"
      >
        <div className="order-1 md:order-0 flex items-center justify-center md:justify-start p-5 md:p-0 md:pl-10 border-t border-r border-line-color">
          <P>© 2026 – Built by Me</P>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <SocialLink link={SOCIALS.github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 30 30"
              className="fill-primary group-hover:fill-background group-active:fill-background"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </SocialLink>
          <SocialLink link={SOCIALS.linkedin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 30 30"
              className="fill-primary group-hover:fill-background group-active:fill-background"
            >
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
            </svg>
          </SocialLink>
          <SocialLink link={SOCIALS.twitter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 30 30"
              className="fill-primary group-hover:fill-background group-active:fill-background"
            >
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
            </svg>
          </SocialLink>
          <SocialLink link={SOCIALS.whatsapp}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              // viewBox="0 0 30 30"
              className="fill-primary group-hover:fill-background group-active:fill-background"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                  // fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </SocialLink>
        </div>
      </GridLine>
    </footer>
  );
}
