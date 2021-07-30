import React from "react"
import { graphql } from "gatsby"
import Link from "../Link"

const Columns = ({ columns }) => {
  let size = "w-full"

  return (
    <section className="my-24 lg:mx-24">
      <div className="flex flex-row flex-wrap ">
        {columns.map((column, index) => (
          <Link
            className="pb-12 text-center px-8 w-full md:w-1/3 md:pb-0"
            key={index}
            to={column.path || "/"}
          >
            <img
              src={column.image.url}
              className="block object-contain mb-4 w-full"
              alt=""
            />
            {column.title && (
              <div className="font-heading uppercase md:text-xl text-blue-900 mt-4 md:mt-12 font-bold leading-tight">
                {column.title}
              </div>
            )}
            {column.description && (
              <div
                className="text-xs text-blue-900"
                dangerouslySetInnerHTML={{ __html: column.description.html }}
              />
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Columns

export const fragments = graphql`
  fragment SliceColumns on PrismicPageBodyColumns {
    id
    slice_type
    items {
      button_path
      button_text
      image_size
      header {
        html
      }
      description {
        html
      }
      image {
        url
        alt
      }
    }
  }
`
