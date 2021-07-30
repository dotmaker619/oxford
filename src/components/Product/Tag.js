import React, { useContext } from "react"
import { Price } from "../Product"
import { Form as OptionsForm } from "../Product/Options"

import ProductContext, {
  ProductContextWrapper,
} from "../../context/ProductContext"

const classNames = require("classnames")

const TagWrapper = ({ product }) => (
  <ProductContextWrapper product={product}>
    <Tag />
  </ProductContextWrapper>
)

export default TagWrapper

export const Tag = () => {
  const { product, addToCart } = useContext(ProductContext)
  const { shopifyId, tags, descriptionHtml, title, availableForSale } = product
  let buttonText = availableForSale ? "Add To Cart" : "Sold Out"

  return (
    <>
      <div className="p-3 border-b border-blue-900">
        <div className="-mx-3 -mt-3 border-b border-blue-900 p-3 mb-2">
          <h1 className="text-xl font-bold uppercase text-blue-900 leading-tight flex-grow">
            {title}
          </h1>

          <p className="text-lg whitespace-no-wrap flex-shrink-0">
            <Price product={product} />
          </p>
        </div>

        <div
          className="text-sm mt-4 opacity-75 prose prose-navy"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />

        <OptionsForm shopifyId={shopifyId} tags={tags} />
      </div>

      <button
        className={classNames(
          "text-lg bg-orange-500 shadow-xl text-white p-5 block w-full uppercase font-light font-heading tracking-widest text-sm leading-none",
          "transition-all duration-300",
          availableForSale
            ? "hover:bg-black hover:shadow-xs"
            : "opacity-50 hover:none"
        )}
        disabled={!availableForSale}
        onClick={addToCart}
      >
        {buttonText}
      </button>
    </>
  )
}
