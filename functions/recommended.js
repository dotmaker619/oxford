const { decode } = require("shopify-gid")
const fetch = require("node-fetch")

exports.handler = async event => {
  const { id } = decode(event.queryStringParameters.id)
  const response = await fetch(
    `https://oxford-pennant.myshopify.com/recommendations/products.json?product_id=${id}`
  )
  const json = await response.json()
  return {
    statusCode: 200,
    body: JSON.stringify(json),
  }
}
