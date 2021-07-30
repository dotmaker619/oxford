import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react"
import { useAddItemsToCart } from "gatsby-theme-shopify-manager"
import StoreContext from "./StoreContext"

import {
  prepareVariantsWithOptions,
  formatSelectedOptions,
} from "../utils/shopify"

var isEqual = require("lodash.isequal")

const ProductContext = createContext()
export default ProductContext

export const ProductContextWrapper = ({ children, product }) => {
  const { setCartOpen } = useContext(StoreContext)
  const addItemsToCart = useAddItemsToCart()

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])

  const [variant, setVariant] = useState(variants ? variants[0] : null)
  const [currentFrame, setCurrentFrame] = useState()
  const [customization, setCustomization] = useState()

  // { Size: "Small", Color: "Blue"}
  const [selectedOptions, setSelectedOptions] = useState(
    formatSelectedOptions(variant.selectedOptions)
  )

  // When selected options change, set a new variant if necessary
  useEffect(() => {
    const newVariant = product.variants.find(v =>
      isEqual(formatSelectedOptions(v.selectedOptions), selectedOptions)
    )
    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
  }, [selectedOptions])

  // Adds variant to cart as well as any add ons or customizations
  const addToCart = () => {
    var item = { variantId: variant.shopifyId, quantity: 1 }

    if (customization?.length > 0) {
      item.customAttributes = [{ key: "Customization", value: customization }]
    }

    var items = [item]

    if (currentFrame) {
      items.push({ variantId: currentFrame, quantity: 1 })
    }

    addItemsToCart(items)
    setCartOpen(true)
  }

  return (
    <ProductContext.Provider
      value={{
        product,
        addToCart,
        variant,
        setVariant,
        customization,
        setCustomization,
        currentFrame,
        setCurrentFrame,
        selectedOptions,
        setSelectedOptions,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
