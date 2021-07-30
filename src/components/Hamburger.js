import React, { useContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "./Link"
import Search from "./Search"
import Socials from "./Socials"
import StoreContext from "../context/StoreContext"
import { CaretRight, Plus, Minus } from "phosphor-react"
const classNames = require("classnames")

const Hamburger = ({ className, open }) => {
  const { setNavOpen } = useContext(StoreContext)
  const [openSection, setOpenSection] = useState()

  const {
    prismicLayout: {
      data: { navigationItems, productNavigation, body: slices },
    },
  } = useStaticQuery(graphql`
    query HamburgerNavQuery {
      prismicLayout {
        data {
          navigationItems {
            path
            text
          }
          productNavigation {
            ... on PrismicLayoutProductNavigationSection {
              primary {
                header
                path
              }
              items {
                text
                path
              }
            }
          }
          body {
            ... on PrismicLayoutBodyLinkColumn {
              slice_type
              primary {
                title {
                  text
                }
              }
              items {
                path
                text
              }
            }
          }
        }
      }
    }
  `)

  // Pull relevant links from the footer
  const linkColumns = slices.filter(
    s => s.slice_type === "link_column" && s.primary.title.text !== "Shop"
  )

  const toggleSection = i => {
    setOpenSection(i === openSection ? null : i)
  }

  return (
    <div
      className={classNames(
        className,
        "hamburger bg-blue-900 flex lg:hidden",
        open ? "open" : "pointer-events-none"
      )}
      onClick={() => setNavOpen(false)}
    >
      <div
        className="hamburger-content flex flex-shrink-0 flex-col bg-white h-full pointer-events-auto shadow-lg"
        onClick={e => e.stopPropagation()}
        style={{ width: "90vw" }}
      >
        <div className="overflow-y-scroll flex-grow bg-blue-900 bg-opacity-10">
          <div className="bg-blue-900 p-3">
            <Search />
          </div>
          <div className="bg-gray-50">
            <nav>
              <div className="grid grid-cols-2 p-3 gap-2">
                {navigationItems
                  .filter(i => !["Shop"].includes(i.text))
                  .map((item, i) => (
                    <Link
                      className="py-2 border border-grey-300 px-2 text-center text-sm"
                      to={item.path}
                      key={i}
                    >
                      {item.text}
                    </Link>
                  ))}
              </div>
              <h6 className="bg-blue-900 leading-none px-3 py-2 font-heading uppercase text-white text-xs">
                Shop
              </h6>
              {productNavigation.map((section, i) => (
                <div
                  className="border-b border-blue-900 border-opacity-10 px-3"
                  key={i}
                >
                  <Link
                    className="block py-3 flex items-center justify-between"
                    to={section.primary.path}
                    onClick={e => {
                      if (section.items.length > 0) {
                        e.preventDefault()
                        toggleSection(i)
                      } else {
                        setNavOpen(false)
                      }
                    }}
                  >
                    {section.primary.header}
                    <SectionAccessory
                      section={section}
                      active={i === openSection}
                    />
                  </Link>
                  <Children section={section} open={i === openSection} />
                </div>
              ))}
            </nav>
            <div className="grid grid-cols-2 gap-3">
              {linkColumns.map((stack, index) => (
                <NavigationStack className="p-3" stack={stack} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 border-t border-blue-900 border-opacity-25 px-4 py-2">
          <Socials className="flex justify-between text-2xl" />
        </div>
      </div>
      <div className={classNames("h-screen relative", { "opacity-0": !open })}>
        <button
          className="flex items-center justify-between px-8 text-white uppercase text-xxs font-light w-full transform rotate-90 origin-top-left absolute"
          style={{
            top: 0,
            width: "100vh",
            left: "10vw",
            height: "10vw",
          }}
        >
          <span>Close</span>
          <span>Close</span>
          <span>Close</span>
        </button>
      </div>
    </div>
  )
}

export default Hamburger

const SectionAccessory = ({ section, active }) => {
  if (section.items.length > 0) {
    return active ? <Minus /> : <Plus />
  } else {
    return <CaretRight />
  }
}

const Children = ({ section, open }) => {
  if (!open) return null
  const className = "py-1 text-sm block"

  return (
    <div class="grid grid-cols-2 mb-3">
      {section.primary.path && (
        <Link className={className} to={section.primary.path}>
          View All
        </Link>
      )}
      {section.items.map((item, y) => (
        <Link className={className}>{item.text}</Link>
      ))}
    </div>
  )
}

const NavigationStack = ({ className, stack }) => (
  <div className={className}>
    <h4 className="pb-2">{stack.primary.title.text}</h4>
    <ul className="text-xs mb-12 lg:mb-0">
      {stack.items.map((i, index) => (
        <li key={index}>
          <Link className="py-1 block" path={i.path}>
            {i.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
