import React from "react"
const classNames = require("classnames")

// TODO: Resize Images

const Colors = ({ options, onClick, selected, findVariant, name }) => {
  return (
    <ul className="flex flex-wrap -mx-1">
      {options?.map((option, i) => {
        // Match variant to find image
        const variant = findVariant(name, option.value)

        return (
          <li className="px-1" key={i}>
            <Color
              selected={selected === option.value}
              onClick={() => onClick(option.value)}
              style={{ backgroundImage: `url(${variant?.image?.src})` }}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Colors

const Color = ({ selected, style, onClick }) => (
  <button
    className={classNames(
      "w-10 h-10 rounded-full bg-blue-900 bg-opacity-25 border-white border",
      "bg-cover bg-center",
      "duration-200 transition-all",
      {
        "ring-2 ring-black shadow-lg transform scale-105": selected,
      }
    )}
    style={style}
    onClick={onClick}
  />
)
