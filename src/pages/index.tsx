import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Banner, BannerPreload } from "../components/HomePage"

import "../assets/sass/homepage.sass";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <BannerPreload />
      <Banner />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
