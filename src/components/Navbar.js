import React, { useState, useEffect, useCallback } from 'react';
import * as navbarStyles from '../css/Navbar.module.css';
import { Link } from 'gatsby';
import telegramSvg from '../images/svg/Telegram.svg';
import { throttle } from 'lodash';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
  ];
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
  ];

  const getRandomWord = (words) => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [tesisAntitesis, setTesisAntitesis] = useState({
    tesis: getRandomWord(tesisWords),
    antitesis: getRandomWord(antitesisWords),
  });
  const [scrollY, setScrollY] = useState(0);

  const updateScrollPosition = useCallback(
    throttle(() => {
      setScrollY(window.pageYOffset);
    }, 50),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [updateScrollPosition]);

  useEffect(() => {
    let selectedTesis = getRandomWord(tesisWords);
    let selectedAntitesis = getRandomWord(antitesisWords);

    while (selectedTesis === selectedAntitesis) {
      selectedAntitesis = getRandomWord(antitesisWords);
    }

    setTesisAntitesis({ tesis: selectedTesis, antitesis: selectedAntitesis });
  }, [scrollY]);

  return (
    <nav className={navbarStyles.container}>
      <div>
        <Link to="/">
          <h1 className={navbarStyles.title}>
            <AniLink fade to="/">
              {tesisAntitesis.tesis} — {tesisAntitesis.antitesis}
              <span className={navbarStyles.antitesis} style={{ fontWeight: 'normal' }}>
                | <b>metaxis.digital</b>
              </span>{' '}
            </AniLink>{' '}
          </h1>
        </Link>
      </div>
      <ul className={navbarStyles.menulist}>
        <li>
          <AniLink fade to="/Conceptos">
            Conceptos
          </AniLink>
        </li>
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
          <a target="_blank" href="https://t.me/+Kuivv8Wpl2EyMTkx">
            <img src={telegramSvg} alt="Únete a nuestro canal de Telegram." />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
