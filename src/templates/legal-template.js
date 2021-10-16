import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import {
  LegalContainer,
  LegalContent,
  LegalSidebar,
  LegalSidebarItem,
  LegalContentTitle,
  LegalContentBody,
  LegalTitle,
  LegalHeader,
  LegalPager,
  LegalH2,
  LegalH3,
} from "../components/Legal"
import Layout from "../components/layout"

function LegalSidebarPage() {
  return (
    <LegalSidebar>
      <LegalSidebarItem>What information do we collect?</LegalSidebarItem>
      <LegalSidebarItem>
        Do we use cookies and other tracking technologies?
      </LegalSidebarItem>
      <LegalSidebarItem>how do we keep your information safe?</LegalSidebarItem>
      <LegalSidebarItem>Do we make updates to this notice?</LegalSidebarItem>
      <LegalSidebarItem>How we use information</LegalSidebarItem>
    </LegalSidebar>
  )
}

export default function LegalPage({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx

  const mdxComponents = { h2: LegalH2, h3: LegalH3 }

  return (
    <Layout name={"legal"}>
      <LegalPager>
        <LegalHeader>
          <LegalTitle>Bigcapital Legal Information</LegalTitle>
        </LegalHeader>

        <LegalContainer>
          <LegalContent>
            <LegalContentTitle>{title}</LegalContentTitle>

            <LegalContentBody>
              <MDXProvider components={mdxComponents}>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </LegalContentBody>
          </LegalContent>

          <LegalSidebarPage />
        </LegalContainer>
      </LegalPager>
    </Layout>
  )
}

export const query = graphql`
  query POST_BY_SLUG($id: String!) {
    mdx(id: { eq: $id }) {
      id
      slug
      body
      frontmatter {
        title
      }
    }
  }
`
