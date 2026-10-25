export type PopoverContent = {
  title: string;
  description: string;
};

export const bigcapitalCloudPopover = {
  title: "Bigcapital Cloud is coming soon",
  description:
    "A fully managed Bigcapital experience is in the works. Self-host with Docker in the meantime.",
} as const satisfies PopoverContent;
