import React from "react"
import { graphql } from "gatsby"

const Image = ({ alt, src }) => (
  <div
    className="h-screen-50 bg-cover bg-center"
    style={{ backgroundImage: `url(${src})` }}
  />
)

export default Image

export const fragments = graphql`
  fragment SliceImage on PrismicPageBodyImage {
    id
    slice_type
    primary {
      image {
        url
        alt
      }
    }
  }
`
