import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import Layout from "./src/templates/layout"
import "./src/assets/css/styles.css"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}