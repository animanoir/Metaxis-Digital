import * as React from "react"
import * as layoutStyles from "../css/Layout.module.css"
import Navbar from "../components/Navbar"
import Footer from "./Footer"


// markup
const IndexPage = ({children}) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default IndexPage
