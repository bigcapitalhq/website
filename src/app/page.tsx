import type { Metadata } from "next";
import { BuiltForScale } from "@/components/built-for-scale";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FooterCta } from "@/components/footer-cta";
import { Intro } from "@/components/intro";
import { Showcase } from "@/components/showcase";
import { StructuredData } from "@/components/structured-data";
import { TrustedBy } from "@/components/trusted-by";
import { createPageMetadata } from "@/lib/metadata";
import { homeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = createPageMetadata({ path: "/" });

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 flex-col focus:outline-none"
    >
      <StructuredData data={homeStructuredData} />
      <Intro />
      <Showcase />
      <TrustedBy />
      <Features />
      <BuiltForScale />
      <Faq />
      <FooterCta />
    </main>
  );
}
