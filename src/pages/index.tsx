import * as React from "react";
import Layout from "../components/layout"
import Seo from "gatsby-plugin-wpgraphql-seo";
import HomeBlocks from "../components/WPGBlocks/Home";
import "../assets/sass/homepage.sass";
// import { GET_FORMINATOR_FORM } from '../data'
import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const IndexPage: React.FC = () => {
  const [language, setLanguage] = useState("en"); 
  const [cookies] = useCookies(['lang']);

  useEffect(() => {
    if (language) {
      const lang = cookies.lang || "en";

      setLanguage(lang);
    }
  }, [cookies.lang,language]);
  const getPageInfo = gql`
  query getPageInfo {
    nodeByUri(uri: "/") {
      id
      ... on Page {
        title
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
  const { loading, error, data,refetch } = useQuery(getPageInfo);

  //State
  const [blocks, setBlocks] = useState([]);
  const [post, setPost] = useState({});
  //useEffect
  useEffect(() => {
    if(data && data.nodeByUri){
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
      }
    }
  }, [data]);
  useEffect(() => {
    if(language){
     refetch({uri:"/"});
    }
 }, [language, refetch]);
 
  return (
    <>
      <Seo post={post} />
      <Layout>
        <HomeBlocks blocks={blocks} />
      </Layout >
    </>
  );
};

export default IndexPage;
