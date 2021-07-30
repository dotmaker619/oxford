import React from "react"
import { graphql } from "gatsby"

const Title = ({ ttitle, subtitle }) => (
  <div className="mx-auto max-w-2xl py-12 text-center">
    <h1 className="text-4xl mb-2 font-heading uppercase">{ttitle.text}</h1>
    <div
      className="prose prose-sm text-center mx-auto"
      dangerouslySetInnerHTML={{ __html: subtitle.html }}
    />
  </div>
)

export default Title

export const fragment = graphql`
  fragment SliceTitle on PrismicPageBodyTitle {
    id
    slice_type
    primary {
      ttitle: title {
        text
      }
      subtitle {
        html
      }
    }
  }
`
