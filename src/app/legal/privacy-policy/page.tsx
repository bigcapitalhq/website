import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal/legal-page";
import { legalContent } from "@/constants/legal";
import { routes } from "@/constants/links";
import { getLegalDocument } from "@/lib/legal";
import { createPageMetadata } from "@/lib/metadata";

export const ensureStatic = "navigation";

const slug = legalContent.documents.privacy.slug;

export async function generateMetadata(): Promise<Metadata> {
  const document = await getLegalDocument(slug);

  if (!document) return {};

  return createPageMetadata({
    title: document.title,
    description: document.description,
    path: routes.privacy,
  });
}

export default async function PrivacyPolicyPage() {
  const document = await getLegalDocument(slug);

  if (!document) notFound();

  return <LegalPage document={document} />;
}
