/** @jsx jsx */
import React from 'react'
import { Footer as ThemeFooter, jsx, Styled, Container, useColorMode } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import AboutMeMDX from "../texts/about-me.mdx"
import useEmiliaConfig from "../hooks/use-emilia-config"
import SocialMediaList from "./social-media-list"
import ColorModeToggle from "./colormode-toggle"
import LeftArrow from "../assets/left-arrow"

const Footer = () => {
  const { showThemeAuthor } = useEmiliaConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  const backButtonProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(-30px, 0, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  const avatar = useStaticQuery(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 40, height: 40, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  if (window.location.pathname != '/') {
    return (
      <ThemeFooter
        sx={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
        }}
      >
        <Container>
          <div sx={{ display: `grid`, gridGap: 4, gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `2fr 1fr`] }}>
            <div sx={{ p: { mb: 0 }, h2: { mt: 0, textTransform: `uppercase`, fontWeight: `500` } }}>
              <AboutMeMDX />
            </div>
            <div
              sx={{
                textAlign: [`center`, `center`, `center`, `right`],
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `space-between`,
              }}
            >
              <div/>
              <div sx={{ mt: [4, 4, 4, 0] }}>
                <div sx={{ a: { ml: [1, 1, 1, 2], mr: [1, 1, 1, 0] } }}>
                  <SocialMediaList />
                </div>
                <div sx={{ color: `textMuted` }}>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</div>
              </div>
            </div>
          </div>
          <animated.div style={backButtonProps}>
            <Link
              to="/"
              aria-label={`${name} - Back to homepage`}
              sx={{
                paddingTop: '2em',
                display: `flex`,
                alignItems: `center`,
                color: `text`,
                textDecoration: `none`,
                svg: {
                  transition: `transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
                },
                "&:hover, &:focus": { svg: { transform: `translateX(-6px)` } },
              }}
            >
              <LeftArrow />
              <div
                sx={{
                  overflow: `hidden`,
                  borderRadius: `full`,
                  width: `40px`,
                  height: `40px`,
                  display: `inline-block`,
                  boxShadow: `0px 2px 4px #444444`,
                  mx: 2,
                  filter: 'invert(1)'
                }}
              >
                {avatar && avatar.file && avatar.file.childImageSharp && (
                  <Img fixed={avatar.file.childImageSharp.fixed} />
                )}
              </div>
              <span sx={{ textTransform: `uppercase`, fontWeight: `500`, letterSpacing: 'wide' }}>Home</span>
            </Link>
          </animated.div>
        </Container>
        {showThemeAuthor && (
          <Container
            sx={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              color: `text`,
              fontWeight: `semibold`,
              a: { color: `text` },
              mt: 4,
            }}
          >
            <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
            {` `}
            <Styled.a
              aria-label="Link to the theme's GitHub repository"
              sx={{ ml: 2 }}
              href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia"
            >
              Theme
            </Styled.a>
            <div sx={{ mx: 1 }}>by</div>
            {` `}
            <Styled.a aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
              LekoArts
            </Styled.a>
          </Container>
        )}
      </ThemeFooter>
    )
  } else return (
    <ThemeFooter
      sx={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
      }}
    >
      <Container>
        <div sx={{ display: `grid`, gridGap: 4, gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `2fr 1fr`] }}>
          <div sx={{ p: { mb: 0 }, h2: { mt: 0, textTransform: 'uppercase', fontWeight: 500 } }}>
            <AboutMeMDX />
          </div>
          <div
            sx={{
              textAlign: [`center`, `center`, `center`, `right`],
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `space-between`,
            }}
          >
            <div/>
            <div sx={{ mt: [4, 4, 4, 0] }}>
              <div sx={{ a: { ml: [1, 1, 1, 2], mr: [1, 1, 1, 0] } }}>
                <SocialMediaList />
              </div>
              <div sx={{ color: `textMuted` }}>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</div>
            </div>
          </div>
        </div>
      </Container>
      {showThemeAuthor && (
        <Container
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            color: `text`,
            fontWeight: `semibold`,
            a: { color: `text` },
            mt: 4,
          }}
        >
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
          {` `}
          <Styled.a
            aria-label="Link to the theme's GitHub repository"
            sx={{ ml: 2 }}
            href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-emilia"
          >
            Theme
          </Styled.a>
          <div sx={{ mx: 1 }}>by</div>
          {` `}
          <Styled.a aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
            LekoArts
          </Styled.a>
        </Container>
      )}
    </ThemeFooter>
  )
}

export default Footer
