import React, { useMemo } from 'react';
import { Box, Center, Text, Flex, Button } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';
import projects from '../utils/projects.json';
import aboutMe from '../utils/aboutMe.json';
import '../css/index.css';
// import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'
// import { FaDev } from 'react-icons/fa'

const socialsIconSize = '20px';
const languageHighlightStyles = {
  backgroundColor: 'grey',
  marginLeft: '6px',
  padding: '2px 4px 2px 4px',
  fontWeight: 'bold',
  color: 'white'
};
const headerStyles: any = {
  textAlign: 'center'
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.001
    }
  }
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0
  }
};

// markup
const IndexPage = ({ data }: { data: any }) => {
  const myProjects = useMemo(
    () =>
      projects.map(project => ({
        ...project,
        gatsbyImage: data.allImageSharp.edges.find((image: any) => image.node.original.src.includes(project.image))
      })),
    [data]
  );

  return (
    <Layout>
      {/* <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}> */}
      <motion.div initial={{ y: '100%' }} animate={{ y: -10 }} transition={{ duration: 1 }}>
        <Center h="90vh" mb="12">
          <Box>
            <div className="introduction-container">
              <div className="introduction-left-content">
                <StaticImage
                  className="introduction-left-content__image"
                  src="../images/portrait.jpg"
                  alt="My Picture"
                  placeholder="blurred"
                />
              </div>
              <div className="introduction-right-content">
                <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left" color="grey.300">
                  <Text fontSize={{ base: '2xl', md: '4xl' }}>Hi 👋</Text>
                  <br />
                  <Text>I{"'"}m Adeniyi Olamide, best called ola! I build great stuff for the web 🚀.</Text>
                  <br />
                  <Text>
                    I really love programming especially web development, I build, design & scale full-stack web applications.
                  </Text>
                  <br />
                  <Text>
                    I love my work, it has allowed me to understand development of digital products and how it affects our users.
                  </Text>
                  <br />
                  <Text>Scoll down to know more about me!</Text>
                </Text>
              </div>
            </div>
            {/* <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 30 }} justifyContent={{ base: 'center' }}>
              <Box width={{ base: '150px', md: '300px' }} height={{ base: '150px', md: '350px' }}>
                <div>
                    <StaticImage
                      style={{ borderRadius: '20px', width: '100%', height: '100%' }}
                      src="../images/portrait.jpg"
                      alt="My Picture"
                      placeholder="blurred"
                    />
                </div>
              </Box>
              <Box maxWidth={'600px'}>
                <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left" color="grey.300">
                  <Text fontSize={{ base: '2xl', md: '4xl' }}>Hi 👋</Text>
                  <br />
                  <Text>I{"'"}m Adeniyi Olamide, best called ola! I build great stuff for the web 🚀.</Text>
                  <br />
                  <Text>I really love programming especially web development, I build, design & scale full-stack web applications.</Text>
                  <br />
                  <Text>I love my work, it has allowed me to understand development of digital products and how it affects our users.</Text>
                  <br />
                  <Text>Scoll down to know more about me!</Text>
                </Text>
              </Box>
            </Box> */}
            {/* <Flex flexWrap='wrap' gap={{ base: 10, md: 20 }} justifyContent={{ base: 'center', md: 'left' }}>
              <Box width={{ base: '150px', md: '300px' }} height={{ base: '150px', md: '350px' }} borderRadius={{ base: '100%', md: '20px' }}>
                <StaticImage
                  style={{ borderRadius: '20px', width: '100%', minWidth: '', height: '100%' }}
                  src="../images/portrait.jpg"
                  alt="My Picture"
                  placeholder="blurred"
                />
                <Flex marginTop='20px' justifyContent={'center'} gap="5">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram fontSize={socialsIconSize} />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub fontSize={socialsIconSize} />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin fontSize={socialsIconSize} />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitter fontSize={socialsIconSize} />
                  </a>
                </Flex>
              </Box>
              <Box display={'block'}>
                <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left" color="grey.300">
                  <Text fontSize={{ base: '2xl', md: '4xl' }}>Hi 👋</Text>
                  <br />
                  <Text>I{"'"}m Adeniyi Olamide, best called ola! I build great stuff for the web 🚀.</Text>
                  <br />
                  <Text>I really love programming especially web development, I build, design & scale full-stack web applications.</Text>
                  <br />
                  <Text>I love my work, it has allowed me to understand development of digital products and how it affects our users.</Text>
                  <br />
                  <Text>Scoll down to know more about me!</Text>
                </Text>
              </Box>
            </Flex> */}
          </Box>
          {/* <Flex w={'100'} justifyContent={'space-between'} position={'absolute'} bottom={0}>
          <Text>Scroll down for more</Text>
        </Flex> */}
          {/* <div class="absolute bottom-0 flex justify-between w-full my-5 py-2">
          <div class="flex items-center">
            <div class="ml-2 mt-1" id="scroll-indicator" style="opacity:0;">
              Scroll down for more
            </div>
          </div> */}
        </Center>
      </motion.div>

      <Box mb={20} display="block">
        <Box mb={10} display="block">
          <Text fontSize={{ base: 'xl', md: '3xl' }} style={headerStyles}>
            Skills & Technologies
          </Text>
        </Box>
        <Flex justifyContent="center" alignContent={'center'} gap={5} wrap={'wrap'}>
          <motion.div viewport={{ once: true }} initial={{ x: '-100%' }} whileInView={{ x: 0 }} transition={{ duration: 0.4 }}>
            <Box boxShadow="2xl" p={5} fontSize="lg" maxWidth={'420px'}>
              <Text textAlign="center" fontSize="6xl">
                🤭
              </Text>
              <Text textAlign="center" fontSize="xl">
                <b>Frontend Development</b>
              </Text>

              <div>
                I use the major web languages and frameworks for frontend i.e
                <code style={languageHighlightStyles}>HTML</code>,<code style={languageHighlightStyles}>CSS</code>
                <code style={languageHighlightStyles}>JavaScript</code>,<code style={languageHighlightStyles}>Sass/SCSS</code>,{' '}
                <br />
                <code style={languageHighlightStyles}>ReactJS</code>,<code style={languageHighlightStyles}>VueJS</code>,
                <code style={languageHighlightStyles}>Tailwindcss</code>. <br />I also convert Figma/Adobe Xd design to
                VueJS/NuxtJS frontend pages.
              </div>
            </Box>
          </motion.div>

          <motion.div viewport={{ once: true }} initial={{ x: '100%' }} whileInView={{ x: 0 }} transition={{ duration: 0.2 }}>
            <Box boxShadow="2xl" p="5" fontSize="lg" maxWidth={'420px'}>
              <Text textAlign="center" fontSize="6xl">
                😎
              </Text>
              <Text textAlign="center" fontSize="xl">
                <b>Backend Development</b>
              </Text>

              <div>
                I build structured and scalable backend systems using modern technologies and frameworks including <br />
                <code style={languageHighlightStyles}>Javascript</code>,<code style={languageHighlightStyles}>PHP</code>,
                <code style={languageHighlightStyles}>MySQL</code>,<code style={languageHighlightStyles}>NoSQL</code>, <br />
                <code style={languageHighlightStyles}>ExpressJS</code>,<code style={languageHighlightStyles}>Laravel</code>,
                <code style={languageHighlightStyles}>MongoDB </code>,<code style={languageHighlightStyles}>MySQL</code>,
                <code style={languageHighlightStyles}>GrahQL/REST</code>
                <br />
              </div>
            </Box>
          </motion.div>
        </Flex>
      </Box>

      <Box display={'block'}>
        <Box mb="10" fontSize={'25px'}>
          <motion.div variants={sentence} initial="hidden" animate="visible">
            <Text fontSize={{ base: 'xl', md: '3xl' }} pl="12" mb="10" style={headerStyles}>
              About Me
            </Text>
            {aboutMe.map((line, index) => {
              return (
                <div key={index}>
                  {line.split('').map((char, index) => {
                    return (
                      <motion.span key={char + '-' + index} variants={letter}>
                        {char}
                      </motion.span>
                    );
                  })}
                  <br />
                  <br />
                </div>
              );
            })}
          </motion.div>
        </Box>
      </Box>

      <Box display={'block'} id="projects">
        <Box mb="10">
          <Text fontSize={{ base: 'xl', md: '3xl' }} pl="12" mb="10" style={headerStyles}>
            Projects
          </Text>

          <Flex wrap="wrap" gap={8} justifyContent="center">
            {myProjects.map((project, index) => (
              <Box fontSize="lg" key={index} maxWidth={'450px'} style={{ cursor: 'pointer' }}>
                <a></a>
                {/* <GatsbyImage
                  style={{ borderRadius: '10px', height: 250, width: 450 }}
                  image={project.gatsbyImage.node.gatsbyImageData}
                  alt={project.description}
                /> */}
                <Box mt={4}>
                  <Text>
                    <b>{project.title}</b>
                  </Text>
                  <Text>{project.description}</Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      <Box display={'block'} textAlign={'center'} mb={10} fontSize="xl" id="contact-me">
        <Text fontSize={'3xl'}>Get in Touch!</Text>
        <Text>
          Write me an{' '}
          <Link to={`mailto:${process.env.EMAIL_ADDRESS}`} style={{ textDecoration: 'underline' }}>
            email
          </Link>
        </Text>
        <Text>
          Call me on my{' '}
          <Link to={`tel:${process.env.PHONE_NUMBER}`} style={{ textDecoration: 'underline' }}>
            phone
          </Link>
        </Text>
        <p>
          Find me on&nbsp;
          <Link target="_blank" to={`/${process.env.TWITTER_URL}`} style={{ textDecoration: 'underline' }}>
            twitter
          </Link>{' '}
          or&nbsp;
          <Link target="_blank" rel="noreferrer" to={`/${process.env.LINKEDIN_URL}`} style={{ textDecoration: 'underline' }}>
            LinkedIn
          </Link>
        </p>
        <Button mt={2}>Book a Meeting</Button>
      </Box>
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query ImagesQuery {
//     allImageSharp {
//       edges {
//         node {
//           gatsbyImageData(width: 1080, placeholder: BLURRED, quality: 100)
//           original {
//             src
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage;
