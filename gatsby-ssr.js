const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <script key='cookieyes' id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/10fdd5f61ab2563064e798d7/script.js"></script>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
