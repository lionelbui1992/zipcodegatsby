import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { AboutPage } from "../components/AboutPage"

const About: React.FC<PageProps> = () => {
  return (
    <AboutPage />
  )
}

export default About

export const Head: HeadFC = () => <title>About</title>
