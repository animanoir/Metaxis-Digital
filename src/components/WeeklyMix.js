import * as React from 'react';
import * as weeklymixStyles from '../css/WeeklyMix.module.css';
import Marquee from 'react-fast-marquee';

const WeeklyMix = () => {
  return (
    <section className={weeklymixStyles.container}>
      <Marquee pauseOnHover speed={34} gradient={false}>
        El sitio está siendo optimizado en estos momentos.
      </Marquee>
    </section>
  );
};

export default WeeklyMix;

// <a
// href="https://www.are.na/degrees-degrees-bullet-period/metaxis-digital-mixes"
// target="_blank"
// rel="noreferrer"
// >
// MIX DE LA SEMANA
// </a>
// (2·10·22)—
// <a
// className={weeklymixStyles.link}
// target="_blank"
// rel="noreferrer"
// href="https://soundcloud.com/crackmagazine/sunday-mix-lucrecia-dalt"
// >
// Sunday Mix: Lucrecia Dalt
// </a>
