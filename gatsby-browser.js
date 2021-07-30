import React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import { StoreContextWrapper } from "./src/context/StoreContext"
import SwiperCore, { Pagination } from "swiper"
import "./src/css/index.css"
import "swiper/swiper-bundle.min.css"

SwiperCore.use([Pagination])

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>
    <StoreContextWrapper>{element}</StoreContextWrapper>
  </PreviewStoreProvider>
)
