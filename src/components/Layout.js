import React, { useContext } from "react"
import { isMobile, isBrowser } from "react-device-detect"
import StickyBox from "react-sticky-box"
import Header from "./Header"
import Footer from "../components/Footer"
import { Cart } from "../components/Cart"
import Hamburger from "../components/Hamburger"
import StoreContext from "../context/StoreContext"
import ProductNavigation from "../components/ProductNavigation"

const classNames = require("classnames")

const Layout = ({ children, header = true, showProductNav = false }) => {
  const { cartOpen, setCartOpen, navOpen } = useContext(StoreContext)

  return (
    <>
      {header && <Header className="col-span-full" />}
      <div className="grid grid-cols-5 grid-flow-row">
        {isBrowser && showProductNav && (
          <div className="col-span-1 py-8 px-6 pr-0">
            <StickyBox offsetTop={80} offsetBottom={40}>
              <ProductNavigation
                styles={{
                  primary: {
                    ul: "",
                    li: "",
                  },
                  items: { ul: "text-sm", li: "py-px block" },
                }}
              />
            </StickyBox>
          </div>
        )}
        <main
          className={classNames(
            "bg-white",
            showProductNav ? "col-start-2 col-end-7" : "col-span-full"
          )}
        >
          {children}
        </main>
      </div>
      <Footer className="col-span-full" />
      <Cart className={`${cartOpen && "open"}`} />
      <div
        className={`overlay fixed inset-0 z-40 bg-blue-900 opacity-75 ${
          !cartOpen && "hidden"
        }`}
        onClick={() => setCartOpen(false)}
      />
      {isMobile && <Hamburger open={navOpen} />}
    </>
  )
}

export default Layout
