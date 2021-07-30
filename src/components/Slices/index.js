import React from "react"
import Hero from "./Hero"
import Spotlight from "./Spotlight"
import Features from "./Features"
import Instagram from "./Instagram"
import Video from "./Video"
import Paragraph from "./Paragraph"
import Marquee from "./Marquee"
import Image from "./Image"
import ContentGrid from "./ContentGrid"
import FAQ from "./FAQ"
import Cards from "./Cards"
import Title from "./Title"

const Slices = ({ classNames, slices }) => {
  return slices.map(slice => {
    const key = slice.id

    switch (slice.slice_type) {
      case "title":
        return <Title {...slice.primary} key={key} />

      case "hero":
        return (
          <Hero
            className={classNames && classNames.hero}
            key={key}
            images={slice.items.map(i => i.image)}
            {...slice.primary}
          />
        )

      case "spotlight":
        return (
          <Spotlight
            key={key}
            {...slice.primary}
            products={slice.items.map(i => i.product)}
          />
        )

      case "features":
        return <Features features={slice.items} key={key} />

      case "columns":
      case "content_grid":
        return <ContentGrid cells={slice.items} key={key} />

      case "instagram":
        return <Instagram {...slice.primary} key={key} />

      case "video":
        return (
          <Video
            url={slice.primary.url.embed_url}
            size={slice.primary.size}
            key={key}
          />
        )

      case "paragraph":
        return <Paragraph html={slice.primary.content.html} key={key} />

      case "marquee":
        return <Marquee text={slice.primary.text.html} key={key} />

      case "faq":
        return <FAQ questions={slice.items} key={key} />

      case "image":
        return (
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.image.alt}
            key={key}
          />
        )

      case "cards":
        return <Cards items={slice.items.map(i => i.card.document)} key={key} />

      default:
        return null
    }
  })
}

export default Slices
