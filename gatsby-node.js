const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "wpImagePassthroughResolver",
    extend(options) {
      const { args } = getGatsbyImageResolver()
      return {
        args,
        async resolve(source, args, context, info) {
          const imageType = info.schema.getType("ImageSharp")
          const file = context.nodeModel.getNodeById({
            id: source.localFile?.id,
          })
          if (!file) return null
          const image = context.nodeModel.getNodeById({
            id: file.children[0],
          })
          const resolver = imageType.getFields().gatsbyImageData.resolve
          if (!resolver) return null
          return await resolver(image, args, context, info)
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "wpRecursiveImage",
    extend(options) {
      return {
        async resolve(source, args, context, info) {
          return source
        },
      }
    },
  })
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  if (!node.internal.type.includes("Wp")) return

  if (node.internal.type === "WpPage") {
    actions.createNode({
      ...node.page,
      id: createNodeId(`${node.id} >>> Page ${node.slug}`),
      internal: {
        type: "Page",
        contentDigest: node.internal.contentDigest,
      },
      parent: node.id,
      _id: node.id,
      slug: node.slug,
      title: node.title,
      description: node.page?.description,
      image: node.featuredImage?.node?.id,
      html: node.content,
    })
  }
}

exports.createPages = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header.tsx"),
  });
  createSlice({
    id: "preload",
    component: require.resolve("./src/components/Preload/Preload.tsx"),
  });
  createSlice({
    id: "clipPath",
    component: require.resolve("./src/components/Preload/ClipPath.tsx"),
  });
  createSlice({
    id: "footer",
    component: require.resolve("./src/components/footer.tsx"),
  });
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  // If the page path does not start with /404, create a new page for the 404 component
  if (page.path.match(/^\/404/)) {
    page.matchPath = "/*"
    createPage(page)
  }
}