import * as React from 'react';
import * as weeklymixStyles from '../css/WeeklyMix.module.css';
import Marquee from 'react-fast-marquee';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const WeeklyMix = () => {
  return (
    <section className={weeklymixStyles.container}>
      <Marquee style={{ width: '100vw', fontSize: '2rem' }} pauseOnHover speed={60} gradient={false}>
        <AniLink fade to="/Biblioteca">
          💕 ¿Hambre infinito y salvaje por conocimiento? ¡Visita nuestra Biblioteca! 💞
        </AniLink>
      </Marquee>
    </section>
  );
};

export default WeeklyMix;