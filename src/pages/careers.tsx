import * as React from "react"
import { Banner } from "../components/Careers/Banner";
import { Life } from "../components/Careers/Life";
import { OurCulture } from "../components/Careers/OurCulture";
import { TextMarquee } from "../components/TextMarquee";
import { OurValues } from "../components/Careers/OurValues";
import { CareerPerks } from "../components/Careers/CareerPerks";
import { AvailablePositions } from "../components/Careers/AvailablePositions";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { IPageProps } from "../shared/model/IPageProps";

const Careers: React.FC<IPageProps> = (props: IPageProps) => {
  // const { page } = props.data
  const label = 'Passion. teamwork. Mindset.';
  const bannerTitle = "Seeking<br/> Passionate Souls ";
  const bannerDescription = '<h5>Embark on the Journey with Zipcode</h5>';
  const bannerImageUrl = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/careers-banner-image.jpg';
  const bannerBackground = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-banner-grid.png';

  const lifeTitle = 'Life @<br/> zipcode';
  const lifeBackground = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/careers-life-bkg.jpg';

  const OurCultureTitle = 'Our Culture';
  const OurCultureImage = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/our-culture-image.png';
  const OurCultureContent = 'We team up with the best talent to enhance our projects in the construction and real estate industry to new heights level. Moreover, we value open communication and collaboration. Our goal is to create an environment where you can thrive both personally and professionally.';
  
  const OurValuesTitle = 'Our Values';
  const OurValuesContents = [
    {
      title:        "Ambition", 
      imgUrl:       'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-5.png',
      imgSecondUrl: 'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-10.png',
    },
    {
      title:        "Accountability", 
      imgUrl:       'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-1.png',
      imgSecondUrl: 'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-7.png',
    },
    {
      title:        "Integrity", 
      imgUrl:       'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-2.png',
      imgSecondUrl: 'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-6.png',
    },
    {
      title:        "Growth Mindset", 
      imgUrl:       'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-3.png',
      imgSecondUrl: 'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-8.png',
    },
    {
      title:        "Leadership and Collaboration", 
      imgUrl:       'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-4.png',
      imgSecondUrl: 'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/our-values-image-9.png',
    }
  ]
  
  const PerksTitle = 'Perks<br/> at zipcode';
  const PerksDesc = 'Just some of the reasons working here is so great.';
  const PerksContent = [
    {
      title:    "Health and wellness", 
      imgUrl:   "https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/Chang_Profile.png",
      content:  "Your personal and professional development is a priority at Zipcode. Brainfood is a budget that you can spend on activities or trainings which help you develop your hard skill and soft skill.",
    },
    {
      title:    "Brainfood (Training & Development)", 
      imgUrl:   "https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/Roong_Profile.png",
      content:  "Your personal and professional development is a priority at Zipcode. Brainfood is a budget that you can spend on activities or trainings which help you develop your hard skill and soft skill.",
    },
    {
      title:    "Provident Fund", 
      imgUrl:   "https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/CareerPerks-image-1.png",
      content:  "Your personal and professional development is a priority at Zipcode. Brainfood is a budget that you can spend on activities or trainings which help you develop your hard skill and soft skill.",
    },
    {
      title:    "Health and wellness", 
      imgUrl:   "https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/Chang_Profile.png",
      content:  "Your personal and professional development is a priority at Zipcode. Brainfood is a budget that you can spend on activities or trainings which help you develop your hard skill and soft skill.",
    },
    {
      title:    "Brainfood (Training & Development)", 
      imgUrl:   "https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/Roong_Profile.png",
      content:  "Your personal and professional development is a priority at Zipcode. Brainfood is a budget that you can spend on activities or trainings which help you develop your hard skill and soft skill.",
    },
    {
      title:    "Provident Fund", 
      imgUrl:   "https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/CareerPerks-image-1.png",
      content:  "Your personal and professional development is a priority at Zipcode. Brainfood is a budget that you can spend on activities or trainings which help you develop your hard skill and soft skill.",
    }
  ]
  
  const AvailableTitle = 'Available Positions';
  const AvailableBackground = 'https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/careers-life-bkg.jpg';
  const AvailableContent = [
    {
      content:  "Executive Assistant"
    },
    {
      content:  "Senior Construction Manager / Civil construction manager"
    },
    {
      content:  "Senior Project Development Architect"
    },
    {
      content:  "Leasing Manager"
    },
    {
      content:  "Facilities Coordinator"
    },
    {
      content:  "Senior Business Development Manager"
    },
    {
      content:  "Business Development Analyst"
    },
    {
      content:  "People Manager"
    },
    {
      content:  "Legal Officer"
    },
    {
      content:  "Quantity Surveyor Manager"
    }
  ]

  return (
    <Layout>
      <div className="careers-page">
        <Banner 
          label={label} 
          bannerTitle={bannerTitle}
          bannerDescription={bannerDescription}
          bannerImageUrl={bannerImageUrl}
          bannerBackground={bannerBackground}
        />
        <Life 
          lifeTitle = {lifeTitle}
          lifeBackground = {lifeBackground}
        />
        <OurCulture
          OurCultureTitle = {OurCultureTitle}
          OurCultureImage = {OurCultureImage}
          OurCultureContent = {OurCultureContent}
        />
        <OurValues 
          OurValuesTitle = {OurValuesTitle}
          OurValuesContents = {OurValuesContents}
        />
        <TextMarquee />
        <CareerPerks 
          PerksTitle = {PerksTitle}
          PerksDesc = {PerksDesc}
          PerksContent = {PerksContent}
        />
        <AvailablePositions 
          AvailableTitle = {AvailableTitle}
          AvailableBackground = {AvailableBackground}
          AvailableContent = {AvailableContent}
        />
      </div>          
    </Layout>
  );
}

export default Careers

export const Head = (props: IPageProps) => {
  const { page } = props.data
  return <SEOHead {...page} />
}
export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
