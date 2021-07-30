import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import StoreContext from "../context/StoreContext"

const classNames = require("classnames")

const ProductNavigation = () => {
  const {
    prismicLayout: {
      data: { productNavigation: sections },
    },
  } = useStaticQuery(query)

  return (
    <nav>
      {sections.map(({ primary, items }, i) => (
        <ul className="" key={i}>
          <Section primary={primary} items={items} />
        </ul>
      ))}
    </nav>
  )
}

export default ProductNavigation

const Section = ({ primary, items }) => {
  const current = isCurrent(primary.path)
  return (
    <li>
      <Linkify path={primary.path} className="font-light block my-1">
        {primary.header}
      </Linkify>
      {items.length > 0 && (
        <ul className={classNames("text-xs mb-3", !current && "hidden")}>
          {items.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </ul>
      )}
    </li>
  )
}

const isCurrent = path => {
  return typeof window !== "undefined" && window.location.pathname === path
}

const Item = ({ item }) => (
  <li>
    <Linkify className="mb-1 block" path={item.path}>
      {item.text}
    </Linkify>
  </li>
)

const Linkify = ({ className, path, children }) => {
  const { setNavOpen } = useContext(StoreContext)
  return path ? (
    <Link
      className={className}
      to={path}
      activeClassName="font-medium"
      onClick={() => setNavOpen(false)}
    >
      {children}
    </Link>
  ) : (
    <span className={className}>{children}</span>
  )
}

const query = graphql`
  query ProductNavigationQuery {
    prismicLayout {
      data {
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
      }
    }
  }
`
