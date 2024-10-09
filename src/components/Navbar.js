import React, { useState, useEffect, useCallback } from 'react'
import * as navbarStyles from '../css/Navbar.module.css'
import { Link } from 'gatsby'
import boletinSVG from '../images/svg/BoletinSVG.svg'
import { throttle } from 'lodash'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Navbar = () => {
  const tesisWords = [
    'filosofía',
    'arte',
    'fantasmas',
    'meta',
    'tesis',
    'sol',
    'vida',
    'muerte',
    'ser',
    'meditaciones',
    'simbolismo',
    'surrealismo',
    'conciencia',
    'antimateria',
    'materia',
    'capitalismo',
    'tú',
    'ying',
    'posthumanos',
    'amor',
    'blanco',
    'unos',
    'existencialismo',
    'creatividad',
    'leyendas',
    'ultraterrenal',
    'investigación',
    'estrellas',
    'existencia',
    'renacimiento',
    'alma',
    'contemplaciones',
    'analogías',
    'onirismo',
    'percepción',
    'energía oscura',
    'esencia',
    'individualismo',
    'equilibrio',
    'transhumanismo',
    'pasión',
    'claridad',
    'pluralidad',
    'sublimación',
    'catalizador',
    'espíritu',
    'navegación',
    'infinito',
    'horizonte',
    'iluminación',
    'célula',
    'ecosistema',
    'destello',
    'sinestesia',
    'metáfora',
    'renovación',
    'vínculo',
    'universalidad',
    'concatenación',
    'origen',
    'transición',
    'expansión',
    'resiliencia',
    'introspección',
    'horizonte',
    '0',
  ]
  const antitesisWords = [
    'computación',
    'psicología',
    'matemáticas',
    'antitesis',
    'antimateria',
    'máquinas',
    'socialismo',
    'luna',
    'antimateria',
    'nada',
    'metamorfosis',
    'yo',
    'yang',
    'capitalismo',
    'amor',
    'negro',
    'ceros',
    'cibernética',
    'neurociencia',
    'lógica',
    'contraposición',
    'partículas',
    'robots',
    'comunismo',
    'galaxias',
    'vacío',
    'transformación',
    'ego',
    'dualidad',
    'tecnocracia',
    'ontología',
    'oscuridad',
    'singularidad',
    'fragmentación',
    'confinamiento',
    'vacío existencial',
    'desconexión',
    'finito',
    'horizonte',
    'anulación',
    'partícula',
    'aislamiento',
    'obscuridad',
    'desintegración',
    'paradoja',
    'recesión',
    'análisis',
    'restrictividad',
    'limitación',
    'disolución',
    'saturación',
    'contradicción',
    'fusión',
    'temporalidad',
    'dispersión',
    '1',
  ]

  const getRandomWord = (words) => {
    return words[Math.floor(Math.random() * words.length)]
  }

  const [tesisAntitesis, setTesisAntitesis] = useState({
    tesis: getRandomWord(tesisWords),
    antitesis: getRandomWord(antitesisWords),
  })
  const [scrollY, setScrollY] = useState(0)

  const updateScrollPosition = useCallback(
    throttle(() => {
      setScrollY(window.pageYOffset)
    }, 50),
    []
  )

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition)
    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  }, [updateScrollPosition])

  useEffect(() => {
    let selectedTesis = getRandomWord(tesisWords)
    let selectedAntitesis = getRandomWord(antitesisWords)

    while (selectedTesis === selectedAntitesis) {
      selectedAntitesis = getRandomWord(antitesisWords)
    }

    setTesisAntitesis({ tesis: selectedTesis, antitesis: selectedAntitesis })
  }, [scrollY])

  return (
    <nav className={navbarStyles.container}>
      <div>
        <Link to="/">
          <h1 className={navbarStyles.title}>
            <AniLink fade to="/">
              <span className={navbarStyles.antitesis} style={{ fontWeight: 'normal' }}>
                {' '}
                {tesisAntitesis.tesis} — {tesisAntitesis.antitesis} |{' '}
              </span>
              <span>
                <b>metaxis.digital</b>
              </span>{' '}
            </AniLink>{' '}
          </h1>
        </Link>
      </div>
      <ul className={navbarStyles.menulist}>
        <li>
          <AniLink fade to="/Acerca">
            Acerca
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/Colabora">
            <b>¡Colabora!</b>
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/Biblioteca">
            <b>Biblioteca</b>
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/Conceptos">
            Conceptos
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/Eventos">
            Eventos
          </AniLink>
        </li>
        <li id={navbarStyles.suscribirseBoletin}>
          <AniLink fade to="/SuscribirseBoletin">
            <img src={boletinSVG} alt="Suscríbete a nuestro boletín." />
            <span className={navbarStyles.glowText}>¡Suscríbete al boletín!</span>
          </AniLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
