import { graphql } from "gatsby"
import ProjectsComponent from "../../gatsby-theme-emilia/@lekoarts/gatsby-theme-emilia-core/components/projects"

export default ProjectsComponent

export const query = graphql`
  query {
    allProject(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        areas
        date(formatString: "DD.MM.YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 770, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
            }
          }
        }
      }
    }
  }
`
