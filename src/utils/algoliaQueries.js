const productQuery = `
  query AlgoliaProducts {
    allShopifyProduct(filter: {tags: {nin: "hidden"}}) {
      nodes {
        id
        handle
        title
        description
        productType
        updatedAt
        images {
          originalSrc
        }
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
      }
    }
  }
`

const pageQuery = `
  query {
    allPrismicPage {
      nodes {
        uid
        last_publication_date
        data {
          title {
            text
          }
        }
      }
    }
  }
`

module.exports = [
  {
    query: productQuery,
    transformer: ({ data }) =>
      data.allShopifyProduct.nodes.map(p => ({
        objectID: p.id,
        title: p.title,
        handle: p.handle,
        image: p.images[0] && p.images[0].originalSrc,
        productType: p.productType,
        description: p.description,
        price: p.priceRange.minVariantPrice.amount,
        path: `/products/${p.handle}`,
        type: "Product",
        modified: p.updatedAt,
      })),
    indexName: "Products",
    settings: {
      attributesToSnippet: ["description:20"],
      searchableAttributes: ["title"],
    },
  },
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.allPrismicPage.nodes.map(p => ({
        objectID: p.uid,
        title: p.data.title.text,
        path: `/${p.uid}`,
        type: "Page",
        modified: p.last_publication_date,
      })),
    indexName: "Pages",
    settings: {
      searchableAttributes: ["title"],
    },
  },
]
