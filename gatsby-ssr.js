const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/22e28577da662dbd017fe5d0/script.js"></script>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
