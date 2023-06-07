import React, { useState } from 'react';
import * as newsletterStyles from '../css/NewsletterForm.module.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar cualquier validación antes de enviar
    // el formulario o enviar los datos tú mismo
  };

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
          onSubmit={handleSubmit}
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
              value={email}
              onChange={handleChange}
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
