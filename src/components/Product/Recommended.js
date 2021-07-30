import React from "react"
import useSWR from "swr"
import Card from "./Card"

const fetcher = url => fetch(url).then(r => r.json())

const transform = product => ({
  title: product.title,
  price_min: product.price_min,
  price_max: product.price_max,
  images: product.images.map(i => ({ originalSrc: i })),
})

const Recommended = ({ className, gid }) => {
  const { data } = useSWR(`/.netlify/functions/recommended?id=${gid}`, fetcher)

  return (
    <div className={className}>
      {data?.products?.slice(0, 4).map((product, i) => (
        <Card
          product={transform(product)}
          to={`/products/${product.handle}`}
          key={i}
        />
      ))}
    </div>
  )
}

export default Recommended
