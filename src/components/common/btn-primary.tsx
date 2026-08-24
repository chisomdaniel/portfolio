import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BtnPrimary({ text }: { text: string }) {
  return (
    <Link
      href="/projects"
      className="group flex gap-10 items-center font-semibold hover:bg-green-light-a px-4 py-3 border border-primary hover:border-green-light-b bg-primary text-black hover:text-primary stroke-black hover:stroke-primary"
    >
      <span>{text}</span>
      <ArrowRight
        strokeWidth={3}
        className="w-5 h-5 group-hover:translate-x-0.5 translate-transform"
      />
    </Link>
  );
}
