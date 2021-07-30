import React, { useState } from "react"
import { graphql } from "gatsby"

const FAQ = ({ questions }) => (
  <div className="max-w-xl mx-auto pb-12">
    <div className="border border-b-0 border-blue-900 shadow-lg">
      {questions.map(question => (
        <Question
          question={question.question.text}
          answer={question.answer.html}
        />
      ))}
    </div>
  </div>
)

export default FAQ

const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <dl>
      <dt
        className={`border-b border-blue-900 p-4 flex justify-between items-center cursor-pointer ${
          expanded ? "bg-blue-900 text-white" : "hover:bg-blue-100"
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{question}</span>
        <span className={`fas ${expanded ? "fa-minus" : "fa-plus"}`} />
      </dt>
      <dd className={`p-4 border-b border-blue-900 ${!expanded && "hidden"}`}>
        <div
          className="prose prose-sm"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </dd>
    </dl>
  )
}

export const fragments = graphql`
  fragment SliceFAQ on PrismicPageBodyFaq {
    id
    slice_type
    items {
      question {
        text
      }
      answer {
        html
      }
    }
  }
`
