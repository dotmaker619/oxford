import React from "react"
import Link from "../../Link"
const classNames = require("classnames")

const linkTo = (type, uid) => {
  switch (type) {
    case "gallery":
      return `/gallery/${uid}`
    case "project":
      return `/collaborations/${uid}`
  }
}

const Card = ({ className, card = {}, type }) => {
  return (
    <div className={classNames(className, "text-center")}>
      <Link
        className={classNames(
          "block",
          "transform duration-200 hover:bg-gray-100 hover:-translate-y-2" // Animations
        )}
        to={linkTo(type, card.uid)}
      >
        <img
          className="bg-blue-900 w-full h-56 object-cover"
          src={card.image?.url}
          alt=""
        />
        <div className="p-4">
          <h3 className="font-heading uppercase text-lg mb-4 leading-tight">
            {card.title}
          </h3>
          <div
            className="text-xs"
            dangerouslySetInnerHTML={{ __html: card.teaser }}
          />
        </div>
      </Link>
    </div>
  )
}

export default Card
