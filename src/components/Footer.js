import React from 'react'
import * as footerStyles from '../css/Footer.module.css'
import telegramSvg from '../images/svg/Telegram.svg'
import youtubeSvg from '../images/svg/Youtube.svg'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.footerLinks}>
          <span className={footerStyles.svgIcon}>
            <a target="_blank" rel="noreferrer" href="https://t.me/+u0btF1H3XaZkNGIx">
              <img src={telegramSvg} alt="Únete a nuestro canal de Telegram." />
            </a>
          </span>
          <span className={footerStyles.svgIcon}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@metaxisdigital/videos"
            >
              <img src={youtubeSvg} alt="Suscríbete a nuestro canal en YouTube." />
            </a>
          </span>
        </div>
        <div className={footerStyles.ccommons}>
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            <img
              alt="Creative Commons License"
              style={{ borderWidth: 0, marginRight: '10px' }}
              src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            />
          </a>
          <div className={footerStyles.fantasmacontainer}>
            <p>
              Un proyecto de{' '}
              <a className={footerStyles.fantasma} href="https://fantasma.rip/">
                <b>fantasma</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
