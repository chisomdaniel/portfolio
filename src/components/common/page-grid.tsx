import { cn } from "@/utils/cn";

type GridMarderProps = {
  side: "left" | "right";
};

function GridMarker({ side }: GridMarderProps) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute top-0 z-30 h-6 w-6 -translate-y-1/2",
        side === "left"
          ? "left-(--page-inset) -translate-x-1/2"
          : "right-(--page-inset) translate-x-1/2",
      )}
    >
      <span className="absolute left-1/2 top-1/2 h-1 w-1 outline-black outline-2 -translate-x-1/2 -translate-y-1/2 bg-line-color"></span>
    </span>
  );
}

type GridLineProps = {
  markers?: boolean;
  children?: React.ReactNode;
  className?: string;
  bottomBorder?: boolean;
};

export function GridLine({
  markers = false,
  children,
  className = "",
  bottomBorder = true,
}: GridLineProps) {
  return (
    <div
      className={cn(
        "relative",
        bottomBorder && "border-b border-line-color",
        className,
      )}
    >
      {markers && (
        <>
          <GridMarker side="left" />
          <GridMarker side="right" />
        </>
      )}
      {children}
    </div>
  );
}

export function PageGrid() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-y-0
        left-(--page-inset)
        right-(--page-inset)
        z-20
        border-x
        border-line-color
        "
    />
  );
}

export function GreenGridBar({ className }: { className?: string }) {
  return (
    <GridLine markers className={className}>
      <div className="h-9 border-y border-green-500/10 bg-[repeating-linear-gradient(90deg,rgba(34,197,94,0.12)_0px,rgba(34,197,94,0.12)_2px,transparent_2px,transparent_7px)]" />
    </GridLine>
  );
}
