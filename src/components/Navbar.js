import * as React from "react"
import * as navbarStyles from '../css/Navbar.module.css'
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className={navbarStyles.container}>
      <div>
        <Link to="/"><h1 className={navbarStyles.title}>metaxis.digital</h1></Link>
      </div>
      <div>
        adiós
      </div>
    </nav>
  )
}

export default Navbar
