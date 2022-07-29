import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as postStyles from '../css/PostLayout.module.css'
import styled from "styled-components"



export const postQuery = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        date(formatString: "M/D/YYYY")
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        author
      }
      body
    }
  }
`

const PostLayout = ({data}) => {
  const {mdx: {frontmatter: {title, date, author, image}, body}} = data
  return (
    <Layout>
        <article className={postStyles.container}>
        <div className={postStyles.infocontainer}>
          <h1 className={postStyles.title}>{title}</h1>
          <h3 className={postStyles.author}>escrito por <b>{author}</b></h3>
          <h3 className={postStyles.date}>{date}</h3>
        </div>
          <GatsbyImage image={getImage(image)} alt={title}/>
          <PostStyleWrapper>
            <MDXRenderer>
              {body}
            </MDXRenderer>
          </PostStyleWrapper>
      </article>
    </Layout>
  )
}

const PostStyleWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  font-family: 'Lora', serif;
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.75rem;
  }
  blockquote {
    font-family: 'Karla', serif;
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
    text-align: justify;
    line-height: 1.55;
    font-family: 'Lora', serif;
    color: #000;
  }
`

export default PostLayout
