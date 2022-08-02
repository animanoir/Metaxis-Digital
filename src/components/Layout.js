import * as React from "react"
import * as layoutStyles from "../css/Layout.module.css"
import Navbar from "../components/Navbar"
import Footer from "./Footer"
import NewsletterForm from "./NewsletterForm"
import ArenaContent from "../components/ArenaContent"

const IndexPage = ({children}) => {
  return (
    <div className={layoutStyles.layout}>
      <Navbar />
        <div className={layoutStyles.verticalineleft} />
          {children}
        <div className={layoutStyles.verticalineright} />
        <ArenaContent />
        <NewsletterForm />
      <Footer />
    </div>
  )
}

export default IndexPage
