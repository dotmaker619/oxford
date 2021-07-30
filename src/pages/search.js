import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TitleOMatic from "../components/TitleOMatic"
import SVG from "react-inlinesvg"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import { InstantSearch, Index, Configure, Hits,
     Highlight,RefinementList, SearchBox,
     Menu, connectRefinementList,connectSearchBox } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"


const VirtalSearchBox = connectSearchBox(() => null);

const searchClient = algoliasearch(
    "4WUEV0X8J1",
    "debe091fcc04905761548305ee730132"
  )
// console.log(hit.title)
const VirtualRefinementList = connectRefinementList(() => null);

const Search = ({location}) => {

    const Hit = ({ hit }) => (
        <p>
          <Highlight attribute="title" hit={hit}  tagName="mark"  />
        </p>
      );
  return (
    <Layout>
      <SEO title="PENNANT-O-MATIC!" />
      <div className="bg-yellow-100 text-center p-8">
        <TitleOMatic className="text-4xl font-heading font-black">
          Search Results
        </TitleOMatic>
      </div>
        <div>
        <InstantSearch indexName="Products" searchClient={searchClient}>

            <VirtalSearchBox defaultRefinement={location?.state?.search} />
            <Hits hitComponent={Hit} />
        </InstantSearch>
        </div>
      <div className="md:flex">
        <div className="md:w-1/2 bg-yellow-100 bg-opacity-25 p-8">
          <div className="sticky top-0 pt-12">
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Search
