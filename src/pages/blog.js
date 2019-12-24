import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import PostPreviewList from "../components/post-preview-list"
import ParagraphStyles from "../styles/ParagraphStyles"

const BlogPage = ({ data }) => {
  const posts = [...data.allMarkdownRemark.nodes]
  return (
    <Layout>
      <SEO title="Blog" />
      <PageHeader>Blog & Tutorials</PageHeader>
      <ParagraphStyles>
        Here you can find a wealth of information relating to web development
        topics. I love to teach, so if there is something you would like to see
        reach out to me from the <Link to="/contact">contact page.</Link> For
        even more learning opportunities, check out my{" "}
        <a href="https://www.youtube.com/channel/UC9Psp9-p9jgHfDBReAAcZ3w">
          YouTube channel
        </a>{" "}
        to see all the video tutorials I have available!
      </ParagraphStyles>
      <PostPreviewList posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          description
          tags
          published
          date
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          featuredAlt
        }
      }
    }
  }
`

export default BlogPage