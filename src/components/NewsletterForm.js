import React from 'react';
import * as newsletterStyles from '../css/NewsletterForm.module.css';

const NewsletterForm = () => {
  return (
    <section>
      <div className={newsletterStyles.container}>
        <h2 className={newsletterStyles.title}>Suscríbete al boletín:</h2>
        <form
          name="NewsletterForm"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/NewsletterSubscribe"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="NewsletterForm" />
          <div>
            <input
              required
              className={newsletterStyles.emailinput}
              type="email"
              placeholder="Email"
              name="email"
            />
            <button className={newsletterStyles.button} type="submit">
              Suscribirse
            </button>
          </div>
        </form>
        <small className={newsletterStyles.small}>
          Nunca recibirás spam de nuestra parte, sólo boletines de vez en cuando sobre artículos del
          sitio.
        </small>
      </div>
    </section>
  );
};
export default NewsletterForm;
