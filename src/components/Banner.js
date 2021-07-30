import React from "react"
import Link from "./Link"

const style =
  "py-2 text-blue-900 bg-yellow-100 text-center text-xs uppercase font-heading leading-none"

const Banner = ({ html, to }) => {
  return to ? (
    <Link
      className={style}
      to={to}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <div className={style} dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default Banner
