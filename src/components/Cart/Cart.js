import React, { useContext, useEffect } from "react"
import {
  useCheckoutUrl,
  useCartItems,
  useCart,
  useUpdateItemQuantity,
} from "gatsby-theme-shopify-manager"
import Link from "../Link"
import CartItem from "./CartItem"
import Upsell from "./Upsell"
import SectionHeader from "./SectionHeader"
import Reward from "./Reward"
import Gift from "./Gift"
import StoreContext from "../../context/StoreContext"

const Cart = ({ className }) => {
  const cart = useCart()
  const checkoutUrl = useCheckoutUrl()
  const cartItems = useCartItems()
  const updateQty = useUpdateItemQuantity()
  const { setCartOpen } = useContext(StoreContext)

  const rewardClaimed = cartItems.find(i =>
    i.customAttributes.find(a => a.key === "reward")
  )

  // Remove reward from cart if the price drops below the threshold
  useEffect(() => {
    if (cart?.totalPriceV2?.amount < 50.0 && rewardClaimed) {
      updateQty(rewardClaimed?.variant?.id, 0)
    }
  }, [cartItems])

  return (
    <div className={`cart ${className} flex flex-col border-l border-blue-900`}>
      <div
        id="cart-overflow"
        className="flex-grow overflow-y-scroll bg-gray-100"
      >
        <Reward amount={cart?.totalPriceV2?.amount} item={rewardClaimed} />

        <SectionHeader>My Cart</SectionHeader>
        <ul className="border-t border-b border-gray-200">
          {cartItems
            .filter(i => i.id !== rewardClaimed?.id)
            .map(item => (
              <CartItem
                className="border-b last:border-b-0"
                key={item.id}
                item={item}
              />
            ))}
          {cartItems.length === 0 && (
            <li className="text-center p-8 bg-white">
              Nothing in your cart yet!
              <br />
              Check out our{" "}
              <Link
                className="underline"
                to="/collections/best-sellers"
                onClick={() => setCartOpen(false)}
              >
                Best Sellers
              </Link>
            </li>
          )}
        </ul>

        <Gift />

        <Upsell
          className="mb-12"
          isInCart={id => cartItems.map(i => i.variant.id).includes(id)}
        />
      </div>

      <div className="flex flex-shrink-0 justify-between p-4 items-center bg-yellow-100 border-t border-blue-900">
        <div className="flex flex-col">
          <div className="text-xxs leading-none font-heading tracking-wider mb-1 uppercase">
            Subtotal
          </div>
          {cart && (
            <span className="font-bold text-2xl leading-tight font-heading">
              ${cart.totalPrice}
            </span>
          )}
        </div>

        <button
          className="bg-blue-900 py-2 px-4 text-white font-heading uppercase tracking-wider shadow-xl hover:bg-black"
          onClick={() => window.open(checkoutUrl)}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
