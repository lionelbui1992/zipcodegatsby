import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Banner } from "../components/Careers/Banner";
import { Life } from "../components/Careers/Life";
import { OurCulture } from "../components/Careers/OurCulture";

const Careers: React.FC<PageProps> = () => {
  const label = 'Passion. teamwork. Mindset.';
  const bannerTitle = "Seeking<br/> Passionate Souls ";
  const bannerDescription = '<h5>Embark on the Journey with Zipcode</h5>';
  const bannerImageUrl = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/careers-banner-image.jpg';
  const bannerBackground = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/01/bg-banner-grid.png';

  const lifeTitle = 'Life @ zipcode';
  const lifeBackground = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/careers-life-bkg.jpg';

  const OurCultureTitle = 'Our Culture';
  const OurCultureimage = 'https://maasi2404zip.merket.io/wp-content/uploads/2024/02/our-culture-image.png';
  const OurCultureContent = 'We team up with the best talent to enhance our projects in the construction and real estate industry to new heights level. Moreover, we value open communication and collaboration. Our goal is to create an environment where you can thrive both personally and professionally.';

  return (
    <>
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
          OurCultureimage = {OurCultureimage}
          OurCultureContent = {OurCultureContent}
        />
      </div>          
    </>
  );
}

export default Careers

export const Head: HeadFC = () => <title>Careers</title>
