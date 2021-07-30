import * as React from "react"
import { withPreviewResolver } from "gatsby-source-prismic"
import linkResolver from "../utils/linkResolver"
import Layout from "../components/Layout"

const PreviewPage = ({ isPreview, isLoading }) => {
  if (isPreview === false) return "Not a preview!"

  return (
    <Layout>
      <div className="flex items-center justify-center w-full h-128">
        <p>Loading...</p>
      </div>
    </Layout>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.GATSBY_PRISMIC_REPO,
  linkResolver: linkResolver,
})
