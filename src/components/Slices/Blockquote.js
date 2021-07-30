import React from "react"
import { graphql } from "gatsby"

const Blockquote = ({ html }) => (
  <blockquote
    className="my-12 text-2xl italic lg:px-16 xl:px-24"
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

export default Blockquote

export const fragments = graphql`
  fragment SliceBlockquote on PrismicPageBodyBlockquote {
    id
    slice_type
    primary {
      quote {
        html
      }
    }
  }
`
