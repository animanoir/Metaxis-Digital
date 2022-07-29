import * as React from "react"
import * as layoutStyles from "../css/Layout.module.css"
import Navbar from "../components/Navbar"
import Footer from "./Footer"


// markup
const IndexPage = ({children}) => {
  return (
    <div className={layoutStyles.layout}>
      <Navbar />
      <div className={layoutStyles.verticalineleft} />
      {children}
      <div className={layoutStyles.verticalineright} />
      <Footer />
    </div>
  )
}

export default IndexPage
