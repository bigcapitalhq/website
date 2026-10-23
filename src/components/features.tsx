import { VerticalFeatureTicker } from "@/components/vertical-feature-ticker";

const features = [
  "Sales & Purchases Invoicing",
  "Financial Reports",
  "Inventory",
  "Accountants & Bookkeepers",
  "Expense Accounting",
  "Multi-currency Accounting",
  "Customer Success",
  "Cloud Accounting",
  "Easy-to-use Software",
] as const;

export function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="relative isolate pb-24 pt-20 md:pb-32 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20 lg:px-8">
        <div>
          <h2
            id="features-title"
            className="max-w-xl text-balance text-[22px] font-medium leading-[1.05] tracking-tight text-white"
          >
            Discover the features you need
          </h2>

          <p className="mt-5 max-w-md text-pretty text-[18px] leading-7 text-white/50">
            Nine connected modules that keep your books accurate, your reports
            current, and your team in sync.
          </p>

          <ul className="sr-only">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <VerticalFeatureTicker features={features} />
      </div>
    </section>
  );
}
