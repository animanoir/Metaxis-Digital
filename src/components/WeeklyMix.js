import * as React from "react"
import * as weeklymixStyles from '../css/WeeklyMix.module.css'
import { Link } from "gatsby"
import Marquee from "react-fast-marquee";

const WeeklyMix = () => {
  return (
    <section className={weeklymixStyles.container}>
        <Marquee pauseOnHover speed={30}>
          MIX DE LA SEMANA—<a className={weeklymixStyles.link} href="https://soundcloud.com/pleasuregallery/pleasure-gallery-w-alec-noods-radio-july-2022">pleasure gallery w/ alec - noods radio - july 2022</a>—
        </Marquee>
    </section>
  )
}

export default WeeklyMix
