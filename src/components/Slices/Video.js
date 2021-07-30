import React from "react"
import ReactPlayer from "react-player"
import { graphql } from "gatsby"

const Video = ({ url, size }) => (
  <div className={getSizeClass(size)}>
    <div className="relative" style={{ paddingTop: "56.25%" }}>
      <ReactPlayer
        className="absolute top-0 left-0"
        url={url}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  </div>
)

export default Video

const getSizeClass = size => {
  switch (size) {
    case "Small":
      return "max-w-2xl mx-auto py-16"
    case "Medium":
      return "max-w-4xl mx-auto py-24"
  }
}

export const fragments = graphql`
  fragment SliceVideo on PrismicPageBodyVideo {
    id
    slice_type
    primary {
      url {
        embed_url
      }
    }
  }
`
