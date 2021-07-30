import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import LookbookCard from "../components/LookbookCard"
import Instagram from "../components/Slices/Instagram"

export const LookbookTemplate = props => {
  const {
    data: {
      prismicInstagram: { id, data: post },
    },
  } = props

  return (
    <Layout>
      <SEO title="Lookbook" />
      <div className="p-12">
        <LookbookCard id={id} post={post} />
        <Instagram title="SHOP INSTAGRAM" />
      </div>
    </Layout>
  )
}

export default LookbookTemplate

export const LookbookTemplateQuery = graphql`
  query LokobookTemplate($id: String!) {
    prismicInstagram(id: { eq: $id }) {
      id
      data {
        instagram {
          url
        }
        image {
          url
        }
        products {
          product
        }
      }
    }
  }
`
