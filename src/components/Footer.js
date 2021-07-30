import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { isMobile } from "react-device-detect"
import Link from "./Link"
import Socials from "./Socials"
import Marquee from "./Slices/Marquee"
import Instagram from "./Slices/Instagram"

const classNames = require("classnames")

const Footer = ({ className }) => {
  const {
    prismicLayout: {
      data: { body: slices },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      prismicLayout {
        data {
          bannerPath
          bannerText {
            html
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
  const linkColumns = slices.filter(s => s.slice_type === "link_column")

  return (
    <footer className={classNames(className, "bg-yellow-100 overflow-hidden")}>
      <Instagram />
      <Marquee>CELEBRATE EVERYTHING</Marquee>
      <div className="container container-y">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-4/6 pb-8">
            <div className="flex flex-wrap -mx-8">
              {linkColumns.map((stack, index) => (
                <NavigationStack className="px-8" stack={stack} key={index} />
              ))}
            </div>
          </div>
          <div className="md:w-2/6">
            <form action="">
              <h6 className="text-xs font-heading uppercase mb-1 leading-none">
                Like Being First?
              </h6>
              <p className="text-xs mb-3">
                Get can't miss fun stuff before everybody else
              </p>
              <div className="flex items-stretch">
                <input
                  className="border border-blue-900 border-opacity-25 placeholder-opacity-75 p-2 w-full placeholder-blue-900 text-xs border-r-0 bg-white bg-opacity-50"
                  placeholder="Enter your email"
                  id="email"
                  name="email"
                />
                <input
                  className="font-heading uppercase text-xs bg-blue-900 text-white px-4"
                  type="submit"
                  value="SIGN UP"
                />
              </div>
            </form>

            <div className="my-6">
              <Socials
                className="-mx-4 text-2xl"
                linkClassName="inline-block px-4"
              />
            </div>

            <div className="text-xs font-light">
              <h6 className="font-heading uppercase">Oxford Pennant</h6>
              <p>731 Main Street</p>
              <p>Buffalo, NY 14203</p>
              <p>oxford@oxfordpennant.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const NavigationStack = ({ className, stack }) => (
  <div className={className}>
    <h4 className="pb-2 font-heading text-sm uppercase">
      {stack.primary.title.text}
    </h4>
    <ul className="text-xs mb-12 lg:mb-0">
      {stack.items.map((i, index) => (
        <li key={index}>
          <Link className="py-1 block" to={i.path}>
            {i.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
