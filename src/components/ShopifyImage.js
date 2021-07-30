import React from "react"

export const resizeUrl = ({ size, src }) => {
  if (!src) return null

  var base = src.split("/")
  var filename = base.pop()
  base = base.join("/")

  if (size) {
    const components = filename.split(".")

    var name = filename.split(".")[0]
    const extension = components[components.length - 1]
    name += `_${size}`
    filename = `${name}.progressive.${extension}`
  }

  return [base, filename].join("/")
}

const ShopifyImage = props => {
  const { size, src } = props
  const url = resizeUrl({ size, src })

  return <img alt="" {...props} src={url} />
}

export default ShopifyImage
