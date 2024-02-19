import * as React from "react"
import { graphql } from "gatsby"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Layout from "../components/layout"
import { Container, Box } from "../components/ui"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function Page({ data: { wpPage, pageDetail } }: any) {
  const post = pageDetail.nodes[0];
  return (
    <>
      <Seo post={wpPage} />
      <Layout>
        <Box paddingY={5}>
          <Container width="narrow">
            {post.blocks.map((block: any) => {
              const { id, blocktype, ...componentProps } = block
              const Component = sections[blocktype] || Fallback
              return <Component key={id} {...(componentProps as any)} />
            })}
          </Container>
        </Box>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
    query GET_PAGE($slug: String!) {
        wpPage: wpPage(slug: { eq: $slug }) {
            nodeType
            title
            uri
            seo {
                title
                metaDesc
                focuskw
                metaKeywords
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                canonical
                cornerstone
                schema {
                    articleType
                    pageType
                    raw
                }
            }
        }
        pageDetail: allWpPage(filter: {slug: {eq: $slug}}) {
          nodes {
            title
            blocks
          }
        }
    }
`;