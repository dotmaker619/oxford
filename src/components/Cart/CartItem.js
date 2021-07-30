import React from "react"
import { useUpdateItemQuantity } from "gatsby-theme-shopify-manager"
import ShopifyImage from "../ShopifyImage"
import Quantity from "./Quantity"
import { price as formatPrice } from "../../utils"
const classNames = require("classnames")

const CartItem = ({ className, item, isReward }) => {
  const updateQty = useUpdateItemQuantity()

  const handleQuantityChange = change => {
    updateQty(item.variant.id, item.quantity + change)
  }

  return (
    <li
      className={classNames(
        "grid grid-cols-3 gap-4 p-3 border-blue-900 border-opacity-10 items-center bg-white",
        className
      )}
    >
      <ShopifyImage
        className="col-span-1 w-full object-contain max-h-24"
        src={item?.variant?.image?.src}
        size="500x500"
        alt={item?.title}
      />

      <div className="col-span-2">
        <h3 className="whitespace-normal leading-tight mb-2">{item?.title}</h3>

        {item?.customAttributes && !isReward && (
          <CustomAttributes attributes={item?.customAttributes} />
        )}

        {item?.variant?.title !== "Default Title" && (
          <p className="text-xxs border border-blue-900 p-1 rounded inline-block leading-none cursor-default">
            {item?.variant?.title}
          </p>
        )}

        <div className="mt-3 flex justify-between items-center">
          {!isReward ? (
            <Quantity value={item.quantity} onChange={handleQuantityChange} />
          ) : (
            <ChangeReward onClick={() => updateQty(item?.variant?.id, 0)} />
          )}
          <p className="mx-2 font-light">
            {isReward ? "FREE" : formatPrice(item?.variant?.price)}
          </p>
        </div>
      </div>
    </li>
  )
}

export default CartItem

const CustomAttributes = ({ attributes }) => (
  <div className="mb-1 text-xs">
    {attributes?.map(({ key, value }, i) => (
      <p key={i}>
        {key}: <strong>{value}</strong>
      </p>
    ))}
  </div>
)

const ChangeReward = ({ onClick }) => (
  <button
    className="border-gray-200 text-gray-500 border px-2 py-2 text-xs leading-none"
    onClick={onClick}
  >
    Change
  </button>
)
