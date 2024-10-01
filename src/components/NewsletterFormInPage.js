import React, { useState } from 'react';
import * as newsletterInPageStyles from '../css/NewsletterFormInPage.module.css';

const NewsletterFormInPage = ({ smallDescription, hasTitle=false, compactWidth = false }) => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
      <div className={compactWidth ? newsletterInPageStyles.compactWidth : newsletterInPageStyles.container}>
        <form
          className={newsletterInPageStyles.form}
          name="BoletinForm"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/BoletinSubscribe"
        >
        {hasTitle && (
          <h2 className={newsletterInPageStyles.title}>Suscríbete al boletín:</h2>
        )}
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="BoletinForm" />
          <div className={newsletterInPageStyles.formContainer}>
            <input
              required
              className={newsletterInPageStyles.emailinput}
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <button className={newsletterInPageStyles.button} type="submit">
              Suscribirse
            </button>
          </div>
        </form>
        <small className={newsletterInPageStyles.small}>{smallDescription}</small>
      </div>
  );
};
export default NewsletterFormInPage;
