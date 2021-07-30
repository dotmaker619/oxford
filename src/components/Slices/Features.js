import React from "react"
import { graphql } from "gatsby"

const Features = ({ features }) => (
  <section className="py-12 bg-blue-900 bg-opacity-10">
    <div className="container flex flex-wrap justify-around items-start">
      {features.map((feature, index) => (
        <div
          className="flex flex-col justify-center text-center max-w-sm py-4"
          key={index}
        >
          <img
            className="h-32 mb-4"
            src={feature.icon.url}
            alt={feature.icon.alt}
          />
          <h6 className="text-lg mb-1">{feature.title.text}</h6>
          <div
            className="font-light prose prose-sm"
            dangerouslySetInnerHTML={{ __html: feature.content.html }}
          />
        </div>
      ))}
    </div>
  </section>
)

export default Features

export const fragments = graphql`
  fragment SliceFeatures on PrismicPageBodyFeatures {
    id
    slice_type
    items {
      icon {
        url
        alt
      }
      title {
        text
      }
      content {
        html
      }
    }
  }
`
