import * as React from 'react';
import * as postsStyles from '../../css/Posts.module.css';
import Post from './Post';

// markup
const Posts = ({ posts }) => {
  return (
    <section className={postsStyles.container}>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </section>
  );
};

export default Posts;
