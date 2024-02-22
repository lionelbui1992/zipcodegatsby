import * as React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { IPageProps } from "../shared/model/IPageProps";
import Seo from "gatsby-plugin-wpgraphql-seo";
import HomeBlocks from "../components/WPGBlocks/Home";
import "../assets/sass/homepage.sass";

const IndexPage: React.FC<IPageProps> = ({ data: { wpPage: page, wp: form } }: any) => {

  const blocks = page.blocks;

  console.log(form.getForminatorFormById)
  console.log(JSON.parse(form.getForminatorFormById))


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