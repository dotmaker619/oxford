import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import LookbookCard from "../components/LookbookCard"

const Lookbook = ({
  data: {
    allPrismicInstagram: { nodes: posts },
  },
}) => (
  <Layout>
    <div className="p-12">
      {posts.map((post, i) => (
        <LookbookCard id={post.id} post={post.data} key={i} />
      ))}
    </div>
  </Layout>
)

export default Lookbook

export const LookbookQuery = graphql`
  query LookbookQuery {
    allPrismicInstagram(sort: { fields: data___date, order: DESC }) {
      nodes {
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
  }
`
