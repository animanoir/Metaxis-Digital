import React, { memo } from 'react';
import * as postsStyles from '../../css/Posts.module.css';
import Post from './Post';
import NewsletterFormInPage from '../NewsletterFormInPage'; // Import the component

const Posts = memo(({ posts }) => {
  const postsWithNewsletter = [];

  posts.forEach((post, index) => {
    postsWithNewsletter.push(<Post key={post.id} {...post} />);
    if ((index + 1) % 3 === 0) {
      postsWithNewsletter.push(<NewsletterFormInPage compactWidth halfWidth key={`newsletter-${index}`} hasTitle />);
    }
  });

  return (
    <section className={postsStyles.container}>
      {postsWithNewsletter}
    </section>
  );
});

export default Posts;