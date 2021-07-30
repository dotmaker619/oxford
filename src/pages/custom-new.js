import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TitleOMatic from "../components/TitleOMatic"
import SVG from "react-inlinesvg"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"

const Custom = ({
  data: {
    prismicCustom: {
      data: { type_style: typeStyles, icons, colors, content },
    },
    shopifyProduct: {
      variants: [
        {
          shopifyId,
          priceV2: { amount },
        },
      ],
    },
  },
}) => {
  const [state, setState] = useState({
    text: "",
    feltColor: colors[0].name,
    typeStyle: typeStyles[0].name,
    typeColor: colors[0].name,
    icon: icons[0].name,
  })

  const addItemToCart = useAddItemToCart()

  const handleAddToCart = () => {
    const customAttributes = Object.keys(state).map(key => ({
      key,
      value: state[key],
    }))
    addItemToCart(shopifyId, 1, customAttributes)
  }

  return (
    <Layout>
      <SEO title="PENNANT-O-MATIC!" />

      <div className="bg-yellow-100 text-center p-8">
        <TitleOMatic className="text-4xl font-heading font-black">
          PENNANT-O-MATIC
        </TitleOMatic>
      </div>

      <div className="md:flex">
        <div className="md:w-1/2 bg-yellow-100 bg-opacity-25 p-8">
          <div className="sticky top-0 pt-12">
            <h2 className="text-center font-heading">HERE'S YOUR PENNANT</h2>
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
            <button
              className="text-lg bg-blue-900 text-white font-heading leading-none p-4 w-full"
              onClick={handleAddToCart}
            >
              I LOVE IT! ADD IT TO MY CART
            </button>
            {/* <code className="block my-8 text-xs">
              <pre>{JSON.stringify(state, null, 2)}</pre>
            </code> */}
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <section>
            <SectionHeading>What'll it say?</SectionHeading>
            <input
              className="text-2xl py-2 border-b-2 border-blue-900 w-full outline-none"
              placeholder="Enter Custom Text"
              onChange={e => setState({ ...state, text: e.target.value })}
            />
          </section>

          <section className="my-12">
            <SectionHeading>Type Style: {state.typeStyle}</SectionHeading>
            <TypeStyle styles={typeStyles} state={state} setState={setState} />
          </section>

          <section className="my-12">
            <div className="flex -mx-4">
              <div className="w-1/2 px-4">
                <SectionHeading>Felt Color: {state.feltColor}</SectionHeading>
                <ColorSelector
                  colors={colors}
                  state={state}
                  setState={setState}
                  token="feltColor"
                />
              </div>
              <div className="w-1/2 px-4">
                <SectionHeading>Type Color: {state.typeColor}</SectionHeading>
                <ColorSelector
                  colors={colors}
                  state={state}
                  setState={setState}
                  token="typeColor"
                />
              </div>
            </div>
          </section>

          <section className="my-12">
            <SectionHeading>Icon: {state.icon}</SectionHeading>
            <Icons icons={icons} state={state} setState={setState} />
          </section>

          <div className="px-8">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="font-heading text-xl font-black uppercase mb-4 leading-none">
                It's not perfect :(
              </h3>
              <p className="text-sm">
                That's fine! We can design one for you, it's what we do best.
              </p>
              <p className="text-sm">Click here to get started</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const SectionHeading = ({ children }) => (
  <h5 className="font-heading text-xs uppercase mb-4 tracking-wider">
    {children}
  </h5>
)

const ColorSelector = ({ colors, state, setState, token }) => (
  <div className="flex flex-wrap -m-2">
    {colors.map(color => (
      <div className="p-2" key={color.name}>
        <button
          className={`rounded-full w-10 h-10 border-2 ${
            color.name === state[token] ? "border-black" : "border-transparent"
          }`}
          style={{ backgroundColor: color.color }}
          onClick={() => setState({ ...state, [token]: color.name })}
        />
      </div>
    ))}
  </div>
)

const TypeStyle = ({ styles, state, setState }) => (
  <div className="flex flex-wrap -m-2">
    {styles.map(style => (
      <div className="w-1/2 md:w-1/3 p-2" key={style.name}>
        <button
          className={`border border-blue-900 w-full p-4 ${
            style.name === state.typeStyle
              ? "text-white bg-blue-900"
              : "bg-white text-blue-900"
          }`}
          onClick={() => setState({ ...state, typeStyle: style.name })}
        >
          <SVG className="w-full h-16" src={style.image.url} />
        </button>
      </div>
    ))}
  </div>
)

const Icons = ({ icons, state, setState }) => (
  <div className="flex flex-wrap -mx-2">
    {icons.map(icon => (
      <div className="w-1/5 px-2 text-center text-xs mb-2" key={icon.name}>
        <button
          className={`border border-blue-900 w-full h-20 p-2 mb-1 ${
            icon.name === state.icon
              ? "text-white bg-blue-900"
              : "bg-white text-blue-900"
          }`}
          onClick={() => setState({ ...state, icon: icon.name })}
        >
          <SVG className="w-full h-full" src={icon.icon.url} />
        </button>
        {icon.name}
      </div>
    ))}
  </div>
)

export default Custom

export const CustomNewQuery = graphql`
  query CustomNewQuery {
    prismicCustom {
      data {
        content {
          html
        }
        type_style {
          name
          image {
            url
          }
        }
        icons {
          icon {
            url
          }
          name
        }
        colors {
          color
          name
        }
      }
    }
    shopifyProduct(handle: { eq: "pennant-o-matic" }) {
      variants {
        shopifyId
        priceV2 {
          amount
        }
      }
    }
  }
`
