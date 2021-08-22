import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import PostLink from "../components/post-link"

import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

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
          postDate={dayjs.utc(node.date).tz("Asia/Tokyo").format("YYYY-MM-DD")}
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
          date
          informationId
          publishedAt
          title
        }
      }
    }
  }
`
