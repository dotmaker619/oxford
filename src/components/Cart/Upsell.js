import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import ShopifyImage from "../ShopifyImage"
import SectionHeader from "./SectionHeader"
import Link from "../Link"
import { PlusCircle, ArrowRight, ArrowLeft } from "phosphor-react"
import { price as formatPrice } from "../../utils"
import { Swiper, SwiperSlide } from "swiper/react"

const classNames = require("classnames")

const Upsell = ({ className, isInCart }) => {
  const addToCart = useAddItemToCart()
  const [swiper, setSwiper] = useState(null)

  const {
    shopifyCollection: { products },
  } = useStaticQuery(graphql`
    query UpsellAccessories {
      shopifyCollection(handle: { eq: "accessories" }) {
        products {
          title
          shopifyId
          handle
          images {
            originalSrc
          }
          variants {
            price
            shopifyId
          }
        }
      }
    }
  `)

  return (
    <div className={classNames(className, "overflow-hidden")}>
      <SectionHeader className="flex justify-between">
        Add Ons
        <div className="flex">
          <button
            className=""
            onClick={() => swiper?.slideTo(swiper.activeIndex - 1)}
          >
            <ArrowLeft />
          </button>
          <button
            className="ml-2"
            onClick={() => swiper?.slideTo(swiper.activeIndex + 1)}
          >
            <ArrowRight />
          </button>
        </div>
      </SectionHeader>

      <div className="-mx-12">
        <Swiper
          spaceBetween={8}
          slidesPerView={3}
          centeredSlides={true}
          loop={false}
          onSwiper={s => setSwiper(s)}
        >
          {products
            // .filter(p => !isInCart(p.variants[0].shopifyId))
            .map((product, i) => {
              const inCart = isInCart(product.variants[0].shopifyId)
              return (
                <SwiperSlide key={i} style={{ height: "unset" }}>
                  <div className="w-full h-full bg-white border border-gray-900 rounded overflow-hidden p-2 flex flex-col items-center justify-between text-center">
                    <ShopifyImage
                      className="object-contain object-center h-24 w-full mt-2"
                      src={product.images[0].originalSrc}
                      size="500x500"
                      alt={product.title}
                    />
                    <Link
                      className="text-xs"
                      to={`/products/${product.handle}`}
                    >
                      {product.title}
                    </Link>
                    <div className="flex text-xs items-center justify-center py-2">
                      {!inCart ? (
                        <>
                          {formatPrice(product.variants[0].price)}
                          <button
                            className="text-2xl mx-2"
                            onClick={() =>
                              addToCart(product.variants[0].shopifyId, 1)
                            }
                          >
                            <PlusCircle />
                          </button>
                        </>
                      ) : (
                        <div>In Cart!</div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

export default Upsell
