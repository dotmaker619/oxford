import React from "react"
import Card from "./Card"

const generateCard = item => {
  switch (item.type) {
    case "project":
      return {
        uid: item.uid,
        image: item.data.image,
        title: item.data.title.text,
        teaser: item.data.teaser.html,
      }
    case "gallery":
      return {
        uid: item.uid,
        image: item.data.images[0].image,
        title: item.data.title.text,
        teaser: item.data.teaser.html,
      }
  }
}

const Collection = ({ items }) => (
  <div className="container container-y">
    <div className="grid grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Card card={generateCard(item)} type={item.type} key={i} />
      ))}
    </div>
  </div>
)

export default Collection
