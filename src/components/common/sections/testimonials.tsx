import { GridLine } from "@/components/common/page-grid";
import Eyebrow from "../eyebrow";
import { H2, P } from "../motion";
import { Testimonials as testimonialsData } from "@/data/testimonials.data";
import InteractiveCardSlider from "../cardSlider";
import ReviewCard from "../reviewCard";

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

      <InteractiveCardSlider className="flex-1" waitDuration={6000}>
        {testimonialsData.map((testimonial, idx) => (
          <ReviewCard
            key={idx}
            id={idx}
            rating={testimonial.rating}
            review={testimonial.review}
            reviewer={testimonial.reviewer}
          />
        ))}
      </InteractiveCardSlider>
    </GridLine>
  );
}
