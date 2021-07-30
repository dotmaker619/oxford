import React, { createContext, useState, useMemo, useEffect } from "react"

const StoreContext = createContext()
export default StoreContext

export const StoreContextWrapper = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  return (
    <StoreContext.Provider
      value={{ cartOpen, setCartOpen, navOpen, setNavOpen }}
    >
      {children}
    </StoreContext.Provider>
  )
}
