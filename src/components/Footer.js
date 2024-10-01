import React from 'react';
import * as footerStyles from '../css/Footer.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.footerLinks}>
          <a target="_blank" href="https://x.com/metaxisdigital" rel="noopener noreferrer">
            <span className={footerStyles.twittericon} id="tw-icon">
              .x
            </span>
          </a>
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
  );
};
export default Footer;
