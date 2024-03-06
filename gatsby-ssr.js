const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
    <script key='cookieyes' id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/175b84f94b80d2ba55f61137/script.js"></script>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
