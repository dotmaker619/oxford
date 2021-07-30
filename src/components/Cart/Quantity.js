import React from "react"
import { Plus, Minus } from "phosphor-react"
const classNames = require("classnames")

const Quantity = ({ onChange, value }) => (
  <div className="inline-grid grid-cols-3 items-stretch whitespace-no-wrap leading-none border border-blue-900 border-opacity-10 text-sm text-center">
    <Button onClick={() => onChange(-1)}>
      <Minus />
    </Button>
    <span className="p-2 font-mono text-xs">{value}</span>
    <Button onClick={() => onChange(+1)}>
      <Plus />
    </Button>
  </div>
)

export default Quantity

const Button = ({ children, onClick }) => (
  <button
    className={classNames(
      "p-2 font-heading leading-none border-blue-900 border-opacity-10 last:border-l first:border-r",
      "hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:bg-opacity"
    )}
    onClick={onClick}
  >
    {children}
  </button>
)
