import React from "react"
import "../styles/layout.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
