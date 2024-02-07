import * as React from "react"
import { Banner } from "../components/Philosophy/Banner";
import { ImageWithText } from "../components/Philosophy/ImageWithText";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { IPageProps } from "../shared/model/IPageProps";

const Philosophy: React.FC<IPageProps> = (props: IPageProps) => {
  // const { page } = props.data
  const label = 'Perspective. Passion. Precision.';
  const bannerTitle = "Zipcode's difference lies in our design and build principles.";
  const bannerDescription = 'At our core, we are passionate creators and makers. Our design and build principles articulate our mindset, guiding how we conceptualize and deliver each project.';
  const bannerImageUrl = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-banner.jpg';
  const bannerBackground = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-banner-grid.png';

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
  ]

  
  return (
    <Layout>
      <Banner 
        label={label} 
        bannerTitle={bannerTitle} 
        bannerDescription={bannerDescription} 
        bannerImageUrl={bannerImageUrl} 
        bannerBackground={bannerBackground} 
      />
      {contents.map((list, index) => (
        <ImageWithText 
          index={index + 1}
          title={list.title} 
          des={list.des} 
          imgUrl={list.imgUrl} 
          backgroundUrl={list.backgroundUrl} 
          isDarkBackground={list.isDarkBackground}
        />
      ))}
    </Layout>
  );
}

export default Philosophy

export const Head = (props: IPageProps) => {
  const { page } = props.data
  return <SEOHead {...page} />
}
// export const query = graphql`
//   query PageContent($id: String!) {
//     page(id: { eq: $id }) {
//       id
//       title
//       slug
//       description
//       image {
//         id
//         url
//       }
//       html
//     }
//   }
// `
