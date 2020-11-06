import React from "react"
import { graphql } from "gatsby"

const Team = ({ data }) => {
  return (
    <div>
      <h1>{data.team.teamInfo.name}</h1>
    </div>
  )
}

export default Team

export const pageQuery = graphql`
  query($slug: String!) {
    team: contentfulTeam(slug: { eq: $slug }) {
      slug
      teeball
      numberOfPlayers
      coed
      coaches
      teamInfo {
        name
        sport
        league
      }
    }
  }
`
