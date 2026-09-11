import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BtnPrimary({
  text,
  url,
  svg = null,
}: {
  text: string;
  url: string;
  svg?: React.ReactNode;
}) {
  return (
    <Link
      href={url}
      className="group flex gap-10 items-center w-fit font-semibold hover:bg-green-light-a active:bg-green-light-a px-4 py-3 border border-primary hover:border-green-light-b active:border-green-light-b bg-primary text-black hover:text-primary active:text-primary stroke-black hover:stroke-primary active:stroke-primary"
    >
      <span>{text}</span>
      {svg ? (
        svg
      ) : (
        <ArrowRight
          strokeWidth={3}
          className="w-5 h-5 group-hover:translate-x-0.5 group-active:translate-x-0.5 translate-transform"
        />
      )}
    </Link>
  );
}
