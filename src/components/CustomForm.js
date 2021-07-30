import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const types = ["Pennant", "Camp Flag", "Banner", "Not Sure"]

const CustomForm = () => {
  const {
    // data: {
    prismicCustom: {
      data: {
        content: { html },
      },
    },
    // },
  } = useStaticQuery(graphql`
    query CustomFormQuery {
      prismicCustom {
        data {
          content {
            html
          }
        }
      }
    }
  `)
  return (
    <div className="md:flex">
      <div className="md:w-1/2 bg-yellow-100 bg-opacity-25 p-8 flex items-center justify-center">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="md:w-1/2 p-8">
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="Custom"
          encType="multipart/form-data"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="Custom" />

          <p className="text-right text-xs">* = required</p>

          <Field title="What's your name? *">
            <input name="Name" type="text" placeholder="Jane Doe" required />
          </Field>
          <Field title="Email Address *">
            <input
              name="Email"
              type="email"
              placeholder="jane@doe.com"
              required
            />
          </Field>
          <Field title="What do you want to make?">
            <div className="-mx-4 flex flex-wrap">
              {types.map((type, i) => (
                <div className="px-4" key={i}>
                  <label className="inline-flex items-center">
                    <input type="radio" name="Type" value={type} />
                    <span className="ml-2">{type}</span>
                  </label>
                </div>
              ))}
            </div>
          </Field>
          <Field title="What's your idea?">
            <textarea className="mb-2" name="Idea" />
          </Field>
          <Field title="Upload any artwork or inspiration">
            <input type="file" name="File" multiple />
          </Field>
          <div className="text-center mt-12">
            <input
              className="bg-blue-900 px-6 py-3 font-heading text-white uppercase hover:bg-orange-500"
              type="submit"
              value="Let's Get Started"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomForm

const Field = ({ children, title }) => (
  <label className="block mb-4">
    <div className="font-heading text-xs uppercase mb-4 tracking-wider">
      {title}
    </div>
    {children}
  </label>
)
