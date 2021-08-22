import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <p>Logo</p>
      </Link>
    </header>
  )
}

export default Header
