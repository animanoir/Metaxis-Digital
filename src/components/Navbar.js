import * as React from "react"
import * as navbarStyles from '../css/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={navbarStyles.container}>
      <div className="navbar-logo">
        metaxis.digital
      </div>
      <div>
        adiós
      </div>
    </nav>
  )
}

export default Navbar
