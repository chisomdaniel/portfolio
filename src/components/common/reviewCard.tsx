import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

type ReviewCardProps = {
  id: number;
  rating: number;
  review: string;
  reviewer: { image: string; name: string; role: string };
  className?: string;
};

export default function ReviewCard({
  id,
  rating,
  review,
  reviewer,
  className,
}: ReviewCardProps) {
  return (
    <div
      key={id}
      className={cn("border border-green-a bg-green-light-a p-7.5", className)}
    >
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
