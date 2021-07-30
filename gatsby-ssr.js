import * as React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import { StoreContextWrapper } from "./src/context/StoreContext"

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>
    <StoreContextWrapper>{element}</StoreContextWrapper>
  </PreviewStoreProvider>
)
