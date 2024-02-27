import React from 'react';
import * as postsStyles from '../../css/Posts.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import BookCard from '../BookCard.js';

const Post = React.memo(({ frontmatter }) => {
  const { title, concepts, slug, excerpt, date, author, image, featuredArticle, type } =
    frontmatter;

  const ConceptLink = ({ concept }) => (
    <Link to={`/concepts/${concept}`} key={concept}>
      <span className={postsStyles.singleconcept}>{concept} </span>
    </Link>
  );

  const renderPostContent = () => {
    /**
     * Represents the type of the post.
     * @type {string}
     * @description If the post has the type "libro", the layout of the post will be changed to the BookCard layout.
     */
    const postType = type;

    /**
     * The CSS class name for the container element of the post.
     *
     * @type {string}
     */
    const containerClass = featuredArticle
      ? postsStyles.featuredContainer
      : postsStyles.simpleContainer;

    const imageClass = featuredArticle ? postsStyles.featuredImage : postsStyles.simpleImage;

    return (
      <div className={containerClass}>
        {postType === 'libro' ? (
          <BookCard frontmatter={frontmatter} />
        ) : (
          <React.Fragment>
            <GatsbyImage
              objectFit="cover"
              alt={title}
              className={imageClass}
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
              <h6 className={postsStyles.conceptsContainer}>
                {concepts.map((concept) => (
                  <ConceptLink key={concept} concept={concept} />
                ))}
              </h6>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  };

  return <div>{renderPostContent()}</div>;
});

export default Post;
