import * as React from "react"
import { StyleGuide } from "../components/StyleGuide";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { IPageProps } from "../shared/model/IPageProps";

const StyleGuidePage: React.FC<IPageProps> = (props: IPageProps) => {
    // const { page } = props.data
    return (
        <Layout>
            <StyleGuide />
        </Layout>
    )
}

export default StyleGuidePage

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