import React from 'react';
import * as postsStyles from '../../css/Posts.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Post = ({ frontmatter }) => {
  const { title, concepts, slug, excerpt, date, author, image, featuredArticle } = frontmatter;

  const handleConcepts = (concept) => (
    <Link to={`/concepts/${concept}`} key={concept}>
      <span className={postsStyles.singleconcept}>{concept} </span>
    </Link>
  );

  const renderPostContent = (isFeatured) => (
    <div className={isFeatured ? postsStyles.featuredContainer : postsStyles.simpleContainer}>
      <GatsbyImage
        objectFit="cover"
        alt={title}
        className={isFeatured ? postsStyles.featuredImage : postsStyles.simpleImage}
        image={getImage(image)}
      />
      <div>
        <p className={postsStyles.date}>{date}</p>
        <AniLink fade to={`/posts/${slug}`}>
          <h2>{title}</h2>
        </AniLink>
        <h4>{excerpt}</h4>
        <h5>
          <span style={{ fontWeight: 'normal' }}>por </span>
          <AniLink fade to={`/autores/${author}`}>
            {author}
          </AniLink>
        </h5>
        <h6>{concepts.map((concept) => handleConcepts(concept))}</h6>
      </div>
    </div>
  );

  return <div>{renderPostContent(featuredArticle)}</div>;
};

export default React.memo(Post);
