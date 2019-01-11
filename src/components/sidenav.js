import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, Link, graphql } from 'gatsby'

const Sidenav = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div>
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.id}>
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  />
)

export default Sidenav
