const fetch = require("node-fetch")

exports.handler = async event => {
  const response = await fetch(
    `https://api.airtable.com/v0/appgvdTDW4ndrCiPq/Posts?maxRecords=10`,
    { headers: { Authorization: `Bearer ${process.env.AIRTABLE_KEY}` } }
  )
  const json = await response.json()
  return {
    statusCode: 200,
    body: JSON.stringify(json),
  }
}
