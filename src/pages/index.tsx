import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { HomeDesktop } from "../components/Home"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <HomeDesktop />
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
