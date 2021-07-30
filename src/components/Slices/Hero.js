import React from "react"
import Link from "../Link"
import { graphql } from "gatsby"

const Hero = ({ className, images, title, content, link_text, link_path }) => (
  <div
    className={`relative h-screen-50 bg-blue-900 flex items-center justify-center ${className}`}
  >
    <div className="flex z-0 absolute inset-0 opacity-25">
      {images.map((image, i) => (
        <div
          className="bg-cover bg-center flex-grow"
          style={{ backgroundImage: `url(${image.url})` }}
          key={i}
        />
      ))}
    </div>
    <div className="text-center text-white py-8 px-8 md:px-24 z-10 max-w-4xl">
      <h3 className="font-heading text-4xl tracking-wide md:text-5xl my-6 uppercase">
        {title}
      </h3>
      {content && (
        <div
          className="my-6 text-lg prose prose-white"
          dangerouslySetInnerHTML={{
            __html: content.html,
          }}
        />
      )}
      {link_text && (
        <div className="my-6">
          <Link className="btn bg-white text-blue-900 px-8 py-4" to={link_path}>
            {link_text}
          </Link>
        </div>
      )}
    </div>
  </div>
)

export default Hero

export const fragments = graphql`
  fragment SliceHero on PrismicPageBodyHero {
    id
    slice_type
    primary {
      title
      content {
        html
      }
      link_text
      link_path
    }
    items {
      image {
        url
        alt
      }
    }
  }
`
