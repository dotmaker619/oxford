import React from "react"

const Customize = ({ onChange, value }) => (
  <input
    className="w-full"
    type="text"
    value={value || ""}
    onChange={onChange}
  />
)

export default Customize
