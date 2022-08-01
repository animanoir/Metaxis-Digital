import * as React from "react"
import * as navbarStyles from '../css/Navbar.module.css'
import { Link } from "gatsby"
import WeeklyMix from "./WeeklyMix"

const Navbar = () => {
  const tesisPalabras = [
    "filosofía",
    "arte",
    "fantasmas",
    "meta",
    "tesis",
    "sol",
    "vida",
    "muerte",
    "ser",
    "meditaciones",
    "simbolismo",
    "surrealismo",
    "conciencia",
    "antimateria",
    "materia",
    "capitalismo",
    "tú",
    "ying",
    "posthumanos"
  ]
  const antitesisPalabras = [
    "computación",
    "psicología",
    "matemáticas",
    "antitesis",
    "antimateria",
    "máquinas",
    "socialismo",
    "luna",
    "antimateria",
    "nada",
    "metamorfosis",
    "yo",
    "yang",
    "ludismo"
  ]
  const [scrollY, setScrollY] = React.useState(0)
  const [tesis, setTesis] = React.useState("filosofía")
  const [antitesis, setAntitesis] = React.useState("computación")

  function logit() {
    setScrollY(window.pageYOffset)
  }

  React.useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }

    watchScroll()

    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  React.useEffect(() => {
    let selectedTesis =
      tesisPalabras[Math.floor(Math.random() * tesisPalabras.length)]
    let selectedAntitesis =
      antitesisPalabras[Math.floor(Math.random() * antitesisPalabras.length)]
    return setTesis(selectedTesis), setAntitesis(selectedAntitesis)
  }, [scrollY])

  return (
    <React.Fragment>
    <nav className={navbarStyles.container}>
      <div>
        <Link to="/"><h1 className={navbarStyles.title}><b>metaxis.digital</b> <span className={navbarStyles.antitesis} style={{fontWeight: "normal"}}>| {tesis} y {antitesis}</span>{' '}<small></small></h1></Link>
        </div>
        <ul className={navbarStyles.menulist}>
          <li>
            <Link to="/Conceptos">
              Conceptos
            </Link>
          </li>
          <li>
            <Link to="/Acerca">
              Acerca
            </Link>
          </li>
        </ul>
    </nav>
    <div>
      <WeeklyMix />
    </div>
    </React.Fragment>
  )
}

export default Navbar
