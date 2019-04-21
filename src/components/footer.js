import React from "react"
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <footer>
      <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
        Back to Top
      </Link>
    </footer>
  )
}

export default Footer
