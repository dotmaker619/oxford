import React from "react"
import { price as format } from "../../utils"

const priceFor = obj => {
  if (obj.priceRange) {
    return {
      min: obj.priceRange.minVariantPrice.amount,
      max: obj.priceRange.maxVariantPrice.amount,
    }
  }

  if (obj.price_min) {
    return {
      min: obj.price_min / 100,
      max: obj.price_max / 100,
    }
  }

  const variant = obj.variants[0]
  if (variant) {
    return {
      min: variant.price,
      max: variant.price,
    }
  }
}

const Price = ({ product }) => {
  const price = priceFor(product)

  if (product.availableForSale === false) {
    return (
      <>
        <s>{format(price.min)}</s>
        &nbsp;&nbsp; Sold Out
      </>
    )
  }

  if (price.min !== price.max) {
    return (
      <>
        {format(price.min)} - {format(price.max)}
      </>
    )
  }

  return format(price.min)
}

export default Price
