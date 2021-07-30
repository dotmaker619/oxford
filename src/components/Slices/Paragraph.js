import React from "react"
import { graphql } from "gatsby"

const Paragraph = ({ html }) => (
  <div className="container-page my-12">
    <div
      className="prose prose-lg"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)

export default Paragraph

export const fragments = graphql`
  fragment SliceParagraph on PrismicPageBodyParagraph {
    id
    slice_type
    primary {
      content {
        html
      }
    }
  }
`
