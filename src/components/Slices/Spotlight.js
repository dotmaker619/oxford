import React from "react"
import { Link, graphql } from "gatsby"
import { Card } from "../Product"

const reformatProduct = product => {
  return {
    ...product,
    images: product.images.map(i => ({ originalSrc: i.src, altText: i.alt })),
  }
}

const Spotlight = ({
  title,
  icon,
  products,
  buttonPath,
  buttonText,
  content: { html: content },
}) => {
  return (
    <div className="my-8 container">
      <div className="md:flex md:-mx-8 md:items-start">
        {/* Card */}
        <div className="md:w-1/3 lg:w-2/5 p-8 md:flex md:sticky md:top-24">
          <div className="text-center max-w-sm mx-auto ">
            <img
              className="my-3 h-20 md:h-48 mx-auto"
              src={icon.url}
              alt={icon.alt}
            />
            <h2 className="my-3 text-2xl lg:text-2xl font-heading">{title}</h2>
            <div
              className="my-3 text-center prose prose-sm"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <Link className="btn btn-orange" to={buttonPath}>
              {buttonText}
            </Link>
          </div>
        </div>

        {/* Products */}
        <div className="md:w-2/3 lg:w-3/5 md:px-8">
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, i) => (
              <Card
                product={reformatProduct(product)}
                key={i}
                to={`/products/${product.handle}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spotlight

export const fragments = graphql`
  fragment SliceSpotlight on PrismicPageBodySpotlight {
    id
    slice_type
    items {
      product
    }
    primary {
      title
      buttonPath
      buttonText
      icon {
        url
        alt
      }
      content {
        html
      }
    }
  }
`
