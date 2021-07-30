import React, { useEffect, useState, useMemo } from "react"
import { Helmet } from "react-helmet"
import { resizeUrl } from "../ShopifyImage"
import Link from "../Link"
import { Price } from "./"
const classNames = require("classnames")

// Builds an array of exactly 2 images for the card
// Default is the first image twice
// If an image with the alt text containing "lifestyle" is found it replaces #2
// If no lifestyle, and a secondary image is found, use it
//
const cardImages = product => {
  if (!product) return null
  // Initial array as worst case scenario
  var output = [product.images[0], product.images[0]]

  // Check for a lifestyle image
  const lifestyle = product.images.find(i => i.altText?.includes("lifestyle"))
  if (lifestyle) {
    output[1] = lifestyle
  }
  // If no lifestyle, check for a second image
  else if (product.images[1]) {
    output[1] = product.images[1]
  }

  // Returns an array of smaller thumbnails
  return output.map(i => resizeUrl({ src: i?.originalSrc, size: "500x500" }))
}

export default props =>
  props && props.to ? (
    <Link className="block h-full" to={props.to}>
      <Card {...props} />
    </Link>
  ) : (
    <Card {...props} />
  )

export const Card = ({ className, product }) => {
  console.log(product)
  const [hover, setHover] = useState(false)
  const images = useMemo(() => cardImages(product), [product])
  if (!product) return null

  return (
    <div
      className={classNames(
        className,
        "h-full border border-blue-900 rounded-lg overflow-hidden flex flex-col",
        "transition-all duration-200 transform",
        "hover:-translate-y-1 hover:shadow-lg"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Helmet>
        {images.map((href, i) => (
          <link rel="preload" href={href} as="image" key={i} />
        ))}
      </Helmet>
      {product.images && product.images[0] && (
        <img
          src={hover ? images[1] : images[0]}
          className={classNames(
            "h-32 md:h-48 w-full bg-white object-center",
            hover ? "object-cover" : "object-contain"
          )}
          alt={product.title || ""}
        />
      )}
      <div className="p-3 border-t border-blue-900 bg-yellow-100 bg-opacity-25 flex-grow text-sm flex flex-col justify-between">
        <h5 className="leading-tight font-heading uppercase mb-1">
          {product.title}
        </h5>
        <p className="whitespace-nowrap">
          <Price product={product} />
        </p>
      </div>
    </div>
  )
}
