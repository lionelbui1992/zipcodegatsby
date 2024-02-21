import * as React from "react"
import { graphql } from "gatsby"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Layout from "../components/layout"
import WPGBlocks from "../components/WPGBlocks"
import AboutBlocks from "../components/WPGBlocks/About";
import CareersBlocks from "../components/WPGBlocks/Careers";
import PhilosophyBlocks from "../components/WPGBlocks/Philosophy";

export default function Page({ data: { wpPage, pageDetail } }: any) {
  const post = pageDetail.nodes[0];
  switch (wpPage.slug) {
    case 'about':
      return (
        <>
          <Seo post={wpPage} />
          <Layout>
            <AboutBlocks blocks={post.blocks} />
          </Layout>
        </>
      )
    case 'careers':
      return (
        <>
          <Seo post={wpPage} />
          <Layout>
            <CareersBlocks blocks={post.blocks} />
          </Layout>
        </>
      )
    case 'philosophy':
      return (
        <>
          <Seo post={wpPage} />
          <Layout>
            <PhilosophyBlocks blocks={post.blocks} />
          </Layout>
        </>
      )
    default:
      return (
        <>
          <Seo post={wpPage} />
          <Layout>
            <div class="container">
              <WPGBlocks blocks={post.blocks} />
            </div>
          </Layout>
        </>
      )
  }
}

export const pageQuery = graphql`
    query GET_PAGE($slug: String!) {
        wpPage: wpPage(slug: { eq: $slug }) {
            nodeType
            title
            slug
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