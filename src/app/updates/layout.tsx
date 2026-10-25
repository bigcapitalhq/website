import { updatesContent } from "@/constants/updates";

export default function UpdatesLayout({
  children,
}: LayoutProps<"/updates">) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 flex-col focus:outline-none"
    >
      <header className="border-b border-white/10">
        <div className="px-6 pb-10 pt-20 md:pb-12 md:pt-24 lg:px-8">
          <div className="lg:ml-[calc(25%+1.5rem)]">
            <h1 className="text-[32px] font-normal leading-none tracking-[-0.5px] text-white/50 md:text-[40px]">
              {updatesContent.layout.title}
            </h1>

            <p className="mt-3 text-[15px] leading-6 text-white/50">
              {updatesContent.layout.description}
            </p>

            <p className="mt-2 text-[15px] leading-6">
              <a
                href={updatesContent.layout.followHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-white underline underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {updatesContent.layout.followLabel}
              </a>
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 px-6 py-12 md:py-14 lg:px-8">{children}</div>
    </main>
  );
}
