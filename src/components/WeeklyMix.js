import * as React from 'react';
import * as weeklymixStyles from '../css/WeeklyMix.module.css';
import Marquee from 'react-fast-marquee';

const WeeklyMix = () => {
  return (
    <section className={weeklymixStyles.container}>
      <Marquee pauseOnHover speed={34} gradient={false}>
        MIX DE LA SEMANA (14·8·22)—
        <a
          className={weeklymixStyles.link}
          target="_blank"
          rel="noreferrer"
          href="https://soundcloud.com/living_roooom/living-room-n39-joanna-oj"
        >
          Living Room n°39 - Joanna OJ
        </a>
      </Marquee>
    </section>
  );
};

export default WeeklyMix;
