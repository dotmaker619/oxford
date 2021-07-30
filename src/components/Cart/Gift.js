import React, { useState, useEffect } from "react"
import {
  useCart,
  useSetCartUnsafe,
  useClientUnsafe,
} from "gatsby-theme-shopify-manager"

const classNames = require("classnames")

const Gift = () => {
  const cart = useCart()
  const setCart = useSetCartUnsafe()
  const client = useClientUnsafe()

  const customAttributes =
    cart?.customAttributes?.reduce((final, current) => {
      return { ...final, [current.key]: current.value }
    }, {}) || {}

  const [active, setActive] = useState(
    customAttributes["Gift From"] ? true : false
  )
  const [from, setFrom] = useState(customAttributes["Gift From"] || "")
  const [to, setTo] = useState(customAttributes["Gift To"] || "")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!active) {
      remove()
    }
    document.querySelector("#cart-overflow").scrollBy(0, -1)
    document.querySelector("#cart-overflow").scrollBy(0, 1)
  }, [active])

  const setAttributes = async attributes => {
    setSaving(true)
    const newCart = await client.checkout.updateAttributes(cart.id, attributes)
    setCart(newCart)
    setSaving(false)
  }

  const remove = async () => {
    if (from !== "") {
      await setAttributes({ customAttributes: [] })
    }
  }

  const save = async () => {
    await setAttributes({
      customAttributes: [
        { key: "Gift From", value: from },
        { key: "Gift To", value: to },
      ],
    })
  }

  return (
    <div className="p-3">
      <div
        className={classNames(
          "bg-white rounded-lg border border-gray-200 overflow-hidden",
          active ? "border-orange-500" : "border-gray-300"
        )}
      >
        <div className=" p-3">
          <label className="flex items-center cursor-pointer">
            <input
              className={classNames(
                "w-5 h-5 rounded mr-3 appearance-none text-orange-500 border-gray-300"
              )}
              type="checkbox"
              defaultChecked={active}
              onClick={e => setActive(e.target.checked)}
            />
            This is a gift
          </label>
        </div>
        {active && (
          <>
            <div className="px-3 pb-3">
              <form className="grid grid-cols-2 gap-3">
                <Field label="From" value={from} onChange={v => setFrom(v)} />
                <Field label="To" value={to} onChange={v => setTo(v)} />
              </form>
            </div>
            <div className="bg-gray-50 border-t border-gray-200 px-3 py-2 flex justify-end items-center">
              {saving && <p className="text-xs mr-4">Saving...</p>}
              <button
                className="bg-orange-500 py-1 px-2 text-white rounded text-sm shadow hover:bg-black"
                onClick={save}
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Gift

const Field = ({ label, value, onChange }) => (
  <label className="block">
    <span className="text-gray-700 text-sm">{label}</span>
    <input
      type="text"
      className="mt-1 block w-full text-sm"
      placeholder=""
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </label>
)
