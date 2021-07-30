import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Card } from "../components/Product"
import { isBrowser } from "react-device-detect"

const Collection = ({
  data: {
    shopifyCollection: { products, title, description, descriptionHtml, image },
  },
}) => {
  return (
    <Layout showProductNav={isBrowser}>
      <SEO title={title} description={description} image={image?.src} />
      <div className="pr-4 lg:pr-8 container-y">
        <CollectionHeader title={title} html={descriptionHtml} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
          {products.map(product => (
            <Card
              className="h-full"
              key={product.handle}
              product={product}
              to={`/products/${product.handle}`}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Collection

const CollectionHeader = ({ title, html }) => (
  <div className="p-8 md:px-8 md:py-12 bg-blue-100 mb-4">
    <h1 className="text-4xl leading-none uppercase font-heading tracking-wide mb-4">
      {title}
    </h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

const PennantOMatic = () => (
  <div className="my-12 hidden lg:block">
    <h6 className="uppercase font-heading text-xxs mb-1">New!</h6>
    <p className="text-xl leading-tight mb-4">
      Want to design your own pennant?
    </p>
    <Link
      className="rounded-lg border-2 border-blue-900 p-4 text-center block w-full text-lg font-medium font-heading uppercase hover:bg-blue-900 hover:text-white"
      to="/custom"
    >
      Pennant-o-matic
    </Link>
  </div>
)

export const CollectionTemplateQuery = graphql`
  query CollectionTemplate($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      title
      description
      descriptionHtml
      image {
        src
      }
      products {
        ...ProductFields
      }
    }
  }
`
