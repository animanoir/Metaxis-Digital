import React from 'react';
import * as bookcardStyles from '../css/BookCard.module.css';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BookCard = ({ frontmatter }) => {
  return (
    <div className={bookcardStyles.bookCard}>
      <Link key={frontmatter.name} to={`/libro/${frontmatter.slug}`}>
        {frontmatter.image && (
          <GatsbyImage
            quality={50}
            image={getImage(frontmatter.image.childImageSharp.gatsbyImageData)}
            alt={frontmatter.title}
          />
        )}
        <h2>{frontmatter.title}</h2>
        <p>
          <i>
            {frontmatter.author}
            {frontmatter.publishedYear ? `—${frontmatter.publishedYear}` : ''}
          </i>
        </p>
        <p>{frontmatter.description}</p>
      </Link>
    </div>
  );
};

export default BookCard;
