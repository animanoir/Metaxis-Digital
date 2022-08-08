import * as React from 'react';
import * as weeklymixStyles from '../css/WeeklyMix.module.css';
import Marquee from 'react-fast-marquee';

const WeeklyMix = () => {
  return (
    <section className={weeklymixStyles.container}>
      <Marquee pauseOnHover speed={34}>
        MIX DE LA SEMANA (7·8·22)—
        <a
          className={weeklymixStyles.link}
          target="_blank"
          rel="noreferrer"
          href="https://soundcloud.com/cminuss/gi-gi-extended-mix"
        >
          Gi Gi - extended mix
        </a>
      </Marquee>
    </section>
  );
};

export default WeeklyMix;
