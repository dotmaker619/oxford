import React from "react"
import { socials } from "../utils"

const Socials = ({ className, linkClassName }) => (
  <div className={className}>
    {socials.map((social, i) => (
      <a
        className={linkClassName}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        key={i}
        aria-label={social.name}
      >
        <i className={social.icon} />
      </a>
    ))}
  </div>
)

export default Socials
