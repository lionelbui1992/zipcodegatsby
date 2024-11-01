import * as React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Layout from "../components/layout"
import WPGBlocks from "../components/WPGBlocks"
import AboutBlocks from "../components/WPGBlocks/About";
import CareersBlocks from "../components/WPGBlocks/Careers";
import PhilosophyBlocks from "../components/WPGBlocks/Philosophy";
import ProjectsBlocks from "../components/WPGBlocks/Projects";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import "../assets/sass/header.sass";
import { handleCmsOverlayAnimation } from "../animation";

export default function Page({ params}: { params: { slug: string}}) {
  const slug = params.slug;
  const [language, setLanguage] = useState("en"); 
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get("lang");
  
    if (lang) {
      setLanguage(lang);
    }
  }, [location.search]);

  const getPageInfo = gql`
  query getPageInfo($slug: String!)  {
    getCareerForm
    nodeByUri(uri: $slug) {
      id
      ... on Page {
        title
        slug
        uri
        translations {
          blocks,
          languageCode
        }
        blocks(htmlContent: true, dynamicContent: true)
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
  const { loading, error, data,refetch} = useQuery(getPageInfo, {
    variables: { slug: `${slug}`},
  });
  useEffect(() => {
     if(language){
      refetch({ slug: `${slug}` });
     }
  }, [language, refetch]);
  //State
  const [blocks, setBlocks] = useState([]);
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [content, setPostContent] = useState("");
  //useEffect
  useEffect(() => {
    if (data && data.nodeByUri) {
      
      let translation;
      if(language !== "en"){

        translation = data.nodeByUri.translations.find(
          (e:any) => e.languageCode === language
        );
      }else{
        translation = data.nodeByUri;
      }
  
      if (translation) {
        setBlocks(translation.blocks);
        setPost(data.nodeByUri);
        setTitle(data.nodeByUri.title);
        setPostContent(data.nodeByUri.content);
  
        // Check if blocks are empty and run animation if needed
        if (!translation.blocks || translation.blocks.length === 0) {
          setTimeout(() => {
            handleCmsOverlayAnimation();
          }, 1000);
        }
      }
    }
  }, [language,data]);
  
  if (!blocks || blocks.length === 0) {

    return (
      <>
        <Seo post={post} />
        <Layout slug={slug}>
          <div className={`${slug}-page cms-page`}>
            <section className="section-banner overlay-animation" style={{ backgroundImage: "url(/img/page-privacy-policy-bkg.png)" }}>
              <div className="container">
                <h1 className="h3">{title}</h1>
              </div>
            </section>
            <section className="section-content">
              <div className="container" dangerouslySetInnerHTML={{ __html: content }} />
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
          <Layout slug={slug}>
            <AboutBlocks blocks={blocks} />
          </Layout>
        </>
      )
    case 'careers':
      console.log("blocks",data);
      
      return (
        <>
          <Seo post={post} />
          <Layout slug={slug}>
            <CareersBlocks blocks={blocks} form={data.getCareerForm} />
          </Layout>
        </>
      )
    case 'philosophy':
      return (
        <>
          <Seo post={post} />
          <Layout slug={slug}>
            <PhilosophyBlocks blocks={blocks} />
          </Layout>
        </>
      )
    case 'projects':

      return (
        <>
          <Seo post={post} />
          <Layout slug={slug}>
            <ProjectsBlocks blocks={blocks} />
          </Layout>
        </>
      )
    default:
      return (
        <>
          <Seo post={post} />
          <Layout slug={slug}>
            <div className={`${slug}-page cms-page`}>
              <section className="section-banner overlay-animation" style={{ backgroundImage: "url(/img/page-privacy-policy-bkg.png)" }}>
                <div className="container">
                  <h1 className="h3">{title}</h1>
                </div>
              </section>
              <section className="section-content">
                <div className="container">
                  <div className='page-content'><WPGBlocks blocks={blocks} /></div>
                </div>
              </section>
            </div>
          </Layout>
        </>
      )
  }
}
