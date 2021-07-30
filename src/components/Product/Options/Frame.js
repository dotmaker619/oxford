import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ShopifyImage from "../../ShopifyImage"
import { price } from "../../../utils"
const classNames = require("classnames")

export const productTypes = ["Camp Flag", "Pennant"]

const Frame = ({ onClick, currentFrame }) => {
  const {
    shopifyProduct: { variants: frames },
  } = useStaticQuery(graphql`
    query FramesQuery {
      shopifyProduct(
        shopifyId: { eq: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzNTczODg4Mjg3MjE=" }
      ) {
        variants {
          shopifyId
          title
          price
          image {
            originalSrc
          }
        }
      }
    }
  `)

  return (
    <div>
      {frames?.map((frame, i) => (
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => onClick(frame.shopifyId)}
          key={i}
        >
          <ShopifyImage
            className="object-contain h-12"
            src={frame.image?.originalSrc}
            size="500x500"
            alt={frame.title}
          />
          <div className="flex-grow mx-4">{frame.title}</div>
          <p className="mx-4">{price(frame.price)}</p>
          <input
            className="appearance-none text-orange-500"
            type="radio"
            name="frame"
            checked={frame.shopifyId === currentFrame}
            readOnly
          />
        </div>
      ))}
    </div>
  )

  return (
    <div className="flex flex-wrap -mx-2">
      {frames?.map((frame, i) => {
        const active = frame === currentFrame
        return (
          <div className="w-1/3 px-2" key={i}>
            <FrameOption
              active={active}
              onClick={() => (active ? onClick() : onClick(frame))}
            >
              {frame.title}
            </FrameOption>
          </div>
        )
      })}
    </div>
  )
}

export default Frame

export const FrameOption = ({ children, onClick, active }) => (
  <button
    className={classNames(
      "text-center border border-dashed w-full px-4 py-2 text-xs uppercase font-heading tracking-wider",
      active
        ? "bg-blue-900 text-white border-white"
        : "text-blue-900 border-blue-900"
    )}
    onClick={onClick}
  >
    {children}
  </button>
)
