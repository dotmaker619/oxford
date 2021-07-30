import React from "react"
import Link from "../Link"
const classNames = require("classnames")

const cellStyle = length => {
  switch (length) {
    case 1:
      return "w-full p-24"
    case 2:
      return "w-full md:w-1/2 p-16"
    case 3:
      return "w-full md:w-1/3 lg:p-8"
    case 4:
      return "w-full md:w-1/2"
    default:
      return "w-full"
  }
}

const imageWidth = size => {
  switch (size) {
    case "Small":
      return "w-1/3 md:h-24 mx-auto"
    case "Medium":
      return "w-1/2"
    case "Large":
      return "w-full"
  }
}

const ContentGrid = ({ cells = [] }) => (
  <div className="slice-content-grid flex flex-wrap items-stretch justify-items-auto">
    {cells.map((c, key) => (
      <Cell
        key={key}
        header={c.header.html}
        content={c.description.html}
        image={{
          ...c.image,
          size: c.image_size,
        }}
        button={{
          text: c.button_text,
          path: c.button_path,
        }}
      />
    ))}
  </div>
)

export default ContentGrid

export const Cell = ({ className, image, header, content, button }) => {
  const isBleed = image && image.size === "Bleed"
  const showOverlay = isBleed && content

  return (
    <div
      className={classNames(
        className,
        "bg-cover bg-center relative w-full p-8",
        "md:flex-1 md:min-h-0 md:p-16",
        { "text-white min-h-screen-50": isBleed }
      )}
      style={{ backgroundImage: `url(${isBleed && image.url})` }}
    >
      <div
        className={classNames("md:items-start md:text-left", {
          "bg-blue-900 bg-opacity-75": showOverlay,
        })}
      >
        {false && image?.url && !isBleed && (
          <img
            className={classNames("mb-4", imageWidth(image.size))}
            src={image.url}
            alt={image.alt}
          />
        )}

        {header && (
          <div className="my-4" dangerouslySetInnerHTML={{ __html: header }} />
        )}

        {content && (
          <div
            className="my-4 prose prose-sm"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        {button?.text && (
          <div className="my-4">
            <Link className="btn btn-navy" to={button.path}>
              {button.text}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
