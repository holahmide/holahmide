import React from 'react';
import { Box, Center, Text, Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import { m } from 'framer-motion';
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import Projects from '../components/Projects';
import SEO from '../components/SEO';

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
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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

                <Flex marginTop="20px" justifyContent="center" gap="5">
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
                    I'm <span style={{ color: '#FF6B46', fontWeight: 'bold' }}>Adeniyi Olamide</span>, best called <b>Ola</b>! I
                    build great stuff for the web 🚀.
                    <br />
                  </Text>
                  <Text mb="20px">
                    I really love <b>programming</b> especially{' '}
                    <span style={{ color: '#FF6B46', fontWeight: 'bold' }}>web development</span>, I build, design & scale
                    full-stack web applications.
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
      </m.div>

      <Box mb={10} display="block">
        <Box mb={10} display="block">
          <Text fontSize={{ base: '2xl', md: '3xl' }} color="#FF6B46" style={headerStyles}>
            <b>Skills & Technologies</b>
          </Text>
        </Box>
        <Flex justifyContent="center" alignContent="center" gap={5} wrap="wrap">
          <m.div viewport={{ once: true }} initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6 }}>
            <Box boxShadow="2xl" p={5} fontSize="lg" maxWidth="420px">
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
          </m.div>

          <m.div viewport={{ once: true }} initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6 }}>
            <Box boxShadow="2xl" p="5" fontSize="lg" maxWidth="420px">
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
          </m.div>
        </Flex>
      </Box>

      <Box display="block">
        <Box mb="10" fontSize="25px">
          <m.div
            viewport={{ once: true }}
            initial={{ y: -100, opacity: 0.4 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Text fontSize={{ base: '2xl', md: '3xl' }} color="#FF6B46" mb="10" style={headerStyles}>
              <b>About Me</b>
            </Text>
            <Box>
              <Text>
                Hello, I'm <span style={{ color: '#FF6B46', fontWeight: 'bold' }}>Olamide Oluwaseyi ADENIYI</span>. A full stack
                developer💻 that loves programming and its concepts👨‍🔧.
              </Text>
              <br />
              <Text>
                I got inspired to start programming after I met one of my cousins <b>Praise</b>🙌, who showed me some applications
                he built using javascript.
              </Text>
              <br />
              <Text>
                Since then I have always wanted to build great stuffs for the web and to assist companies in managing logistics,
                school operations, interaction with customers/consumers and other technology driven operations using modern
                technologies and patterns for easy collaboration.
              </Text>
              <br />
              <Text>
                Today I have built some of these applications currently building more of them🤞, and I can't wait to be part of
                the next generation of web development.
              </Text>
              <br />
            </Box>
          </m.div>
        </Box>
      </Box>

      <Box display="block" id="projects">
        <Box mb="10">
          <Text color="#FF6B46" fontSize={{ base: '2xl', md: '3xl' }} pl="12" mb="10" style={headerStyles}>
            <b>Projects</b>
          </Text>

          <Projects data={data} />
        </Box>
      </Box>

      <Box display="block" textAlign="center" mb={10} fontSize="xl" id="contact-me">
        <Text fontSize="3xl">
          <b>Get in Touch!</b>
        </Text>
        <Text>
          Write me an{' '}
          <Link style={{ textDecoration: 'underline', color: '#FF6B46' }} to={`mailto:${process.env.GATSBY_EMAIL_ADDRESS}`}>
            email
          </Link>
        </Text>
        <Text>
          Call me on my{' '}
          <Link style={{ textDecoration: 'underline', color: '#FF6B46' }} to={`tel:${process.env.GATSBY_PHONE_NUMBER}`}>
            phone
          </Link>
        </Text>
        <p>
          Find me on&nbsp;
          <Link
            style={{ textDecoration: 'underline', color: '#FF6B46' }}
            target="_blank"
            to={`${process.env.GATSBY_TWITTER_URL}`}
          >
            twitter
          </Link>{' '}
          or&nbsp;
          <Link
            rel="noreferrer"
            style={{ textDecoration: 'underline', color: '#FF6B46' }}
            target="_blank"
            to={`${process.env.GATSBY_LINKEDIN_URL}`}
          >
            linkedIn
          </Link>
        </p>
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
