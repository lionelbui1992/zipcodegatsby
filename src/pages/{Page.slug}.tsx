import * as React from "react"
import { graphql } from "gatsby"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Layout from "../components/layout"
import WPGBlocks from "../components/WPGBlocks"
import AboutBlocks from "../components/WPGBlocks/About";
import CareersBlocks from "../components/WPGBlocks/Careers";
import PhilosophyBlocks from "../components/WPGBlocks/Philosophy";
import BannerPoup from "../components/BannerPoup";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Page({params}: {params: {slug: string}}) {
  
  const slug = params.slug;
  const getPageInfo = gql`
  query getPageInfo {
    nodeByUri(uri: "${slug}") {
      id
      ... on Page {
        title
        slug
        uri
        blocks
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
    }
  }
  `;
  const { loading, error, data } = useQuery(getPageInfo);

  //State
  const [blocks, setBlocks] = useState([]);
  const [post, setPost] = useState({});
  const [content, setPostContent] = useState({});
  //useEffect
  useEffect(() => {
    if (data) {
      setBlocks(data.nodeByUri.blocks);
      setPost(data.nodeByUri);
      setPostContent(data.nodeByUri.content);
    }
  }, [data]);

  if (!blocks || blocks.length === 0) {
    return (
      <>
        <Seo post={post} />
        <Layout>
          <div className="container">
            <div className="page-content" dangerouslySetInnerHTML={{__html:content}} />
          </div>
        </Layout>
      </>
    )
  }
  switch (slug) {
    case 'about':
      return (
        <>
          <Seo post={post} />
          <Layout>
            <AboutBlocks blocks={blocks} />
          </Layout>
        </>
      )
    case 'careers':
      return (
        <>
          <Seo post={post} />
          <Layout>
            <CareersBlocks blocks={blocks} />
          </Layout>
        </>
      )
    case 'philosophy':
      return (
        <>
          <Seo post={post} />
          <Layout>
            <PhilosophyBlocks blocks={blocks} />
          </Layout>
        </>
      )
    case 'projects':
      return (
        <>
          <Seo post={post} />
          {(blocks && blocks.length > 0) && blocks.filter((block: any) => block.name === 'acf/projects-banner').map((block: any, index: number) => {

            return (
              <BannerPoup
                key={index}
                background="https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/projects-popup-bkg-1-1.jpg"
                content={block.attributes.data.content} />
            )
          })}
          <Layout>
            <WPGBlocks blocks={blocks} />
          </Layout>
        </>
      )
    default:
      return (
        <>
          <Seo post={post} />
          <Layout>
            <div className="container">
              <WPGBlocks blocks={blocks} />
            </div>
          </Layout>
        </>
      )
  }
}

// export const pageQuery = graphql`
//     query GET_PAGE($slug: String!) {
//         wpPage: wpPage(slug: { eq: $slug }) {
//             nodeType
//             title
//             slug
//             uri
//             seo {
//                 title
//                 metaDesc
//                 focuskw
//                 metaKeywords
//                 metaRobotsNoindex
//                 metaRobotsNofollow
//                 opengraphTitle
//                 opengraphDescription
//                 opengraphImage {
//                     altText
//                     sourceUrl
//                     srcSet
//                 }
//                 twitterTitle
//                 twitterDescription
//                 twitterImage {
//                     altText
//                     sourceUrl
//                     srcSet
//                 }
//                 canonical
//                 cornerstone
//                 schema {
//                     articleType
//                     pageType
//                     raw
//                 }
//             }
//         }
//         pageDetail: allWpPage(filter: {slug: {eq: $slug}}) {
//           nodes {
//             title
//             blocks
//           }
//         }
//     }
// `;