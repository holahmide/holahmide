import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useMemo, useState } from 'react';
import projects from '../utils/projects.json';

const initialVisibleProjects = 4;

const Projects = ({ data }: { data: any }) => {
  const [projectCount, setProjectCount] = useState(initialVisibleProjects);

  const showAllProject = () => {
    // 0 equals to all
    setProjectCount(() => 0);
  };

  const showLessProject = () => {
    setProjectCount(() => initialVisibleProjects);
  };

  const myProjects = useMemo(
    () =>
      projects.map(project => ({
        ...project,
        gatsbyImage: data.allImageSharp.edges.find((image: any) => image.node.original.src.includes(project.image))
      })),
    [data]
  );

  return (
    <Box>
      <Flex wrap="wrap" gap={8} justifyContent="center">
        {myProjects.map(
          (project, index) =>
            (index < projectCount || projectCount === 0) && (
              <motion.div
                key={index}
                viewport={{ once: true }}
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Box fontSize="lg" key={index} maxWidth={'450px'} style={{ cursor: 'pointer' }}>
                  <Link to={project.url} target="_blank">
                    <GatsbyImage
                      style={{ borderRadius: '10px', maxWidth: 450 }}
                      image={project.gatsbyImage.node.gatsbyImageData}
                      alt={project.description}
                    />
                  </Link>
                  <Box mt={4}>
                    <Text>
                      <b>{project.title}</b>
                    </Text>
                    <Text>{project.description}</Text>
                  </Box>
                </Box>
              </motion.div>
            )
        )}
      </Flex>
      <Box display={'block'} textAlign={'center'} mt={10}>
        {projectCount <= initialVisibleProjects && projectCount !== 0 ? (
          <Button bg={'transparent'} border={'1px'} onClick={showAllProject}>
            Show More Projects
          </Button>
        ) : (
          <Button bg={'transparent'} border={'1px'} onClick={showLessProject}>
            Show Less Projects
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Projects;
