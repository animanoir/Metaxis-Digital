import * as React from 'react';
import * as postsStyles from '../../css/Posts.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Post = ({ frontmatter }) => {
  const { title, concepts, slug, excerpt, date, author, image, featuredArticle } = frontmatter;
  return (
    <div>
      {featuredArticle ? (
        <div className={postsStyles.featuredContainer}>
          <GatsbyImage
            alt={title}
            className={postsStyles.featuredImage}
            image={getImage(image)}
          ></GatsbyImage>
          <p className={postsStyles.date}>{date}</p>
          <AniLink fade to={`/posts/${slug}`}>
            <h2 className={postsStyles.title}>{title}</h2>
          </AniLink>
          <h4 className={postsStyles.excerpt}>{excerpt}</h4>
          <h6 className={postsStyles.concepts}>
            {concepts.map((concept) => {
              return (
                <Link to={`/concepts/${concept}`} key={concept}>
                  <span className={postsStyles.singleconcept}>{concept}.</span>
                </Link>
              );
            })}
          </h6>
          <h5 className={postsStyles.author}>
            <span style={{ fontWeight: 'normal' }}>por</span>{' '}
            <Link to={`/autores/${author}`}>{author}</Link>
          </h5>
        </div>
      ) : (
        <div className={postsStyles.simpleContainer}>
          <GatsbyImage
            alt={title}
            className={postsStyles.simpleImage}
            image={getImage(image)}
          ></GatsbyImage>
          <div>
            <p className={postsStyles.date}>{date}</p>
            <AniLink fade to={`/posts/${slug}`}>
              <h2 className={postsStyles.title}>{title}</h2>
            </AniLink>
            <h4 className={postsStyles.excerpt}>{excerpt}</h4>
            <h6 className={postsStyles.concepts}>
              {concepts.map((concept) => {
                return (
                  <Link to={`/concepts/${concept}`} key={concept}>
                    <span className={postsStyles.singleconcept}>{concept} </span>
                  </Link>
                );
              })}
            </h6>
            <h5 className={postsStyles.author}>
              <span style={{ fontWeight: 'normal' }}>por</span>{' '}
              <Link to={`/autores/${author}`}>{author}</Link>
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
