import React, { useContext, useEffect, useMemo, useState } from "react"
import useSWR from "swr"
import { useClientUnsafe } from "gatsby-theme-shopify-manager"
import ProductContext from "../../../context/ProductContext"

import {
  Customize,
  Radio,
  Color,
  Frame,
  FormGroup,
  frameProductTypes,
} from "./"

import {
  prepareVariantsWithOptions,
  optionsByName,
  formatSelectedOptions,
} from "../../../utils/shopify"

const classNames = require("classnames")
var isEqual = require("lodash.isequal")

// Network Wrapper
// The <Form /> component checks variant availability on the fly,
// so we wrap the component in a network request to return a different product
//
const FormWrapper = ({ shopifyId, tags }) => {
  const client = useClientUnsafe()
  const fetcher = id => client.product.fetch(id)
  const { data: product } = useSWR(shopifyId, fetcher)
  return product ? <Form product={product} tags={tags} /> : "Loading..."
}

export default FormWrapper

// "Smart" variant selector, chooses form based on Option name in Shopify
export const Form = ({ product, tags }) => {
  const {
    customization,
    setCustomization,
    currentFrame,
    setCurrentFrame,
    selectedOptions,
    setSelectedOptions,
  } = useContext(ProductContext)

  var options = product.options
  if (frameProductTypes.includes(product.productType)) {
    options = [...product.options, { name: "Frame" }]
  }

  if (tags.includes("Customizable")) {
    options = [{ name: "Custom Text" }, ...product.options]
  }

  // Move variant options into the root level { color: "Red", size: "S" }
  const variants = useMemo(
    () => prepareVariantsWithOptions(product.variants),
    product
  )

  // Compares selectedOptions to find the matching variant
  const findVariant = (name, option) => {
    return variants.find(v =>
      isEqual(formatSelectedOptions(v.selectedOptions), {
        ...selectedOptions,
        [name]: option,
      })
    )
  }

  const optionGroup = option => {
    switch (option.name.toLowerCase()) {
      case "color":
        return (
          <Color
            options={optionsByName(product.options, option.name)}
            findVariant={findVariant}
            selected={selectedOptions[option.name]}
            name={option.name}
            onClick={value =>
              setSelectedOptions({ ...selectedOptions, [option.name]: value })
            }
          />
        )
      case "frame":
        return <Frame currentFrame={currentFrame} onClick={setCurrentFrame} />
      case "custom text":
        return <Customize value={customization} onChange={setCustomization} />
      default:
        return (
          <Radio
            options={optionsByName(product.options, option.name)}
            selected={selectedOptions[option.name]}
            name={option.name}
            findVariant={findVariant}
            onClick={value =>
              setSelectedOptions({ ...selectedOptions, [option.name]: value })
            }
          />
        )
    }
  }

  return (
    <div>
      {options.map((option, i) => {
        if (option.name.toLowerCase() === "title") return
        return (
          <FormGroup name={option.name} key={i}>
            {optionGroup(option)}
          </FormGroup>
        )
      })}
    </div>
  )
}
