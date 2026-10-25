import Link from "next/link";
import { Popover } from "@/components/popover";
import type { NavItem } from "@/constants/navigation";
import type { PopoverContent } from "@/constants/popover";

interface AccountActionProps {
  action: NavItem;
  className: string;
  onClick?: () => void;
  popover?: PopoverContent;
}

export function AccountAction({
  action,
  className,
  onClick,
  popover,
}: AccountActionProps) {
  const popoverId = popover
    ? `account-${action.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-popover`
    : undefined;

  const trigger = action.disabled ? (
    <button
      type="button"
      disabled
      aria-describedby={popoverId}
      className={`${className} ${popover ? "w-full" : ""} cursor-not-allowed opacity-40`}
    >
      {action.label}
    </button>
  ) : (
    <Link
      href={action.href}
      prefetch={false}
      onClick={onClick}
      aria-describedby={popoverId}
      className={`${className} ${popover ? "w-full" : ""}`}
    >
      {action.label}
    </Link>
  );

  if (!popover || !popoverId) {
    return trigger;
  }

  return (
    <span className="group relative inline-flex">
      {trigger}
      <Popover
        id={popoverId}
        content={popover}
        placement="bottom"
        align="end"
      />
    </span>
  );
}
