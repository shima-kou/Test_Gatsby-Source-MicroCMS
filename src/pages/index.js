import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import PostLink from "../components/post-link"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      {data.allMicrocmsInformation.edges.map(({ node }) => (
        <PostLink
          key={node.informationId}
          postId={node.informationId}
          postTitle={node.title}
          postBody={node.body}
          postDate={node.date}
        />
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsInformation {
      edges {
        node {
          body
          date(formatString: "YYYY.DD.MM")
          informationId
          publishedAt
          title
        }
      }
    }
  }
`
