import * as React from "react"
import * as postsStyles from "../../css/Posts.module.css"
import Post from "./Post"

// markup
const Posts = ({posts}) => {
  return (
    <section className={postsStyles.container}>
      <article>
        {posts.map(post => {
          return <Post key={post.id} {...post} />
        })}
      </article>
    </section>
  )
}

export default Posts
