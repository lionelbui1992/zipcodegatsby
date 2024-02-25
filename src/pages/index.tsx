import * as React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { IPageProps } from "../shared/model/IPageProps";
import Seo from "gatsby-plugin-wpgraphql-seo";
import HomeBlocks from "../components/WPGBlocks/Home";
import "../assets/sass/homepage.sass";

// import { GET_FORMINATOR_FORM } from '../data'
import { gql, useQuery } from '@apollo/client';
import { useEffect, useRef, useState } from "react";

const IndexPage: React.FC<IPageProps> = ({ data: { wpPage: page, wp: form } }: any) => {

  const getPageInfo = gql`
  query getPageInfo {
    nodeByUri(uri: "/") {
      id
      ... on Page {
        title
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
  //useEffect
  useEffect(() => {
    if (data) {
      setBlocks(data.nodeByUri.blocks);
    }
  }, [data]);

  return (
    <>
      <Seo post={page} />
      <Layout>
        <HomeBlocks blocks={blocks} />
      </Layout >
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    wp {
      getForminatorFormById
    }
    wpPage(isFrontPage: {eq: true}) {
      nodeType
      title
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
`