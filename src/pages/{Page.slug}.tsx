import * as React from "react"
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
    getCareerForm
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
  const [title, setTitle] = useState("");
  const [content, setPostContent] = useState("");
  //useEffect
  useEffect(() => {
    if (data) {
      setBlocks(data.nodeByUri.blocks);
      setPost(data.nodeByUri);
      setTitle(data.nodeByUri.title);
      setPostContent(data.nodeByUri.content);
    }
  }, [data]);

  if (!blocks || blocks.length === 0) {
    return (
      <>
        <Seo post={post} />
        <Layout>
          <div className={`${slug}-page cms-page`}>
            <section className="section-banner" style={{ backgroundImage: "url(/img/page-privacy-policy-bkg.png)" }}>
              <div className="container">
                <h1 className="h3">{title}</h1>
              </div>
            </section>
            <section className="section-content">
              <div className="container" dangerouslySetInnerHTML={{__html:content}} />
            </section>
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
            <CareersBlocks blocks={blocks} form={data.getCareerForm} />
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
            <div className={`${slug}-page cms-page`}>
            <section className="section-banner" style={{ backgroundImage: "url(/img/page-privacy-policy-bkg.png)" }}>
                <div className="container">
                  <h1 className="h3">{title}</h1>
                </div>
              </section>
              <section className="section-content">
                <div className="container">
                  <WPGBlocks blocks={blocks} />
                </div>
              </section>
            </div>
          </Layout>
        </>
      )
  }
}
