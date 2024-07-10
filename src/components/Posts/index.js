import React, { memo } from 'react';
import * as postsStyles from '../../css/Posts.module.css';
import Post from './Post';


const Posts = memo(({ posts }) => (
  <section className={postsStyles.container}>
    {posts.map(({ id, ...postProps }) => (
      <Post key={id} {...postProps} />
    ))}
  </section>
));

export default Posts;
