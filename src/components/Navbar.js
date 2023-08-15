import React, { useState, useEffect, useCallback } from 'react';
import * as navbarStyles from '../css/Navbar.module.css';
import { Link } from 'gatsby';
import telegramSvg from '../images/svg/Telegram.svg';
import { throttle } from 'lodash';

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
    'ludismo',
    'amor',
    'negro',
    'ceros',
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
          <Link to="/Conceptos">Conceptos</Link>
        </li>
        <li>
          <Link to="/Acerca">Acerca</Link>
        </li>
        <li>
          <Link to="/Colabora">
            <b id="glowText">¡Colabora!</b>
          </Link>
        </li>
        <li>
          <a target="_blank" href="https://t.me/+M6xJftfBovoyMGY5" rel="noreferrer">
            <img src={telegramSvg} alt="Únete a nuestro canal de Telegram" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
