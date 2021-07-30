import React, { useEffect, useState, useRef } from "react"

export const colorsdb = [
  "#474840",
  "#E70F49",
  "#0233E0",
  "#659E60",
  "#010200",
  "#CB6ADD",
  "#D84107",
  "#E3A705",
  "#50BEF8",
]

function rotate(arr, count) {
  count -= arr.length * Math.floor(count / arr.length)
  arr.push.apply(arr, arr.splice(0, count))
  return arr
}

const TitleOMatic = ({ children, className }) => {
  const [colors, setColors] = useState([...colorsdb, ...colorsdb, ...colorsdb])
  const string = children.split("")

  useInterval(() => {
    setColors([...rotate(colors, 1)])
  }, 1000)

  return (
    <span className={className}>
      {string.map((char, i) => (
        <span style={{ color: colors[i] }} key={i}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default TitleOMatic

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
