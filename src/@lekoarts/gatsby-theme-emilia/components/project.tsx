/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import Img from "gatsby-image"
import { Link } from 'gatsby'
import { ChildImageSharp } from "../types"
import Layout from "./layout"
import HeaderProject from "./header-project"
import ProjectPagination from "./project-pagination"
import SEO from "./seo"

import React, {Component, Fragment, useState, useCallback} from 'react'
import BackgroundImage from 'gatsby-background-image'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images-z-index-fix"
import graphql from 'gatsby'

function createImageDicts(images) {
  var array = []
  for(var image of images) {
    var dict = {}
    dict['title'] =image.childImageSharp.fluid.originalName
    dict['src'] = image.childImageSharp.fluid.srcWebp
    dict['width'] = image.childImageSharp.fluid.presentationWidth
    dict['height'] = image.childImageSharp.fluid.presentationHeight
    array.push(dict)
  }
  return array
}

type Props = {
  data: {
    project: {
      body: string
      excerpt: string
      date: string
      slug: string
      title: string
      areas: string[]
      cover: ChildImageSharp
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
            presentationHeight: number
            presentationWidth: number
            originalName: string
          }
        }
      }[]
    }
  }
  pageContext: {
    prev: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: ChildImageSharp
    }
    next: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: ChildImageSharp
    }
  }
}

const Project = ({ data: { project, images }, pageContext: { prev, next } }: Props) => {
  const imageFade = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  },[]);
  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  };
  const viewStyles = base => ({
    ...base,
    marginTop: '0px'
  });
  var Photos = createImageDicts(images.nodes)
  if (project.slug === '/resume') {
    return (
      <Layout>
        <SEO
          title={project.title}
          description={project.excerpt}
          pathname={project.slug}
          image={project.cover.childImageSharp.resize!.src}
        />
        <HeaderProject title={project.title} description={project.body} areas={project.areas} date={project.date}/>
        <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`]}} style={{position: 'relative'}}>
          <div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
              <div style={{display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: 1, marginRight: '1em'}}>
                <div className='cssume' style={{padding: '2em', backgroundColor: 'white', border: 'solid 1px', borderColor: 'black'}}>
                <h3>GENERAL RESUME</h3>
                  <h1 id="graham-elliot-hemsley">GRAHAM ELLIOT HEMSLEY</h1>
                  <h4 id="1-312-964-1576">+1 (312) 964-1576</h4>
                  <h4 id="ghemsleyprotonmail-ch">ghemsley@protonmail.ch</h4>
                  <h4 id="grahamhemsley-com">grahamhemsley.com</h4>
                  <h3 id="employment--volunteer-experience">EMPLOYMENT &amp; VOLUNTEER EXPERIENCE</h3>
                  <hr/>
                  <h3 id="thresholds">Thresholds</h3>
                  <h4 id="workshop-co-facilitator-march-2018---june-2018">Workshop Co-Facilitator: March 2018 - June 2018</h4>
                  <ul>
                  <li>Demonstrated activities to attendees, guided attendees to location of meetings,</li>
                  <li>Presented workshop content, contributed to topic discussions,</li>
                  <li>Organized workshop supplies, other micellaneous office tasks</li>
                  </ul>
                  <h3 id="habitat-for-humanity-restore">Habitat for Humanity ReStore</h3>
                  <h4 id="volunteer-february-2017---may-2018">Volunteer: February 2017 - May 2018</h4>
                  <ul>
                  <li>Photographed merchandise to use for merchandise ads, performed solo and group portrait photography such as employee headshots and volunteer activity documentation for use on social media and other promotional material,</li>
                  <li>Created new ad listings, wrote ad copy for listings, deleted outdated listings,</li>
                  <li>Assembled furniture such as tables, chairs, cabinets, etc. using various tools, priced items using price sticker gun,</li>
                  <li>Unloaded delivery trucks, sorted items onto and off of pallets, moved items to show floor for display, cleaned warehouse,</li>
                  <li>Watered plants, helped process new donations at gardening expo,</li>
                  <li>Awarded for continuous regular service</li>
                  </ul>
                  <h3 id="sushi-bar-of-quality-foods-comox-bc-branch">Sushi Bar of Quality Foods, Comox BC Branch</h3>
                  <h4 id="kitchenhand-june-2013-–-september-2013">Kitchenhand: June 2013 – September 2013</h4>
                  <ul>
                  <li>Received customer orders, processed payments, printed labels and receipts,</li>
                  <li>Washed, chopped, mixed, prepared ingredients according to instructions from chef, served food to customers,</li>
                  <li>Washed dishes and utensils by hand and dishwasher, cleaned working area,</li>
                  <li>Took inventory, restocked ingredients, helped chef with miscellaneous tasks upon request</li>
                  </ul>
                  <h3 id="education">EDUCATION</h3>
                  <hr/>
                  <h3 id="harry-s--truman-college">Harry S. Truman College</h3>
                  <h4 id="summer-2017---spring-2018">Summer 2017 - Spring 2018</h4>
                  <ul>
                  <li>Studied: Mathematics, Human Biology, English, Photography, Psychology</li>
                  <li>Distinguishments: 4.0 GPA, Phi Theta Kappa honors society member, marks at or above 100% in several classes</li>
                  </ul>
                  <h3 id="poudre-community-academy">Poudre Community Academy</h3>
                  <h4 id="fall-2008---spring-2011-terms">Fall 2008 - Spring 2011 terms</h4>
                  <ul>
                  <li>Distinguishments: Served as VP of student council, received awards for perfect attendance and maintaining 3.5/4 or higher GPA, maintained marks of 100% or higher in each class for full year</li>
                  </ul>
                  <h3 id="additional-skills--experience">ADDITIONAL SKILLS &amp; EXPERIENCE</h3>
                  <hr/>
                  <ul>
                  <li><p><strong>Photography</strong> enthusiast with high-end gear and six years experience, including portraiture and other work</p>
                  </li>
                  <li><p><strong>Computer assembly</strong> experience, home network engineering, Windows/Linux system administration</p>
                  </li>
                  <li><p>Experience <strong>building and deploying websites</strong> using various frameworks, esp. custom Wordpress installations</p>
                  </li>
                  <li><p>Experience <strong>programming computer and phone applications</strong> in several languages, esp. Python and Java</p>
                  </li>
                  <li><p><strong>Video production</strong> experience including filming, editing, publishing sponsored content on YouTube</p>
                  </li>
                  <li><p>Proficient with a <strong>variety of professional software</strong> including Microsoft Office and Adobe Creative Suite</p>
                  </li>
                  </ul>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: 1, marginLeft: '1em'}}>
                <div className='cssume' style={{padding: '2em', backgroundColor: 'white', border: 'solid 1px', borderColor: 'black'}}>
                  <h3>ARTIST RESUME</h3>
                  <h1 id="graham-elliot-hemsley">GRAHAM ELLIOT HEMSLEY</h1>
                  <h4 id="1-312-964-1576">+1 (312) 964-1576</h4>
                  <h4 id="ghemsleyprotonmail-ch">ghemsley@protonmail.ch</h4>
                  <h4 id="instagram-comgraham_hemsley">instagram.com/graham_hemsley</h4>
                  <h4 id="grahamhemsley-com">grahamhemsley.com</h4>
                  <h3 id="education">EDUCATION</h3>
                  <hr/>
                  <h3 id="harry-s--truman-college">Harry S. Truman College</h3>
                  <h4 id="summer-2017---spring-2018">Summer 2017 - Spring 2018</h4>
                  <ul>
                  <li><strong>Studied</strong>: Mathematics, Human Biology, English, Psychology, Darkroom Photography, Studio Photography</li>
                  <li><strong>Distinguishments</strong>: 4.0 GPA, Phi Theta Kappa honors society member, marks at/above 100% in several courses</li>
                  </ul>
                  <h3 id="poudre-community-academy">Poudre Community Academy</h3>
                  <h4 id="fall-2008---spring-2011-terms">Fall 2008 - Spring 2011 terms</h4>
                  <ul>
                  <li><strong>Distinguishments</strong>: VP of student council, received awards for perfect attendance and holding 3.5 or higher GPA,</li>
                  <li>Maintained marks of 100% or higher in every class for full year</li>
                  </ul>
                  <h3 id="professional-experience">PROFESSIONAL EXPERIENCE</h3>
                  <hr/>
                  <h3 id="graham-hemsley-digital-media">Graham Hemsley Digital Media</h3>
                  <h4 id="photographervideographer">Photographer/Videographer</h4>
                  <h4 id="2013---present">2013 - Present</h4>
                  <ul>
                  <li>Photographed Halloween event for non-profit organization Thresholds,</li>
                  <li>Volunteered documentary and portraiture photography services for non-profit organization Habitat for Humanity ReStore,</li>
                  <li>Photographed Canadian passport photo for client following official guidelines,</li>
                  <li>Photographed animal portraits for client,</li>
                  <li>Published three solicited microphone reviews on YouTube for audio equipment companies Tonor and Fifine,</li>
                  <li>Published other photography/technology product reviews and photography tutorials on YouTube,</li>
                  <li>Specializes in portrait (group and individual), landscape, still life, and documentary photography,</li>
                  <li>Utilizes Adobe products Lightroom, Photoshop, Premiere Pro, After Effects, Audition, also familiar with Capture One Pro</li>
                  <li>Camera: Fujifilm X-H1</li>
                  </ul>
                  <h3 id="thresholds">Thresholds</h3>
                  <h4 id="workshop-co-facilitator">Workshop Co-Facilitator</h4>
                  <h4 id="march-2018---june-2018">March 2018 - June 2018</h4>
                  <ul>
                  <li><p>Demonstrated activities to attendees, guided attendees to location of meetings,</p>
                  </li>
                  <li><p>Presented workshop content, contributed to topic discussions,</p>
                  </li>
                  <li><p>Organized workshop supplies, other micellaneous office tasks</p>
                  </li>
                  </ul>
                  <h3 id="habitat-for-humanity-restore">Habitat for Humanity ReStore</h3>
                  <h4 id="volunteer">Volunteer</h4>
                  <h4 id="february-2017---may-2018">February 2017 - May 2018</h4>
                  <ul>
                  <li><p>Created new ad listings, wrote ad copy for listings, deleted outdated listings,</p>
                  </li>
                  <li><p>Assembled furniture such as tables, cabinets, etc. using various tools, priced items with price gun,</p>
                  </li>
                  <li><p>Unloaded delivery trucks, sorted items onto/off of palettes, moved items to show floor,</p>
                  </li>
                  <li>Watered plants, cleaned warehouse, helped process new donations at gardening expo,</li>
                  <li>Awarded for continuous regular service</li>
                  </ul>
                  <h3 id="sushi-bar-of-quality-foods">Sushi Bar of Quality Foods</h3>
                  <h4 id="kitchenhand">Kitchenhand</h4>
                  <h4 id="june-2013-–-september-2013">June 2013 – September 2013</h4>
                  <ul>
                  <li>Received customer orders, processed payments, printed labels and receipts,</li>
                  <li>Washed, chopped, mixed, prepared ingredients according to instructions from chef,</li>
                  <li>Washed dishes and utensils by hand and dishwasher, cleaned working area, served food</li>
                  <li>Took inventory, restocked ingredients, helped chef with miscellaneous tasks upon request</li>
                  </ul>
                  <h3 id="exhibitions">EXHIBITIONS</h3>
                  <hr/>
                  <h3 id="solo">SOLO</h3>
                  <h4 id="november-2019">November 2019</h4>
                  <p><em>Bottles Up</em>, Chicago, IL</p>
                  <h3 id="group">GROUP</h3>
                  <h4 id="september-2019">September 2019</h4>
                  <p><em>Ravenswood Art Walk</em>, Chicago, IL</p>
                  <h3 id="publications">PUBLICATIONS</h3>
                  <hr/>
                  <p><strong><em>&quot;Untitled 1&quot;</em></strong>, <strong><em>&quot;Untitled 2&quot;</em></strong>, <strong><em>&quot;Untitled 3&quot;</em></strong>, <strong><em>&quot;Untitled 4&quot;</em></strong>, <strong><em>&quot;Untitled 5&quot;</em></strong> , <strong><em>&quot;Untitled 6&quot;</em></strong>, <strong><em>&quot;Untitled 7&quot;</em></strong></p>
                  <h4 id="city-brink-2018">City Brink, 2018</h4>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO
          title={project.title}
          description={project.excerpt}
          pathname={project.slug}
          image={project.cover.childImageSharp.resize!.src}
        />
        <HeaderProject title={project.title} description={project.body} areas={project.areas} date={project.date}/>
        <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`]}} style={{position: 'relative'}}>
          <Gallery id='galleryComponent' photos={Photos} onClick={openLightbox}/>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel currentIndex={currentImage} views={Photos.map(photo => ({...photo, srcset: photo.srcSet, caption: photo.title, sizes: photo.sizes}))} styles={{view: viewStyles}}/>
              </Modal>
            ):null}
          </ModalGateway>
          <ProjectPagination prev={prev} next={next} style={{position: 'relative'}}/>
        </Container>
      </Layout>
    )
  }
}

export default Project
