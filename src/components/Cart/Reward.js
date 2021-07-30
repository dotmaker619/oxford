import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import { price } from "../../utils"
import CartItem from "./CartItem"
import SectionHeader from "./SectionHeader"
const classNames = require("classnames")

const Reward = ({ amount, item }) => {
  if (item) {
    return (
      <>
        <SectionHeader>Reward Claimed</SectionHeader>
        <CartItem className="border-b border-t" item={item} isReward={true} />
      </>
    )
  } else {
    return <Card amount={amount} />
  }
}

export default Reward

const Card = ({ amount }) => {
  const isEligible = amount >= 50.0
  const percent = Math.floor((amount / 50.0) * 100)
  const isClose = percent > 0.6

  return (
    <div className="m-3 mb-0 px-8 pt-6 pb-5 text-center bg-blue-900 text-white border border-blue-900 rounded-xl shadow-lg">
      <Progress className="mb-5" value={percent} />

      <h5 className="font-heading uppercase tracking-wider leading-snug text-sm px-8">
        {isEligible
          ? "Congrats! You've earned a free shirt!"
          : `${isClose ? "Almost there! " : ""}Add ${price(
              50.0 - amount
            )} more for a free shirt!`}
      </h5>

      {isEligible && <Eligible className="mt-3" />}
    </div>
  )
}

const Progress = ({ className, value }) => (
  <div
    className={classNames(
      className,
      "bg-white h-5 rounded-full overflow-hidden shadow-lg",
      "ring-white ring-2 border-blue-900 border"
    )}
  >
    <div className="bg-orange-500 bg-opacity-60 h-full flex items-stretch">
      <div
        className="bg-orange-500 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
)

const Eligible = ({ className }) => {
  const addItemToCart = useAddItemToCart()
  const [selectedVariant, setSelectedVariant] = useState()

  const {
    shopifyProduct: { variants },
  } = useStaticQuery(graphql`
    query RewardQuery {
      shopifyProduct(handle: { eq: "free-shirt" }) {
        title
        variants {
          title
          shopifyId
          compareAtPrice
          price
        }
      }
    }
  `)

  const handleSubmit = async e => {
    e.preventDefault()
    await addItemToCart(selectedVariant, 1, [{ key: "reward", value: "true" }])
  }

  return (
    <form
      className={classNames(className, "flex justify-center items-stretch")}
      onSubmit={handleSubmit}
    >
      <select
        className="form-select mx-2 appearance-none text-sm text-blue-900"
        onChange={e => setSelectedVariant(e.target.value)}
      >
        <option>Choose Size</option>
        {variants.map((v, i) => (
          <option value={v.shopifyId} key={i}>
            {v.title}
          </option>
        ))}
      </select>
      <button className="leading-none mx-2 mt-1" type="submit">
        Add To Cart
      </button>
    </form>
  )
}
