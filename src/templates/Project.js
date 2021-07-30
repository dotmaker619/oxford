import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"
import { Card } from "../components/Product"

const Project = ({
  data: {
    prismicProject: {
      data: {
        title: { text: title },
        body: slices,
        ...page
      },
    },
    shopifyCollection,
  },
}) => {
  return (
    <Layout header={true}>
      <SEO
        title={page.seo_title || title}
        description={page.seo_description}
        image={page.seo_image?.url}
        keywords={page.seo_keywords}
      />

      <Slices slices={slices} />

      {shopifyCollection && (
        <div className="container xl:max-w-6xl mx-auto my-8">
          <div className="flex flex-wrap items-stretch -mx-2">
            {shopifyCollection.products.map((product, i) => (
              <div className="px-2 w-1/2 md:w-1/3 lg:w-1/4 mb-4" key={i}>
                <Card
                  className="h-full"
                  to={`/products/${product.handle}`}
                  product={product}
                  title={product.title}
                  images={product.images.map(i => i.originalSrc)}
                  price={product.priceRange.minVariantPrice.amount}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Project

export const ProjectTemplateQuery = graphql`
  query ProjectTemplate($uid: String!, $shopify_collection_handle: String) {
    prismicProject(uid: { eq: $uid }) {
      data {
        title {
          text
        }
        seo_title
        seo_description
        seo_keywords
        seo_image {
          url(imgixParams: { w: 1200 })
        }
        image {
          url
        }
        body {
          ... on PrismicProjectBodyContentGrid {
            id
            slice_type
            items {
              image_size
              header {
                html
              }
              description {
                html
              }
              image {
                url
                alt
              }
            }
          }
          ... on PrismicProjectBodyImage {
            id
            slice_type
            primary {
              image {
                url
                alt
              }
            }
          }
          ... on PrismicProjectBodyVideo {
            id
            slice_type
            primary {
              size
              url {
                embed_url
              }
            }
          }
        }
      }
    }

    shopifyCollection(handle: { eq: $shopify_collection_handle }) {
      products {
        title
        handle
        images {
          originalSrc
        }
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
      }
    }
  }
`
