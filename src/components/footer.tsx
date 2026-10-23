import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  badge?: string;
};

type FooterGroup = {
  title: string;
  links: readonly FooterLink[];
};

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Self-Hosted", href: "/self-hosted" },
      { label: "Bigcapital Cloud", href: "/sign-up", badge: "New" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://docs.bigcapital.app" },
      { label: "Blog", href: "https://bigcapital.app/blog" },
      { label: "Product Updates", href: "https://bigcapital.app/updates" },
      {
        label: "Roadmap",
        href: "https://github.com/bigcapitalhq/bigcapital/milestones",
      },
      { label: "Status", href: "https://bigcapital.statuspage.io" },
    ],
  },
  {
    title: "Open Source",
    links: [
      { label: "GitHub", href: "https://github.com/bigcapitalhq/bigcapital" },
      {
        label: "Docker Deployment",
        href: "https://docs.bigcapital.app/deployment/docker",
      },
      {
        label: "AGPL-3.0 License",
        href: "https://github.com/bigcapitalhq/bigcapital/blob/develop/LICENSE",
      },
      { label: "OSS Friends", href: "https://bigcapital.app/oss-friends" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "https://discord.gg/c8nPBJafeb" },
      { label: "Sign In", href: "/sign-in" },
      { label: "Sign Up", href: "/sign-up" },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      {
        label: "Terms of Use",
        href: "https://bigcapital.app/legal/terms-of-use",
      },
      {
        label: "Privacy Policy",
        href: "https://bigcapital.app/legal/privacy-policy",
      },
      {
        label: "Security",
        href: "https://github.com/bigcapitalhq/bigcapital/security",
      },
      { label: "Status", href: "https://bigcapital.statuspage.io" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Discord", href: "https://discord.gg/c8nPBJafeb" },
      { label: "X (Twitter)", href: "https://twitter.com/BigcapitalHQ" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/bigcapital-technology",
      },
      { label: "GitHub", href: "https://github.com/bigcapitalhq" },
    ],
  },
] as const satisfies readonly FooterGroup[];

export function Footer() {
  return (
    <footer className="w-full px-6 py-10 text-[14px] lg:px-8">
      <nav aria-label="Bigcapital Directory">
        <div className="grid grid-cols-4 gap-x-6 gap-y-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
          {footerGroups.map((group) => (
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
        © 2026 Bigcapital Technology, Inc. All rights reserved.
      </p>
    </footer>
  );
}

function FooterAnchor({ link }: { link: FooterLink }) {
  const className =
    "flex w-fit items-center gap-1.5 rounded-sm p-0.5 -ml-0.5 text-[#a1a1a1] transition-colors duration-100 hover:text-[#ededed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

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

  if (link.href.startsWith("http")) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}
