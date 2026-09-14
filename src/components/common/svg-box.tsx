import CornerBox from "./corner-box";
import { cn } from "@/utils/cn";

export default function SvgBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CornerBox
      className={cn(
        "w-16 h-16 flex justify-center items-center border border-green-a bg-green-light-a",
        className,
      )}
    >
      {children}
    </CornerBox>
  );
}
