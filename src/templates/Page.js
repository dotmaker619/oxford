import React from "react"
import { graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Slices from "../components/Slices"
import CustomForm from "../components/CustomForm"

export const PageTemplate = ({
  data: {
    prismicPage: {
      uid,
      data: { body: slices, ...page },
    },
  },
}) => {
  return (
    <Layout>
      <SEO page={page} />
      {uid === "custom" && <CustomForm />}
      <Slices slices={slices} />
    </Layout>
  )
}

export default withPreview(PageTemplate)

export const PageTemplateQuery = graphql`
  query PageTemplate($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      href
      data {
        seo_title
        seo_description
        seo_keywords
        seo_image {
          url(imgixParams: { w: 1200 })
        }
        title {
          text
        }
        body {
          ... on PrismicPageBodyTitle {
            ...SliceTitle
          }
          ... on PrismicPageBodyParagraph {
            ...SliceParagraph
          }
          ... on PrismicPageBodyColumns {
            ...SliceColumns
          }
          ... on PrismicPageBodyBlockquote {
            ...SliceBlockquote
          }
          ... on PrismicPageBodyVideo {
            ...SliceVideo
          }
          ... on PrismicPageBodySpotlight {
            ...SliceSpotlight
          }
          ... on PrismicPageBodyHero {
            ...SliceHero
          }
          ... on PrismicPageBodyImage {
            ...SliceImage
          }
          ... on PrismicPageBodyFaq {
            ...SliceFAQ
          }
          ... on PrismicPageBodyCards {
            ...SliceCards
          }
          ... on PrismicPageBodyFeatures {
            ...SliceFeatures
          }
        }
      }
    }
  }
`
