import * as React from "react"
import { graphql } from "gatsby"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Layout from "../components/layout"
import WPGBlocks from "../components/WPGBlocks"
import AboutBlocks from "../components/WPGBlocks/About";
import CareersBlocks from "../components/WPGBlocks/Careers";
import PhilosophyBlocks from "../components/WPGBlocks/Philosophy";
import BannerPoup from "../components/BannerPoup";

export default function Page({ data: { wpPage, pageDetail } }: any) {
  const post = pageDetail.nodes[0];
  const blocks = post.blocks;
  if (!blocks || blocks.length === 0) {
    return (
      <>
        <Seo post={wpPage} />
        <Layout>
          <div className="container">
            <div className="page-content" dangerouslySetInnerHTML={post.content} />
          </div>
        </Layout>
      </>
    )
  }
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
    case 'projects':
      return (
        <>
          <Seo post={wpPage} />
          {(blocks && blocks.length > 0) && blocks.filter((block: any) => block.name === 'acf/projects-banner').map((block: any, index: number) => {

            return (
              <BannerPoup
                key={index}
                background="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/projects-popup-bkg-1-1.jpg"
                content={block.attributes.data.content} />
            )
          })}
          <Layout>
            <WPGBlocks blocks={post.blocks} />
          </Layout>
        </>
      )
    default:
      return (
        <>
          <Seo post={wpPage} />
          <Layout>
            <div className="container">
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