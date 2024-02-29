import * as React from "react";
import Layout from "../components/layout"
import Seo from "gatsby-plugin-wpgraphql-seo";
import HomeBlocks from "../components/WPGBlocks/Home";
import "../assets/sass/homepage.sass";

// import { GET_FORMINATOR_FORM } from '../data'
import { gql, useQuery } from '@apollo/client';
import { useEffect, useRef, useState } from "react";

const IndexPage: React.FC = () => {

  const getPageInfo = gql`
  query getPageInfo {
    nodeByUri(uri: "/") {
      id
      ... on Page {
        title
        uri
        blocks
        content
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
  //useEffect
  useEffect(() => {
    if (data) {
      setBlocks(data.nodeByUri.blocks);
      setPost(data.nodeByUri);
    }
  }, [data]);

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
