import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

const InformationPage = ({ data }) => (
  <Layout>
    <h1>{data.microcmsInformation.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.microcmsInformation.body }} />
  </Layout>
)

export default InformationPage

export const query = graphql`
  query ($id: String!) {
    microcmsInformation(id: { eq: $id }) {
      informationId
      title
      body
      date(formatString: "YYYY.DD.MM")
    }
  }
`
