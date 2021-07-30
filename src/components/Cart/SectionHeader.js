import React from "react"
const classNames = require("classnames")

const SectionHeader = ({ className, children }) => (
  <div
    className={classNames(className, "px-4 pb-2 pt-8 font-heading uppercase")}
  >
    {children}
  </div>
)

export default SectionHeader
