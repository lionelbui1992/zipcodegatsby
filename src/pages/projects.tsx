import * as React from "react"
import { Banner } from "../components/ProjectsPage/Banner";
import { TextMarquee } from "../components/TextMarquee";
import { BoxContent } from "../components/ProjectsPage/BoxContent";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { IPageProps } from "../shared/model/IPageProps";

const Projects: React.FC<IPageProps> = (props: IPageProps) => {
  // const { page } = props.data
  const BoxContentTitle = 'Design-Driven. <br />Human-Centered. <br />Category-Challenging.';
  const BoxContentContent = 'Places and spaces have never been as vital as they are today. Because in an increasingly virtual world, something real is of even greater value, not just as an asset but for our growth and development. Because how and why we make things is as important as what we make.';
  const BoxContentButtonLink = '#';
  const BoxContentButtonText = 'Our Design & Build Philosophy';

  const ProjectBannerHeading = 'Spaces & Places';
  const ProjectBannerButton = 'Read more';
  const ProjectBannerBkgPopup = "https://wordpress-897316-4088707.cloudwaysapps.com/headless/wp-content/uploads/2024/02/projects-popup-bkg.jpg";
  const ProjectBannerContent = [
    {
      title:         "Project <span class='image'></span> Koala", 
      subtitle:      "A Universe within A University.", 
      imgUrl:        "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/page-projects-image-1.jpg",
      galleries: [
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectKoala-image-1.png",
          item_content: "<h6>“Bangkok University's (BU) Best-in-class Student Residence”</h6>",
        },
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectKoala-image-2.png",
          item_content: "<p>With Bangkok University's support and pre-owned land, Project Koala will offer a higher quality product that is truly integrated into the modern student lifestyle, uplifting the standard of living and learning for the student community.</p>",
        },
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectKoala-image-3.png",
          item_content: "<p>Without a university-backed student residence and over 37,000 students, there is a clear unaddressed gap in the market and offering.</p>",
        }
      ]
    },
    {
      title:         "Project <span class='image'></span> Kanga", 
      subtitle:      "A Limitless Creative Oasis.", 
      imgUrl:        "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/page-projects-image-2.jpg",
      galleries: [
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectKanga-image-1.png",
          item_content: '<p><span class="h6">“Bangkok University\'s (BU) Best-in-class Student Residence”</span> in the heart of Bangkok, Kanga is Hybrid Space for Productivity, Creativity and Lifelong Learning.</p>',
        },
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectKanga-image-2.png",
          item_content: "<p>A mixed-use development offering new generation approach to of office spaces, learning zone, art spaces, retail, food & beverage along with an active zone for sports and pet zone.</p>",
        },
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectKanga-image-3.png",
          item_content: "<p>Inspired to serve the needs of the city, Kanga offers a wide range of unique activities for you and your important ones to have fun, recharge & relax, learn, and discover the undiscovered.</p>",
        },
      ]
    },
    {
      title:         "Project <span class='image'></span> Heyday", 
      subtitle:      "An Experience Like No Other.", 
      imgUrl:        "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/page-projects-image-3.jpg",
      galleries: [
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectHeyday-image-1.png",
          item_content: "<p>We provided amenities and shops that will <strong>recharge student’s batteries after a long day on campus.</strong></p>",
        },
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectHeyday-image-2.png",
          item_content: "<p>With easy access within walking distance from the campus, students will enjoy our shops and restaurants, shared dining space, co-working space, and outdoor area with events and workshops that support their lifestyle activities.</p>",
        },
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectHeyday-image-3.png",
          item_content: "<p>More text needed</p>",
        },
      ]
    },
    {
      title:         "DIB Museum <span class='image'></span> Bangkok", 
      subtitle:      "A Boundaryless Museum-in-a District.", 
      imgUrl:        "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/page-projects-image-3.jpg",
      galleries: [
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectHeyday-image-1.png",
          item_content: "<p>We provided amenities and shops that will <strong>recharge student’s batteries after a long day on campus.</strong></p>",
        },
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectHeyday-image-2.png",
          item_content: "<p>With easy access within walking distance from the campus, students will enjoy our shops and restaurants, shared dining space, co-working space, and outdoor area with events and workshops that support their lifestyle activities.</p>",
        },
        {
          item_image:   "https://maasi2404zip.merket.io/wp-content/uploads/2024/02/ProjectHeyday-image-3.png",
          item_content: "<p>More text needed</p>",
        },
      ]
    }
  ]
  
  return (
    <Layout>
      <div className="projects-page">
        <Banner 
          ProjectBannerHeading={ProjectBannerHeading}
          ProjectBannerButton={ProjectBannerButton}
          ProjectBannerBkgPopup={ProjectBannerBkgPopup}
          ProjectBannerContent={ProjectBannerContent}
        />
        <TextMarquee />
        <BoxContent 
          BoxContentTitle={BoxContentTitle} 
          BoxContentContent={BoxContentContent} 
          BoxContentButtonLink={BoxContentButtonLink} 
          BoxContentButtonText={BoxContentButtonText} 
        />
      </div>
    </Layout>
  );
}

export default Projects

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

