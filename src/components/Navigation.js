import React from "react"
import { Link } from "gatsby"

const Navigation = ({ className, items }) => (
  <nav
    className={`flex border-blue-900 font-heading uppercase bg-canvas text-xs justify-center bg-white ${className}`}
  >
    {items.map(({ path, text }, index) => (
      <Link
        className="flex items-center justify-center flex-grow px-8 text-center border-r last:border-r-0 border-b border-blue-900 w-1/2 h-12 md:w-1/4 hover:bg-blue-100"
        to={path}
        activeClassName="bg-yellow-100"
        partiallyActive={true}
        key={`navigation-${index}`}
      >
        {text}
      </Link>
    ))}
  </nav>
)

export default Navigation
