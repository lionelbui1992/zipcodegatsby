import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Banner, BannerPreload, Introduce, Company, Explore } from "../components/HomePage"

import "../assets/sass/homepage.sass";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <BannerPreload />
      <Banner />
      <Introduce />
      <Company />
      <Explore />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
