import { graphql } from "gatsby"

export const Product = graphql`
  fragment ProductFields on ShopifyProduct {
    id
    shopifyId
    productType
    title
    handle
    description
    descriptionHtml
    availableForSale
    options {
      name
      values
    }
    images {
      originalSrc
      altText
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
`

export const variantFields = graphql`
  fragment ProductVariantFields on ShopifyProductVariant {
    shopifyId
    price
    selectedOptions {
      name
      value
    }
    image {
      originalSrc
    }
  }
`
