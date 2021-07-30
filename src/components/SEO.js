import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import StoreContext from "../context/StoreContext"

const SEO = ({
  description,
  lang,
  meta,
  title,
  image,
  page,
  keywords,
  preload = [],
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaTitle =
    title || page?.seo_title || page?.title?.text || page?.title || ""
  const metaDescription =
    description || page?.seo_description || site.siteMetadata.description || ""
  const metaImage = image || page?.seo_image?.url || page?.image?.url || ""
  const metaKeywords = keywords || page?.seo_keywords || ""
  const { navOpen, cartOpen } = useContext(StoreContext)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      bodyAttributes={{ class: (navOpen || cartOpen) && "modal-open" }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        { name: `keywords`, content: metaKeywords },
        { property: `og:image`, content: metaImage },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ]}
    >
      <script
        src="https://kit.fontawesome.com/4075b347c7.js"
        crossorigin="anonymous"
      />
      {preload.map((href, i) => (
        <link rel="preload" href={href} as="image" key={i} />
      ))}
    </Helmet>
  )
}

export default SEO
