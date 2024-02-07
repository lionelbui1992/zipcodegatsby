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

  return (
    <Layout>
      <div className="projects-page">
        <Banner />
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

