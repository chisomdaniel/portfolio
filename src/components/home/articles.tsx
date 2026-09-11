import { GridLine } from "../common/page-grid";
import Eyebrow from "../common/eyebrow";
import BtnPrimary from "../common/btn-primary";
import { ARTICLES } from "../../data/articles.data";
import Image from "next/image";
import Pill from "../common/pill";
import { UserRound, CalendarDays } from "lucide-react";
import Link from "next/link";
import { H2, P, ChildDiv } from "../common/motion";
import InteractiveCardSlider from "../common/cardSlider";

function ArticleCard({
  title,
  description,
  imageURL,
  link,
  category,
  date,
}: {
  title: string;
  description: string;
  imageURL: string;
  link: string;
  category: string;
  date: string;
}) {
  return (
    <ChildDiv className="group flex flex-col h-full bg-green-light-a border border-green-a">
      <div className="relative w-full aspect-3/2 shrink-0 overflow-hidden">
        <Link href={link}>
          <Image
            src={imageURL}
            alt={title}
            // width={400}
            // height={250}
            fill
            className="object-center object-cover group-hover:scale-105 group-hover:rotate-3 transition-transform duration-400"
          />
          <span className="absolute top-4 left-4 px-2 py-1 text-background bg-primary">
            {category}
          </span>
        </Link>
      </div>

      <div className="p-8 pt-6 flex-1 flex flex-col">
        <h5 className="mb-4 group-hover:text-primary transition-colors duration-0">
          <Link href={link}>{title}</Link>
        </h5>

        <p className="mb-10">{description.slice(0, 95).trim()}...</p>
        <div className="flex justify-start gap-1 items-center mt-auto">
          <Pill svg={<UserRound size={16} />} text="Daniel" />
          <Pill svg={<CalendarDays size={16} />} text={date} />
        </div>
      </div>
    </ChildDiv>
  );
}

export default function Articles() {
  return (
    <GridLine
      markers
      className="py-15 px-10 xl:px-20 xl:py-30 flex flex-col items-center gap-12 xl:gap-20"
    >
      <div className="flex flex-col gap-5 xl:w-185 text-center">
        <Eyebrow title="KNOWLEDGE SHARE" />
        <H2>Top Articles Written by Me</H2>
        <P>
          Giving back to the community through insightful articles on software
          engineering, architecture, and best practices. Explore my latest
          writings and stay updated with industry trends.
        </P>
      </div>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {ARTICLES.slice(0, 3).map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            imageURL={article.imageURL}
            description={article.description}
            link={article.link}
            category={article.category}
            date={article.date}
          />
        ))}
      </div>

      <InteractiveCardSlider className="w-full lg:hidden" waitDuration={3000}>
        {ARTICLES.slice(0, 3).map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            imageURL={article.imageURL}
            description={article.description}
            link={article.link}
            category={article.category}
            date={article.date}
          />
        ))}
      </InteractiveCardSlider>

      <ChildDiv>
        <BtnPrimary text="VIEW ALL ARTICLES" svg=" " url="/blog" />
      </ChildDiv>
    </GridLine>
  );
}
