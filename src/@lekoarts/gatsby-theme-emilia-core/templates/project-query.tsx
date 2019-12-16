import { graphql } from "gatsby"
import ProjectComponent from "../../gatsby-theme-emilia/@lekoarts/gatsby-theme-emilia-core/components/project"

export default ProjectComponent

export const query = graphql`
  query($slug: String!, $absolutePathRegex: String!) {
    images: allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxHeight: 1080, quality: 90) {
            originalName
            presentationHeight
            presentationWidth
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    project(slug: { eq: $slug }) {
      body
      excerpt
      date(formatString: "DD.MM.YYYY")
      slug
      title
      areas
      cover {
        childImageSharp {
          resize(width: 800, quality: 90) {
            src
          }
        }
      }
    }
  }
`
