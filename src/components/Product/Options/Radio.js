import React from "react"
const classNames = require("classnames")

const Radio = ({ options, onClick, selected, name, findVariant }) => (
  <div className="flex flex-wrap">
    {options?.map((option, i) => {
      const available = findVariant(name, option.value).available
      return (
        <button
          disabled={!available}
          className={classNames(
            "text-xs uppercase font-heading px-3 py-2 border border-blue-900 mr-1 mb-1 cursor-pointer",
            "disabled:opacity-25",
            selected === option.value
              ? "bg-blue-900 text-white"
              : "hover:bg-gray-100"
          )}
          onClick={() => onClick(option.value)}
          key={i}
        >
          {option.value}
        </button>
      )
    })}
  </div>
)

export default Radio
