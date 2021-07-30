import React from "react"
import { Highlight } from "react-instantsearch-dom"
import { price } from "../../utils"
const HitWrapper = ({ hit }) => {
  switch (hit.type) {
    case "Product":
      return <ProductHit hit={hit} />
    case "Page":
      return <PageHit hit={hit} />
    case "Button":
      return <span className="block text-center p-3">View more results...</span>
  }
}

export default HitWrapper

const Hit = ({ children, hit }) => (
  <div
    className="block px-3 py-3 flex items-center cursor-pointer"
    key={hit.objectID}
  >
    {children}
  </div>
)

const ProductHit = ({ hit }) => (
  <Hit hit={hit}>
    <img
      className="block w-12 h-12 mr-3 bg-white flex-shrink-0 object-contain"
      src={hit.image}
    />
    <div className="flex flex-col">
      <Highlight
        className="font-heading leading-snug text-xs md:text-sm uppercase"
        attribute="title"
        hit={hit}
      />
      <div className="text-blue-900 opacity-75 -mx-2 mt-1 text-xs">
        {hit.productType && (
          <span className="inline-block bg-blue-100 mx-2 rounded leading-none py-1 px-1">
            {hit.productType}
          </span>
        )}
        <span className="mx-2">{price(hit.price)}</span>
      </div>
    </div>
  </Hit>
)

const PageHit = ({ hit }) => <Hit hit={hit}>{hit.title}</Hit>
