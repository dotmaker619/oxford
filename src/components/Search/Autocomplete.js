import React, { useState } from "react"
import AutoSuggest from "react-autosuggest"
import { connectAutoComplete } from "react-instantsearch-dom"
// import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import Hit from "./Hit"
const Autocomplete = ({
  hits,
  currentRefinement,
  refine,
  onSuggestionSelected,
}) => {
  const [value, setValue] = useState(currentRefinement)

  console.log(hits)
  let newHits = [...hits]
  if(hits && hits.length>1){
    const subhits = hits.filter(_item=>_item.index=="Products")[0]?.hits
    if(subhits){
      let newone = {...subhits[0]}
      newone.type = 'Button'
      newone.path = '/search'
      if(value){
        newone.search_val = value
      }
      subhits.push(newone)
      newHits = [{...hits.filter(_item=>_item.index=="Products")[0], hits:subhits},hits.filter(_item=>_item.index=="Pages")[0]]
    }
  }

  return (
    <AutoSuggest
      suggestions={newHits}
      multiSection={true}
      highlightFirstSuggestion={true}
      onSuggestionsFetchRequested={({ value }) => refine(value)}
      onSuggestionsClearRequested={() => refine()}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={hit => hit.title}
      shouldRenderSuggestions={() => true}
      renderSuggestion={hit => <Hit hit={hit} />}
      inputProps={{
        onChange: (event, { newValue }) => setValue(newValue),
        placeholder: "Search Everything",
        value,
      }}
      renderSectionTitle={section => (
        <div className="bg-gray-100 px-3 py-1 text-xs cursor-default font-heading uppercase">
          {section.index}
        </div>
      )}
      getSectionSuggestions={section => section.hits}
      theme={{
        container: "relative",
        input:
          "text-black pl-3 py-2 w-full lg:w-64 font-sans focus:outline-none placeholder:text-grey-300 border text-sm rounded-none",
        suggestionsContainer:
          "bg-white border-blue-900 border absolute w-full lg:w-96 right-0 text-black z-50 font-sans",
        suggestionHighlighted: "bg-blue-200",
      }}

    />
  
  )
}

export default connectAutoComplete(Autocomplete)
