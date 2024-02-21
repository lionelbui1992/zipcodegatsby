import * as React from "react";
import { useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/sass/homepage.sass";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { IPageProps } from "../shared/model/IPageProps";
import Seo from "gatsby-plugin-wpgraphql-seo";
import PhilosophyBlocks from "../components/WPGBlocks/Philosophy";

gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC<IPageProps> = ({ data: { wpPage, pageDetail } }: any) => {
  const blocks= pageDetail.nodes[0].blocks;

  const bgGrey ='https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-grey.png';
  const bgBlue ='https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-blue.png';

  const contents = [
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgGrey,
      isDarkBackground: false,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgBlue,
      isDarkBackground: true,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: '',
      isDarkBackground: false,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgGrey,
      isDarkBackground: false,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgBlue,
      isDarkBackground: true,
    },
  ];
  const lastItem = contents[contents.length - 1];
  const container = useRef(null);

  return (
    <>
      <Seo post={wpPage} />
      <Layout>
        <PhilosophyBlocks blocks={blocks} />
      </Layout>
    </>
  );
}

export default Philosophy;

export const pageQuery = graphql`
    query GET_PAGE {
        wpPage: wpPage(slug: { eq: "philosophy" }) {
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
        pageDetail: allWpPage(filter: {slug: {eq: "philosophy"}}) {
          nodes {
            title
            blocks
          }
        }
    }
`;
