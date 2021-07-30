import React, { useContext } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { BrowserView, MobileView } from "react-device-detect"
import { useCartCount } from "gatsby-theme-shopify-manager"
import Logo from "../images/logo.svg"
import Banner from "./Banner"
import Search from "./Search"
import Navigation from "./Navigation"
import Socials from "./Socials"
import StoreContext from "../context/StoreContext"
const classNames = require("classnames")

const Header = ({ className }) => {
  const { setCartOpen, setNavOpen } = useContext(StoreContext)
  const cartCount = useCartCount()

  const {
    prismicLayout: {
      data: {
        navigationItems,
        bannerPath,
        bannerText: { html: bannerHtml },
      },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      prismicLayout {
        data {
          navigationItems {
            path
            text
          }
          bannerPath
          bannerText {
            html
          }
        }
      }
    }
  `)

  return (
    <>
      <header className={classNames(className, "z-40")}>
        {bannerHtml && <Banner html={bannerHtml} to={bannerPath} />}

        <div className="bg-blue-900 container py-3 md:py-5 text-white flex justify-between items-center lg:px-8">
          <div className="w-1/3">
            <MobileView>
              <button className="text-xl mr-4" onClick={() => setNavOpen(true)}>
                <i className="fas fa-bars" />
              </button>
              <button className="text-xl" onClick={() => setNavOpen(true)}>
                <i className="fas fa-search" />
              </button>
            </MobileView>
            <BrowserView>
              <Socials
                className="-mx-2 text-base"
                linkClassName="inline-block px-2"
              />
            </BrowserView>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <Link to="/">
              <img className="h-12 lg:h-16" src={Logo} alt="Oxford Pennant" />
            </Link>
          </div>
          <div className="flex items-end justify-end items-stretch w-1/3">
            <BrowserView>
              <Search className="mr-4" />
              
            </BrowserView>

            <button
              className="cursor-pointer text-heading text-xs border-white border-2 py-2 px-3 md:px-4 font-heading leading-none whitespace-nowrap"
              onClick={() => setCartOpen(true)}
            >
              CART{cartCount > 0 && ` (${cartCount})`}
            </button>
          </div>
        </div>
      </header>
      <Navigation
        className="sticky top-0 inset-x-0 z-20 hidden md:flex"
        items={navigationItems}
      />
    </>
  )
}

export default Header
