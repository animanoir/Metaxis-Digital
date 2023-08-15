import React, { memo, useCallback } from 'react';
import * as postsStyles from '../../css/Posts.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Post = memo(({ frontmatter }) => {
  const { title, concepts, slug, excerpt, date, author, image, featuredArticle } = frontmatter;

  const handleConcepts = useCallback(
    (concept) => (
      <Link to={`/concepts/${concept}`} key={concept}>
        <span className={postsStyles.singleconcept}>{concept} </span>
      </Link>
    ),
    []
  );

  const renderPostContent = (isFeatured) => (
    <div className={isFeatured ? postsStyles.featuredContainer : postsStyles.simpleContainer}>
      <GatsbyImage
        alt={title}
        className={isFeatured ? postsStyles.featuredImage : postsStyles.simpleImage}
        image={getImage(image)}
      />
      <div>
        <p className={postsStyles.date}>{date}</p>
        <AniLink fade to={`/posts/${slug}`}>
          <h2 className={postsStyles.title}>{title}</h2>
        </AniLink>
        <h4 className={postsStyles.excerpt}>{excerpt}</h4>
        <h6 className={postsStyles.concepts}>
          {concepts.map((concept) => handleConcepts(concept))}
        </h6>
        <h5 className={postsStyles.author}>
          <span className={postsStyles.authorPrefix}>por</span>
          <Link to={`/autores/${author}`}>{author}</Link>
        </h5>
      </div>
    </div>
  );

  return <div>{featuredArticle ? renderPostContent(true) : renderPostContent(false)}</div>;
});

export default Post;
