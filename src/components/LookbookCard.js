import React from "react"
import { Link } from "gatsby"
import { Card } from "../components/Product"

const LookbookRow = ({ id, post }) => (
  <div className="flex -mx-12 mb-12">
    <div className="w-2/5 px-12">
      <Link to={`/lookbook/${id}`}>
        <img
          className="w-full border border-blue-900"
          src={post.image.url}
          alt=""
        />
      </Link>
      <a
        className="p-2 block border border-blue-900 text-center uppercase text-xs border-t-0 hover:bg-blue-900 hover:text-white"
        href={post.instagram.url}
      >
        Open In Instagram
      </a>
    </div>
    <div className="w-3/5 px-12">
      <div className="flex flex-wrap -mx-12">
        {post.products.map(product => (
          <div className="w-1/2 px-12 mb-12">
            <Card
              images={product.product.images.map(i => i.src)}
              title={product.product.title}
              subtitle={"$" + product.product.variants[0].price}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default LookbookRow
