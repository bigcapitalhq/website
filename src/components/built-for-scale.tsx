const pillars = [
  {
    title: "Multi-entity, multi-currency",
    description:
      "Track branches, warehouses, and currencies in a single ledger, with consolidated reports that stay accurate as you expand.",
  },
  {
    title: "Real-time reporting",
    description:
      "Balance sheets, P&L, and cash flow statements update as transactions land, so you never wait for month-end to see where you stand.",
  },
  {
    title: "Automation that grows with you",
    description:
      "Recurring invoices, bank feeds, and approval workflows remove repetitive work without adding headcount.",
  },
] as const;

export function BuiltForScale() {
  return (
    <section
      aria-labelledby="built-for-scale-title"
      className="relative isolate pb-24 md:pb-[100px]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <h2
          id="built-for-scale-title"
          className="text-balance text-center text-[47px] font-normal leading-[1.1] tracking-tighter text-[#ffffff42]"
        >
          Built for complexity. Ready for scale.
        </h2>

        <div className="mt-16 flex flex-col gap-10 md:mt-20">
          {pillars.map((pillar, index) => {
            const imageOnLeft = index % 2 === 1;

            return (
              <div
                key={pillar.title}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10"
              >
                <div
                  aria-hidden="true"
                  className={`aspect-[3/2] w-full rounded-lg bg-[#17181b] ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                />

                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                  <h3 className="text-balance text-[20px] font-medium tracking-tight text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 max-w-md text-pretty text-[18px] leading-7 text-white/50">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-white/10"
      />
    </section>
  );
}
