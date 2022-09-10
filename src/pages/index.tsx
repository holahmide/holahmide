import React from 'react';
import { Box, Center, Text, Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
// import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { Link, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import Projects from '../components/Projects';
import ButtonComponent from '../components/UI/Button';
import SEO from '../components/SEO';
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

// markup
const IndexPage = ({ data }: { data: any }) => {
  return (
    <Layout>
      <motion.div initial={{ y: '100%' }} animate={{ y: -20 }} transition={{ duration: 1 }}>
        <Center h="90vh" mb="12">
          <Box>
            <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 30 }} justifyContent={{ base: 'center' }}>
              <Box
                width={{ base: '300px', sm: '200px', md: '500px', lg: '300px' }}
                height={{ base: '350px', sm: '200px', md: '500px', lg: '350px' }}
                mb={10}
              >
                <StaticImage
                  quality={100}
                  style={{ borderRadius: '20px', width: '100%', height: '100%' }}
                  src="../images/portrait.jpg"
                  alt="My Picture"
                  placeholder="blurred"
                />
                <Flex marginTop="20px" justifyContent={'center'} gap="5">
                  <a href={process.env.GATSBY_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <BsInstagram fontSize={socialsIconSize} />
                  </a>
                  <a href={process.env.GATSBY_GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    <BsGithub fontSize={socialsIconSize} />
                  </a>
                  <a href={process.env.GATSBY_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    <BsLinkedin fontSize={socialsIconSize} />
                  </a>
                  <a href={process.env.GATSBY_TWITTER_URL} target="_blank" rel="noopener noreferrer">
                    <BsTwitter fontSize={socialsIconSize} />
                  </a>
                </Flex>
              </Box>
              <Box maxWidth={'600px'}>
                <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left" color="grey.300">
                  <Text
                    display={{ base: 'none', sm: 'inline' }}
                    fontSize={{ base: '2xl', md: '4xl' }}
                    textAlign={{ base: 'center', md: 'left' }}
                    mb="20px"
                  >
                    Hi 👋
                    <br />
                  </Text>
                  <Text my={{ base: '0', lg: '20px' }}>
                    I am <b>Adeniyi Olamide</b>, best called <b>ola</b>! I build great stuffs for the web 🚀.
                    <br />
                  </Text>
                  <Text mb="20px">
                    I really love <b>programming</b> especially <b>web development</b>, I build, design & scale full-stack web
                    applications.
                    <br />
                  </Text>
                  <Text my="20px" display={{ base: 'none', sm: 'inline' }}>
                    I love my work, it has allowed me to understand development of digital products and how it affects our users.
                    <br />
                  </Text>
                  <Text my={{ base: '0', lg: '20px' }}>Scroll down to know more about me!</Text>
                </Text>
              </Box>
            </Box>
          </Box>
        </Center>
      </motion.div>

      <Box mb={10} display="block">
        <Box mb={10} display="block">
          <Text fontSize={{ base: '2xl', md: '3xl' }} style={headerStyles}>
            <b>Skills & Technologies</b>
          </Text>
        </Box>
        <Flex justifyContent="center" alignContent={'center'} gap={5} wrap={'wrap'}>
          <motion.div
            viewport={{ once: true }}
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box boxShadow="2xl" p={5} fontSize="lg" maxWidth={'420px'}>
              <Text textAlign="center" fontSize="6xl">
                👨‍💻
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
                React/NextJS frontend pages.
              </div>
            </Box>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box boxShadow="2xl" p="5" fontSize="lg" maxWidth={'420px'}>
              <Text textAlign="center" fontSize="6xl">
                🛠️
              </Text>
              <Text textAlign="center" fontSize="xl">
                <b>Backend Development</b>
              </Text>

              <div>
                I build structured and scalable backend systems using modern technologies and frameworks including <br />
                <code style={languageHighlightStyles}>Javascript</code>,<code style={languageHighlightStyles}>PHP</code>,
                <code style={languageHighlightStyles}>MySQL</code>,<code style={languageHighlightStyles}>NoSQL</code>, <br />
                <code style={languageHighlightStyles}>ExpressJS</code>,<code style={languageHighlightStyles}>Laravel</code>,
                <code style={languageHighlightStyles}>MongoDB </code>
                <code style={languageHighlightStyles}>MySQL</code>,<code style={languageHighlightStyles}>GrahQL/REST</code>
                <br />
              </div>
            </Box>
          </motion.div>
        </Flex>
      </Box>

      {/* <Box display={'block'}>
        <Box mb='10' fontSize={'25px'}>
          <motion.div variants={sentence} initial="hidden" animate="visible">
            <Text fontSize={{ base: 'xl', md: '3xl' }} pl="12" mb="10" style={headerStyles}><b>About Me</b></Text>
            {aboutMe.map((line, index) => {
              return (
                <div key={index}>
                  {line.split('').map((char, index) => {
                    return (
                      <motion.span key={char + '-' + index} variants={letter}>{char}</motion.span>
                    )
                  })}<br /><br />
                </div>
              )
            })}
          </motion.div>
        </Box>
      </Box> */}

      <Box display={'block'}>
        <Box mb="10" fontSize={'25px'}>
          <motion.div
            viewport={{ once: true }}
            initial={{ y: -100, opacity: 0.4 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Text fontSize={{ base: '2xl', md: '3xl' }} mb="10" style={headerStyles}>
              <b>About Me</b>
            </Text>
            {/* {aboutMe.map((line, index) => {
              return (
                <div key={index}>
                  {line.split('').map((char, index) => {
                    return (
                      <motion.span key={char + '-' + index}>{char}</motion.span>
                    )
                  })}<br /><br />
                </div>
              )
            })} */}
            <Box>
              <Text>
                Hello, i am <b>Olamide Oluwaseyi ADENIYI</b>. A full stack developer💻 that loves programming and its concepts and
                also a <b>software engineer👨‍🔧.</b>
              </Text>
              <br />
              <Text>
                I got inspired to start programming after i met one of my cousins <b>Praise</b>🙌, who showed me some applications
                he built using javascript.
              </Text>
              <br />
              <Text>
                Since then i have always wanted to build great stuffs for the web and to assist companies in managing logistics,
                school operations, interaction with customers/consumers and other technology driven operations using modern
                technologies and patterns for easy collaboration.
              </Text>
              <br />
              <Text>
                Today i have built some of these applications and i am still building more of them🤞, and i cant wait to be part
                of building for the future.
              </Text>
              <br />
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Box display={'block'} id="projects">
        <Box mb="10">
          <Text fontSize={{ base: '2xl', md: '3xl' }} pl="12" mb="10" style={headerStyles}>
            <b>Projects</b>
          </Text>

          <Projects data={data} />
        </Box>
      </Box>

      <Box display={'block'} textAlign={'center'} mb={10} fontSize="xl" id="contact-me">
        <Text fontSize={'3xl'}>
          <b>Get in Touch!</b>
        </Text>
        <Text>
          Write me an{' '}
          <Link to={`mailto:${process.env.GATSBY_EMAIL_ADDRESS}`} style={{ textDecoration: 'underline' }}>
            email
          </Link>
        </Text>
        <Text>
          Call me on my{' '}
          <Link to={`tel:${process.env.GATSBY_PHONE_NUMBER}`} style={{ textDecoration: 'underline' }}>
            phone
          </Link>
        </Text>
        <p>
          Find me on&nbsp;
          <Link target="_blank" to={`${process.env.GATSBY_TWITTER_URL}`} style={{ textDecoration: 'underline' }}>
            twitter
          </Link>{' '}
          or&nbsp;
          <Link
            target="_blank"
            rel="noreferrer"
            to={`${process.env.GATSBY_LINKEDIN_URL}`}
            style={{ textDecoration: 'underline' }}
          >
            LinkedIn
          </Link>
        </p>
        {/* <ButtonComponent text="Book a meeting"></ButtonComponent> */}
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ImagesQuery {
    allImageSharp {
      edges {
        node {
          gatsbyImageData(width: 1080, placeholder: BLURRED, quality: 100)
          original {
            src
          }
        }
      }
    }
  }
`;

export default IndexPage;

// @ts-ignore
export const Head = () => <SEO />;
