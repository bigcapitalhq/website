import type { PopoverContent } from "@/constants/popover";

type PopoverPlacement = "top" | "bottom";
type PopoverAlign = "start" | "end";

interface PopoverProps {
  id: string;
  content: PopoverContent;
  placement?: PopoverPlacement;
  align?: PopoverAlign;
}

export function Popover({
  id,
  content,
  placement = "top",
  align = "start",
}: PopoverProps) {
  const placementClassName =
    placement === "top" ? "bottom-full mb-2" : "top-full mt-2";
  const alignClassName = align === "start" ? "left-0" : "right-0";

  return (
    <span
      id={id}
      role="tooltip"
      className={`pointer-events-none absolute z-20 hidden w-64 max-w-[calc(100vw-2rem)] rounded-xl border border-white/10 bg-background p-3 text-left shadow-2xl group-hover:block group-focus:block group-focus-within:block ${placementClassName} ${alignClassName}`}
    >
      <span className="block text-[13px] font-medium leading-5 text-[#ededed]">
        {content.title}
      </span>
      <span className="mt-1 block text-[12px] leading-5 text-[#a1a1a1]">
        {content.description}
      </span>
    </span>
  );
}
