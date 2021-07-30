import React from "react"

const FormGroup = ({ name, children }) => (
  <div className="my-4">
    <h5 className="text-sm mb-2">{name}</h5>
    {children}
  </div>
)

export default FormGroup
