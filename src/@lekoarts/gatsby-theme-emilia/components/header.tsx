/** @jsx jsx */
import { Header as ThemeHeader, jsx, Styled } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useEmiliaConfig from "../hooks/use-emilia-config"
import HeaderBackground from "./header-background"
import Location from "../assets/location"
import SocialMediaList from "./social-media-list"
import Tippy from '@tippy.js/react';
import { followCursor, roundArrow } from 'tippy.js';
import 'tippy.js/themes/translucent.css'
import 'tippy.js/dist/svg-arrow.css'
import 'tippy.js/animations/shift-away.css';

const Header = () => {
  const { name, location, assetsPath } = useEmiliaConfig()
  const avatar = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 140, height: 140, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      me: file(name: { eq: "me" }) {
        childImageSharp {
          fixed(width: 140, height: 140, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeUpPropsDelay = useSpring({
    config: config.slow,
    delay: 250,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } })
  const fadeLongProps = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <ThemeHeader>
      <HeaderBackground />
      <div sx={{ textAlign: `center`, my: 5, zIndex: 10}}>
        <animated.div style={fadeProps}>
          <div
            sx={{
              overflow: `hidden`,
              borderRadius: `full`,
              height: [`100px`, `140px`],
              width: [`100px`, `140px`],
              display: `inline-block`,
              boxShadow: `0px 8px 16px #444444`,
              "> div:not([data-placeholder='true'])": {
                height: [`100px !important`, `140px !important`],
                width: [`100px !important`, `140px !important`],
              },
              filter: 'invert(1)'
            }}
          >
            {avatar && avatar.logo && avatar.logo.childImageSharp ? (
              <Img fixed={avatar.logo.childImageSharp.fixed} />
            ) : (
              <div
                sx={{
                  fontSize: 0,
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  width: `100% !important`,
                  right: 0,
                  p: 3,
                  backgroundColor: `red.2`,
                }}
                data-placeholder="true"
              >
                Place an image with the name "avatar" inside the directory "{assetsPath}"
              </div>
            )}
          </div>
        </animated.div>
        <animated.div style={fadeUpProps}>
          <Tippy content={<div style={{padding: '8px', paddingRight: '16px', paddingLeft: '16px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}><h2 style={{fontWeight: '200', color: 'white', margin: '0px', padding: '0px'}}>Hello!</h2></div>} theme='translucent' ignoreAttributes={true} inertia={true} animation='shift-away' placement='bottom' followCursor={true} plugins={[followCursor]} arrow={roundArrow} duration={200} offset='0, 32' delay={[75, 75]} flip={false} sx={{boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.333)'}}>
            <Tippy content={<div><Img fixed={avatar.me.childImageSharp.fixed} style={{borderRadius: '50%', margin: '4px', marginLeft: '6px', marginRight: '6px', top: '2px'}}/></div>} theme='translucent' sx={{borderRadius: '50%', boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.333)'}} ignoreAttributes={true} inertia={true} animation='shift-away' followCursor={true} plugins={[followCursor]} arrow={roundArrow} duration={200} offset='0, 30' delay={[75, 75]} flip={false}>
              <Styled.h1 style={{textTransform: `uppercase`, fontWeight: `600`, letterSpacing: `widest`}}>
                {name}
              </Styled.h1>
            </Tippy>
          </Tippy>
        </animated.div>
        <animated.div style={fadeUpPropsDelay}>
        <h2 style={{marginTop: '0px', paddingTop: '0px', marginBottom: '0.333em', textTransform: `uppercase`, fontWeight: `400`, letterSpacing: `widest`}}>
          Portfolio
        </h2>
          <div
            sx={{
              svg: {
                width: `20px`,
                height: `20px`,
                ".primary": { color: `iconPrimary` },
                ".secondary": { color: `iconSecondary` },
                mr: 2,
              },
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              color: `text`,
            }}
          >
            <Location /> {location}
          </div>
        </animated.div>
        <div data-testid="social-header" sx={{ mt: 4, mb: 6, a: { mx: 2 } }}>
          <animated.div style={fadeLongProps}>
            <SocialMediaList />
          </animated.div>
        </div>
      </div>
    </ThemeHeader>
  )
}

export default Header
