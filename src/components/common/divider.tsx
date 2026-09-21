import { cn } from "@/utils/cn";

export default function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-accent", className)}></div>;
}
