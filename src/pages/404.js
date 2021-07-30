import React from "react"
import { withUnpublishedPreview } from "gatsby-source-prismic"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTemplate from "../templates/Page"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="h-screen-50 flex flex-col items-center justify-center">
      <h1 className="font-heading">NOT FOUND</h1>
      <p>You lost or somethin'?</p>
    </div>
  </Layout>
)

export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    page: PageTemplate,
  },
})
