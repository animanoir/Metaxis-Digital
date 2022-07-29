import * as React from "react"
import * as postsStyles from "../../css/Posts.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Post = ({frontmatter}) => {
  const {title, author, tags, slug, excerpt, image} = frontmatter
  return (
    <div>
      <Link to={`/posts/${slug}`} className={postsStyles.container}>
          <h2>{title}</h2>
      </Link>
      <h4>{excerpt}</h4>
      <h5>{author}</h5>
      <h6>{tags}</h6>
      <GatsbyImage image={getImage(image)} alt={title}/>
    </div>
  )
}

export default Post
