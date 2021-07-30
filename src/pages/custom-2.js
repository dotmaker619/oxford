import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const types = ["Pennant", "Camp Flag", "Banner", "Not Sure"]

const Custom2 = ({
  data: {
    prismicCustom: {
      data: { type_style: typeStyles, icons, colors, content },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="PENNANT-O-MATIC!" />

      <div className="container">
        <div className="flex flex-wrap -mx-4"></div>
      </div>
    </Layout>
  )
}

export default Custom2

const Field = ({ children, title }) => (
  <label className="block mb-4">
    <div className="font-heading text-xs uppercase mb-4 tracking-wider">
      {title}
    </div>
    {children}
  </label>
)

export const CustomQuery = graphql`
  query Custom2Query {
    prismicCustom {
      data {
        content {
          html
        }
        type_style {
          name
          image {
            url
          }
        }
        icons {
          icon {
            url
          }
          name
        }
        colors {
          color
          name
        }
      }
    }

    shopifyProduct(handle: { eq: "pennant-o-matic" }) {
      variants {
        shopifyId
        priceV2 {
          amount
        }
      }
    }
  }
`
