import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import Image from "next/image";
import CornerBox from "../common/corner-box";
import { H2, P, ChildDiv } from "../common/motion";
import { StarReview } from "@/data/testimonials.data";
import InteractiveGridSlider from "../common/gridSlider";
import { Testimonials as testimonialsData } from "@/data/testimonials.data";
import ReviewCard from "../common/reviewCard";
// import { VerticalGreenGridBar } from "../common/page-grid";

export default function Testimonials() {
  return (
    <GridLine
      markers
      className="px-(--page-inset) py-15 lg:py-30 flex flex-col gap-5"
    >
      <div className="px-5 lg:px-10">
        <Eyebrow title="TESTIMONIALS" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 text-secondary-text px-5 lg:px-10">
        <div className="md:col-span-2 xl:col-span-1 flex gap-5 items-start flex-col">
          <H2 className="font-primary text-foreground text-[38px]/[43.7px] md:text-[44px]/[50.6px] xl:text-[52px]/[50.6px] font-medium">
            Client Stories
          </H2>
          <P className="max-w-125">
            Feedback from product leaders and collaborators across SaaS,
            enterprise, and multi-client environments.
          </P>
        </div>
        <ChildDiv className="justify-self-center w-full">
          <CornerBox className="w-full">
            <Image
              src={StarReview.reviewer.image}
              alt="Gabriel Nnamoko"
              width={400}
              height={500}
              className="w-full h-87.5 xl:h-125 object-cover object-center"
            />
          </CornerBox>
        </ChildDiv>
        <ChildDiv className="self-end flex gap-8 flex-col items-start">
          <svg
            className="fill-primary w-8 h-8"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.988 3.788v13.75h7.656c0 0 1.575 1.962 0.788 4.319-0.781 3.144-4.713 3.731-4.713 3.731l1.181 2.75c0 0 8.837-1.181 8.837-10.606v-13.944h-13.75zM0.313 17.538h7.656c0 0 1.575 1.962 0.787 4.319-0.781 3.144-4.713 3.731-4.713 3.731l1.181 2.75c0 0 8.838-1.181 8.838-10.606v-13.944h-13.75v13.75z"></path>
          </svg>
          <div>
            <div className="mb-4 text-foreground font-normal font-primary text-[22px]/[28.16px] md:text-[24px]/[30.72px] xl:text-[28px]/[35.84px]">
              His skills in tech, interpersonal relationships and communication,
              are top-notch.
            </div>
            <p>{StarReview.review}</p>
          </div>
          <div>
            <h6 className="font-primary mt-2 mb-1.5 text-foreground">
              {StarReview.reviewer.name}
            </h6>
            <p>{StarReview.reviewer.role}</p>
          </div>
        </ChildDiv>
      </div>
      <div className="mt-10">
        <InteractiveGridSlider>
          {testimonialsData.map((testimonial, idx) => (
            <ReviewCard
              key={idx}
              id={idx}
              rating={testimonial.rating}
              review={testimonial.review}
              reviewer={testimonial.reviewer}
              className="h-full"
            />
          ))}
        </InteractiveGridSlider>
      </div>
    </GridLine>
  );
}
