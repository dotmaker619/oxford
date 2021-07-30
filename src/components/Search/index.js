import React, { useContext, useState } from "react"
import { navigate } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Index, Configure } from "react-instantsearch-dom"
import Autocomplete from "./Autocomplete"
import StoreContext from "../../context/StoreContext"

const searchClient = algoliasearch(
  "4WUEV0X8J1",
  "debe091fcc04905761548305ee730132"
)
  // const [name, setName] = useState();
  // const handleInput = event => {
  //   setName(event.target.value);
  // };
    
const Search = ({ className }) => {
  const { setNavOpen } = useContext(StoreContext)
  return (
    <div className={className}>
      <InstantSearch searchClient={searchClient} indexName="Products">
        <Configure hitsPerPage={3} />
        <Autocomplete
          onSuggestionSelected={(event, { suggestion, suggestionValue }) => {
            navigate(suggestion.path, {state: {search: suggestion?.search_val}})
            setNavOpen(false)
          }}
        />
        <Index indexName="Pages" />
        <Index indexName="Products" />
      </InstantSearch>
    </div>
  )
}

export default Search
