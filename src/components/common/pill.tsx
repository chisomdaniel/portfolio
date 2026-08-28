export default function Pill({
  svg,
  text,
}: {
  svg: React.ReactNode;
  text: string;
}) {
  return (
    <span className="py-1.5 px-3.5 text-secondary-text flex gap-1.5 items-center border rounded-full bg-primary/4 border-green-light-b">
      {svg}
      <span>{text}</span>
    </span>
  );
}
