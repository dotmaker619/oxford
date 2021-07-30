const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()
  config.node = {
    fs: "empty",
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const products = graphql(`
    query {
      allShopifyProduct(
        filter: { tags: { ne: "hidden" } }
        sort: { fields: [title] }
      ) {
        nodes {
          id
          handle
          productType
        }
      }
    }
  `).then(({ data }) => {
    data.allShopifyProduct.nodes.forEach(node => {
      createPage({
        path: `/products/${node.handle}`,
        component: path.resolve(`./src/templates/Product.js`),
        context: {
          productId: node.id,
          productType: node.productType,
        },
      })
    })
  })

  const collections = graphql(`
    query {
      allShopifyCollection {
        nodes {
          handle
        }
      }
    }
  `).then(({ data }) => {
    data.allShopifyCollection.nodes.forEach(node => {
      createPage({
        path: `/collections/${node.handle}`,
        component: path.resolve(`./src/templates/Collection.js`),
        context: {
          handle: node.handle,
        },
      })
    })
  })

  const pages = graphql(`
    query {
      allPrismicPage {
        nodes {
          uid
          url
        }
      }
    }
  `).then(({ data }) => {
    data.allPrismicPage.nodes.forEach(node => {
      createPage({
        path: node.url,
        component: path.resolve(`./src/templates/Page.js`),
        context: {
          uid: node.uid,
        },
      })
    })
  })

  const projects = graphql(`
    query {
      allPrismicProject {
        nodes {
          uid
          data {
            shopify_collection_handle
          }
        }
      }
    }
  `).then(({ data }) => {
    data.allPrismicProject.nodes.forEach(
      ({ uid, data: { shopify_collection_handle } }) => {
        createPage({
          path: `/collaborations/${uid}`,
          component: path.resolve(`./src/templates/Project.js`),
          context: {
            uid: uid,
            shopify_collection_handle,
          },
        })
      }
    )
  })

  // const lookbooks = graphql(`
  //   query {
  //     allPrismicInstagram {
  //       nodes {
  //         id
  //       }
  //     }
  //   }
  // `).then(({ data }) => {
  //   data.allPrismicInstagram.nodes.forEach(({ id }) => {
  //     createPage({
  //       path: `/lookbook/${id}`,
  //       component: path.resolve(`./src/templates/Lookbook.js`),
  //       context: { id: id },
  //     })
  //   })
  // })

  const galleries = graphql(`
    query {
      allPrismicGallery {
        nodes {
          uid
        }
      }
    }
  `).then(({ data }) => {
    data.allPrismicGallery.nodes.forEach(({ uid }) => {
      createPage({
        path: `/gallery/${uid}`,
        component: path.resolve(`./src/templates/Gallery.js`),
        context: { uid },
      })
    })
  })

  return Promise.all([products, pages, collections, projects, galleries])
}
