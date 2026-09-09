import { GridLine } from "@/components/common/page-grid";
import Eyebrow from "../common/eyebrow";
import { H2, P } from "../common/motion";
// import BtnPrimary from "../common/btn-primary";
import Image from "next/image";
import { Testimonials as testimonialsData } from "@/data/testimonials.data";
import { Star } from "lucide-react";

function ReviewCard({
  rating,
  review,
  reviewer,
}: {
  rating: number;
  review: string;
  reviewer: { image: string; name: string; role: string };
}) {
  return (
    <div className="border border-green-a bg-green-light-a p-7.5">
      <div className="flex gap-1.5 mb-6">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="w-4.5 h-4.5 text-yellow-500 fill-yellow-500"
          />
        ))}
      </div>
      <div className="mb-7.5">
        <p className="text-white text-[18px]/[25px]">&rdquo;{review}&rdquo;</p>
      </div>
      <div className="flex gap-5 items-center">
        <Image
          src={reviewer.image}
          alt={reviewer.name}
          width={50}
          height={50}
          className="rounded-full object-cover object-center"
        />
        <div className="flex flex-col justify-between">
          <h5 className="text-[18px]">{reviewer.name}</h5>
          <p className="text-[14px]">{reviewer.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <GridLine
      markers
      className="py-15 px-10 xl:px-20 xl:py-30 flex flex-col lg:flex-row items-start gap-10 xl:gap-20"
    >
      <div className="flex-1 flex flex-col gap-5">
        <Eyebrow title="CLIENT FEEDBACK" />
        <H2>What People Say About My Projects</H2>
        <P className="md:max-w-137.5 lg:max-w-100">
          I strive to create solutions that deliver real value for every client.
          These testimonials reflect the results of that commitment.
        </P>
        {/* <BtnPrimary text="READ ALL REVIEWS" /> */}
      </div>

      <div className="flex-1">
        {testimonialsData.slice(0, 1).map((testimonial, index) => (
          <ReviewCard
            key={index}
            rating={testimonial.rating}
            review={testimonial.review}
            reviewer={testimonial.reviewer}
          />
        ))}
      </div>
    </GridLine>
  );
}
