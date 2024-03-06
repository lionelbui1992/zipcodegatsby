const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <script key='cookieyes' id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/9ca54e5f306a743266c4a232/script.js"></script>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
