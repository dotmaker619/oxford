import React from "react"
import Ticker from "react-ticker"

const Marquee = ({ className, children }) => (
  <div className="py-3 font-heading tracking-widest border-blue-900 border-t border-b">
    <Ticker className={className} offset="-100%">
      {() => <span className="mx-4">{children}</span>}
    </Ticker>
  </div>
)

export default Marquee
