import React, { useState, useEffect, Fragment, useCallback } from 'react';
import * as navbarStyles from '../css/Navbar.module.css';
import { Link } from 'gatsby';
import telegramSvg from '../images/svg/Telegram.svg';

const Navbar = () => {
  const tesisPalabras = [
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
  ];
  const antitesisPalabras = [
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
    'ludismo',
    'amor',
    'negro',
    'ceros',
  ];

  const [tesisAntitesis, setTesisAntitesis] = useState({
    tesis: 'filosofía',
    antitesis: 'computación',
  });
  const [scrollY, setScrollY] = useState(0);

  const logit = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', logit);
    return () => {
      window.removeEventListener('scroll', logit);
    };
  }, [logit]);

  useEffect(() => {
    let selectedTesis = tesisPalabras[Math.floor(Math.random() * tesisPalabras.length)];
    let selectedAntitesis = antitesisPalabras[Math.floor(Math.random() * antitesisPalabras.length)];

    while (selectedTesis === selectedAntitesis) {
      selectedAntitesis = antitesisPalabras[Math.floor(Math.random() * antitesisPalabras.length)];
    }

    setTesisAntitesis({ tesis: selectedTesis, antitesis: selectedAntitesis });
  }, [scrollY]);

  return (
    <Fragment>
      <nav className={navbarStyles.container}>
        <div>
          <Link to="/">
            <h1 className={navbarStyles.title}>
              <b>metaxis.digital</b>{' '}
              <span className={navbarStyles.antitesis} style={{ fontWeight: 'normal' }}>
                | {tesisAntitesis.tesis} — {tesisAntitesis.antitesis}
              </span>{' '}
              <small></small>
            </h1>
          </Link>
        </div>
        <ul className={navbarStyles.menulist}>
          <li>
            <Link to="/Acerca">Acerca</Link>
          </li>
          <li>
            <Link to="/Conceptos">Conceptos</Link>
          </li>
          <li>
            <a target="_blank" href="https://t.me/+M6xJftfBovoyMGY5" rel="noreferrer">
              <img src={telegramSvg} alt="Únete a nuestro canal de Telegram" />
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
