import * as React from 'react';
import * as postsStyles from '../../css/Posts.module.css';
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const Post = ({ frontmatter }) => {
  const { title, concepts, slug, excerpt, date, author } = frontmatter;
  return (
    <article className={postsStyles.cardcontainer}>
      <p className={postsStyles.date}>{date}</p>
      <Link to={`/posts/${slug}`}>
        <h2 className={postsStyles.title}>{title}</h2>
      </Link>
      <h4 className={postsStyles.excerpt}>{excerpt}</h4>
      <h5 className={postsStyles.author}>
        por <Link to={`/autores/${author}`}>{author}</Link>
      </h5>
      <h6 className={postsStyles.concepts}>
        {concepts.map((concept) => {
          return (
            <Link to={`/concepts/${concept}`} key={concept}>
              <span className={postsStyles.singleconcept}>{concept} </span>
            </Link>
          );
        })}
      </h6>
    </article>
  );
};

export default Post;
