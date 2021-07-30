import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

const Gallery = ({
  data: {
    prismicGallery: { data: gallery },
  },
}) => (
  <SimpleReactLightbox>
    <SRLWrapper
      options={{
        buttons: {
          showAutoplayButton: false,
          showDownloadButton: false,
          showFullscreenButton: false,
          showThumbnailsButton: false,
        },
        caption: { showCaption: false },
        thumbnails: {
          showThumbnails: false,
        },
      }}
    >
      <Layout>
        <SEO title={gallery.title.text} />
        <div className="container container-y">
          <CollectionHeader
            title={gallery.title.text}
            html={gallery.teaser.html}
          />

          <div className="flex flex-wrap mt-2 -mx-2">
            {gallery.images.map(({ image }, i) => (
              <div className="p-2 w-1/4" key={i}>
                <a className="" href={image.large} data-attribute="SRL">
                  <img src={image.thumb} alt={image.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </SRLWrapper>
  </SimpleReactLightbox>
)

export default Gallery

const CollectionHeader = ({ title, html }) => (
  <div className="px-8 py-12 bg-blue-100">
    <h1 className="text-4xl leading-none uppercase font-heading tracking-wide mb-4">
      {title}
    </h1>
    <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

export const query = graphql`
  query GalleryQuery($uid: String!) {
    prismicGallery(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        teaser {
          html
        }
        images {
          image {
            alt
            large: url(imgixParams: { w: 1200 })
            thumb: url(imgixParams: { w: 600, h: 600, fit: "crop" })
          }
        }
      }
    }
  }
`
