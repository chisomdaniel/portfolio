type CornerBoxProps = {
  children: React.ReactNode;
};

export function CornerBox({ children }: CornerBoxProps) {
  return (
    <div className="relative p-4 border border-green-a">
      {/* top-left */}
      <span className="absolute -top-px -left-px h-2.5 w-2.5 border-l border-t border-primary" />

      {/* top-right */}
      <span className="absolute -top-px -right-px h-2.5 w-2.5 border-r border-t border-primary" />

      {/* bottom-left */}
      <span className="absolute -bottom-px -left-px h-2.5 w-2.5 border-l border-b border-primary" />

      {/* bottom-right */}
      <span className="absolute -bottom-px -right-px h-2.5 w-2.5 border-r border-b border-primary" />

      {children}
    </div>
  );
}
