import React, { useState } from 'react';
import * as newsletterStyles from '../css/NewsletterForm.module.css';

const NewsletterForm = ({ smallDescription }) => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hola');
  };

  return (
    <section>
      <div className={newsletterStyles.container}>
        <h2 className={newsletterStyles.title}>Suscríbete al boletín:</h2>
        <form
          name="BoletinForm"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/NewsletterSubscribe"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="BoletinForm" />
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
        <small className={newsletterStyles.small}>{smallDescription}</small>
      </div>
    </section>
  );
};
export default NewsletterForm;
