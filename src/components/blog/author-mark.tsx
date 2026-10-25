type AuthorMarkProps = {
  name: string;
  size?: "default" | "large";
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function AuthorMark({ name, size = "default" }: AuthorMarkProps) {
  const sizeClass = size === "large" ? "size-10" : "size-9";

  return (
    <span
      aria-hidden="true"
      className={`inline-flex ${sizeClass} shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[11px] font-medium tracking-[0.08em] text-white/70`}
    >
      {getInitials(name)}
    </span>
  );
}
