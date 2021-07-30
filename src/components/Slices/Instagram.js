import React from "react"
import { InstagramLogo } from "phosphor-react"
import Truncate from "react-truncate"
import useSWR from "swr"
const classNames = require("classnames")

const fetcher = url => fetch(url).then(r => r.json())

const Instagram = () => {
  const { data } = useSWR("/.netlify/functions/instagram", fetcher)

  return (
    <section>
      <a
        className="block bg-blue-900 text-yellow-100 text-xxs text-center uppercase tracking-widest leading-none py-2"
        href="https://instagram.com/oxfordpennant"
        target="_blank"
        rel="noreferrer"
      >
        Follow Us On Instagram
      </a>
      <div className="flex items-stretch flex-wrap md:flex-no-wrap">
        {data?.records?.slice(0, 6).map((post, i) => (
          <div className="w-1/3 md:w-1/6" key={i}>
            <a
              className="block bg-cover relative group overflow-hidden"
              href={post.fields.URL}
              style={{
                backgroundImage: `url(${post.fields.Image})`,
                paddingTop: "100%",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={classNames(
                  "flex flex-col items-center justify-center bg-blue-900 bg-opacity-80 inset-0 absolute p-4 overflow-hidden",
                  "text-white text-xs text-center",
                  "transform-gpu opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                )}
              >
                {post.fields.Description.trunc(128)}
                <div className="mt-4 flex items-center text-xxs">
                  <InstagramLogo className="mr-1" size={24} />
                  Open on Instagram
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Instagram

String.prototype.trunc = function (n) {
  return this.substr(0, n - 1) + (this.length > n ? "..." : "")
}
