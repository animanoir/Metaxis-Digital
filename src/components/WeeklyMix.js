import * as React from 'react';
import * as weeklymixStyles from '../css/WeeklyMix.module.css';
import Marquee from 'react-fast-marquee';

const WeeklyMix = () => {
  return (
    <section className={weeklymixStyles.container}>
      <Marquee pauseOnHover speed={34}>
        MIX DE LA SEMANA (31·7·22)—
        <a
          className={weeklymixStyles.link}
          target="_blank"
          rel="noreferrer"
          href="https://soundcloud.com/pleasuregallery/pleasure-gallery-w-alec-noods-radio-july-2022"
        >
          pleasure gallery w/ alec - noods radio - july 2022
        </a>
        —
      </Marquee>
    </section>
  );
};

export default WeeklyMix;
