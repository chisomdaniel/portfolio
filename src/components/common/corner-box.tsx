type CornerBoxProps = {
  children: React.ReactNode;
};

export function CornerBox({ children }: CornerBoxProps) {
  return (
    <div className="relative p-4 border border-green-a">
      {/* top-left */}
      <span className="absolute -top-px -left-px h-5 w-5 border-l-2 border-t-2 border-primary" />

      {/* top-right */}
      <span className="absolute -top-px -right-px h-5 w-5 border-r-2 border-t-2 border-primary" />

      {/* bottom-left */}
      <span className="absolute -bottom-px -left-px h-5 w-5 border-l-2 border-b-2 border-primary" />

      {/* bottom-right */}
      <span className="absolute -bottom-px -right-px h-5 w-5 border-r-2 border-b-2 border-primary" />

      {children}
    </div>
  );
}
