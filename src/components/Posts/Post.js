import * as React from 'react';
import * as postsStyles from '../../css/Posts.module.css';
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Post = ({ frontmatter }) => {
  const { title, concepts, slug, excerpt, date, author } = frontmatter;
  return (
    <article className={postsStyles.cardcontainer}>
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
    </article>
  );
};

export default Post;
