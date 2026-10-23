export type FaqEntry = {
  question: string;
  answer: string;
  link?: {
    label: string;
    href: string;
    after?: string;
  };
  secondaryAnswer?: string;
};

/*
 * FAQ content lives here so the rendered list and the FAQPage structured data
 * always stay in sync.
 */
export const faqs = [
  {
    question: "What is Bigcapital?",
    answer:
      "Bigcapital is open-source accounting software built to automate your business's financial processes. It brings invoicing, expenses, inventory, and financial reporting into one workspace, so your books stay accurate and your team can make decisions faster.",
  },
  {
    question: "What can I do with Bigcapital?",
    answer:
      "Create and manage sales and purchase invoices, track inventory and expenses, record multi-currency transactions, invite your accountant, and run financial reports such as balance sheets, profit and loss, and cash flow statements.",
  },
  {
    question: "Can I invite my accountant or team?",
    answer:
      "Yes. Invite your accountant, bookkeeper, or teammates to your organization and control what they can view and edit with role-based permissions.",
  },
  {
    question: "Does Bigcapital support multiple currencies?",
    answer:
      "Yes. Pay and get paid in different currencies, record manual journals in any currency, and use real-time exchange rates for conversion.",
  },
  {
    question: "How does Bigcapital work for teams?",
    answer:
      "Track branches, warehouses, and currencies in a single ledger with consolidated reporting. Role-based permissions keep every collaborator working in the right area.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "You can use the cloud version in any modern browser. If you want full control, self-host Bigcapital with Docker by following the",
    link: {
      label: "deployment guide",
      href: "https://docs.bigcapital.app/deployment/docker",
      after: ".",
    },
    secondaryAnswer:
      "The self-hosted version runs anywhere Docker is supported, including macOS, Windows, and Linux.",
  },
  {
    question: "Is Bigcapital open source?",
    answer:
      "Yes. Bigcapital is open source under AGPL-3.0. Explore the source, self-host it, or contribute on",
    link: {
      label: "GitHub",
      href: "https://github.com/bigcapitalhq/bigcapital",
      after: ".",
    },
  },
  {
    question: "Is Bigcapital free?",
    answer:
      "Self-hosting Bigcapital is free under the AGPL-3.0 license. You can also use the managed cloud version if you would rather not run your own infrastructure.",
  },
] as const satisfies readonly FaqEntry[];

export function faqAnswerText(faq: FaqEntry): string {
  const primary = faq.link
    ? `${faq.answer} ${faq.link.label}${faq.link.after ?? ""}`
    : faq.answer;

  return faq.secondaryAnswer
    ? `${primary} ${faq.secondaryAnswer}`
    : primary;
}
