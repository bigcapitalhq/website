import Link from "next/link";
import { Popover } from "@/components/popover";
import {
  footerContent,
  type FooterLink,
} from "@/constants/footer";

export function Footer() {
  return (
    <footer className="w-full container-px py-10 text-[14px] md:px-6 lg:px-8">
      <nav aria-label={footerContent.ariaLabel}>
        <div className="grid grid-cols-4 gap-x-6 gap-y-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
          {footerContent.groups.map((group) => (
            <div key={group.title} className="col-span-2">
              <h3 className="my-3 text-[14px] font-medium leading-5 text-[#ededed]">
                {group.title}
              </h3>

              <ul className="m-0 list-none p-0">
                {group.links.map((link) => (
                  <li key={link.label} className="py-0.5 leading-5">
                    <FooterAnchor link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <p className="mt-10 text-[12px] leading-5 text-white/35">
        {footerContent.copyright}
      </p>
    </footer>
  );
}

function FooterAnchor({ link }: { link: FooterLink }) {
  const className =
    "flex w-fit items-center gap-1.5 rounded-sm p-0.5 -ml-0.5 transition-colors duration-100";
  const popoverId = link.popover
    ? `footer-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-popover`
    : undefined;

  const content = (
    <>
      {link.label}
      {link.badge ? (
        <span className="inline-flex h-5 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] px-2 text-[11px] leading-5 font-medium tracking-[0.2px] text-[#ededed]">
          {link.badge}
        </span>
      ) : null}
    </>
  );

  const popover =
    link.popover && popoverId ? (
      <Popover id={popoverId} content={link.popover} />
    ) : null;

  const anchorContent = (
    <>
      {content}
      {popover}
    </>
  );

  if (link.disabled) {
    return (
      <span
        aria-disabled="true"
        aria-describedby={popoverId}
        tabIndex={link.popover ? 0 : undefined}
        className={`${className} group relative cursor-not-allowed text-[#6f6f6f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
      >
        {anchorContent}
      </span>
    );
  }

  const linkClassName = `${className} group relative text-[#a1a1a1] hover:text-[#ededed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`;

  if (link.href.startsWith("http")) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby={popoverId}
        className={linkClassName}
      >
        {anchorContent}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      prefetch={false}
      aria-describedby={popoverId}
      className={linkClassName}
    >
      {anchorContent}
    </Link>
  );
}
