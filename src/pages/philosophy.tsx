import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Banner } from "../components/Philosophy/Banner";
import { ImageWithText } from "../components/Philosophy/ImageWithText";

const Philosophy: React.FC<PageProps> = () => {
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
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgBlue,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: '',
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgGrey,
    },
    {
      title: "We look further—beyond the financials and at the planet. ", 
      des: "Sustainability starts with treating the natural environment and people as stakeholders. Our projects feature climate-responsive designs, innovative green technologies, and sustainable builds that are conscious and cost-efficient. Project Koala is one of Thailand's first to track its carbon footprint. We work with nature and time, not against them. ",
      imgUrl: 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/philosophy-content.jpg',
      backgroundUrl: bgBlue,
    },
  ]

  
  return (
    <>
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
        />
      ))}
    </>
  );
}

export default Philosophy

export const Head: HeadFC = () => <title>Philosophy</title>
