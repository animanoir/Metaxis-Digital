import React, { memo } from 'react';
import * as postsStyles from '../../css/Posts.module.css';
import Post from './Post';

const Posts = memo(({ posts }) => {
  return (
    <section className={postsStyles.container}>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </section>
  );
});

export default Posts;
