import React from "react"
import { graphql } from "gatsby"
import { BrowserView, MobileView, isBrowser } from "react-device-detect"
import StickyBox from "react-sticky-box"
import { Swiper, SwiperSlide } from "swiper/react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Tag from "../components/Product/Tag"
import Recommended from "../components/Product/Recommended"

const Product = ({ data: { product } }) => {
  return (
    <Layout showProductNav={isBrowser}>
      <SEO
        title={product.title}
        description={product.description}
        image={product.images[0]?.originalSrc}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container container-y">
        <div className="col-span-2">
          <BrowserView>
            {product.images.map((image, i) => (
              <img
                className="block w-full mb-2"
                src={image.originalSrc}
                key={i}
              />
            ))}
          </BrowserView>
          <MobileView>
            <Swiper pagination>
              {product.images.map((image, i) => (
                <SwiperSlide key={i}>
                  <img
                    className="h-72 object-contain object-center w-full mb-12"
                    src={image.originalSrc}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </MobileView>
        </div>
        <div className="col-span-2">
          <StickyBox
            className="border border-blue-900 rounded-lg overflow-hidden shadow-xl"
            offsetTop={80}
            offsetBottom={20}
          >
            <Tag product={product} />
          </StickyBox>
        </div>
      </div>

      <section className="py-12 container">
        <h2 className="font-heading mb-4 text-sm uppercase text-center">
          Check these out too!
        </h2>
        <Recommended
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4"
          gid={product.shopifyId}
        />
      </section>
    </Layout>
  )
}

export default Product

export const ProductTemplateQuery = graphql`
  query productPage($productId: String!) {
    product: shopifyProduct(id: { eq: $productId }) {
      ...ProductFields
      tags
      variants {
        ...ProductVariantFields
      }
    }
  }
`
