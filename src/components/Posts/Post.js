import * as React from "react"
import * as postsStyles from "../../css/Posts.module.css"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Post = ({frontmatter}) => {
  const {title, tags, slug, excerpt} = frontmatter
  console.log(tags)
  return (
    <article className={postsStyles.cardcontainer}>
      <Link to={`/posts/${slug}`} >
          <h2 className={postsStyles.title}>{title}</h2>
      </Link>
      <h4 className={postsStyles.excerpt}>{excerpt}</h4>
      <h6 className={postsStyles.tags}>
        {
          tags.map(tag => {
            return <span className={postsStyles.singletag}>{tag}{' '}</span>
          })
        }
      </h6>
      {/*<GatsbyImage image={getImage(image)} alt={title}/>*/}
    </article>
  )
}

export default Post
