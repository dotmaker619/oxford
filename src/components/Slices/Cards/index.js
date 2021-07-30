import { graphql } from "gatsby"
import Collection from "./Collection"
export { default as Card } from "./Card"
export default Collection

export const fragment = graphql`
  fragment SliceCards on PrismicPageBodyCards {
    id
    slice_type
    items {
      card {
        document {
          ... on PrismicProject {
            id
            type
            uid
            data {
              title {
                text
              }
              teaser {
                html
              }
              image {
                url
                alt
              }
            }
          }
          ... on PrismicGallery {
            id
            type
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
                  url
                  alt
                }
              }
            }
          }
        }
      }
    }
  }
`
