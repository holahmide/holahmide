import React, { FC } from 'react';
import { Box, Button, chakra, Flex, HStack, Text } from '@chakra-ui/react';
import MobileDrawer from './Drawer';
import { motion } from 'framer-motion';
import ButtonComponent from '../UI/Button';
import Links from './links.json';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useLocation } from '@reach/router';
import './index.module.css';

const NavBar: FC = () => {
  const { pathname, href } = useLocation();

  if (typeof window !== 'undefined') localStorage.setItem('chakra-ui-color-mode', 'dark');

  return (
    <chakra.header id="header">
      <div>
        <Flex w="100%" h="10vh" minHeight="70px" maxHeight="80px" py="5" align="center" justify="space-between" mb="5px">
          {/* Logo */}
          <Text fontSize="2xl" casing="uppercase" color="#FF6B46">
            <b>ola.dev</b>
          </Text>

          {/* Nav Items */}
          <HStack as="nav" spacing="5" display={{ base: 'none', md: 'inline' }}>
            {Links.map(
              (link, index) =>
                link.visible && (
                  <motion.div
                    key={index}
                    style={{ display: 'inline', paddingBottom: '10px' }}
                    whileHover={{ color: '#F06543' }}
                    transition={{ duration: '0.1' }}
                  >
                    {link.url.includes('.pdf') ? (
                      <a href={link.url} target={'_blank'}>
                        <Button variant="nav">{link.name}</Button>
                      </a>
                    ) : (
                      <span style={{ color: link.name.includes('Home') ? '#F06543' : '' }}>
                        <AnchorLink to={link.url} title={link.title} className="stripped" stripHash>
                          <Button variant="nav">{link.name}</Button>
                        </AnchorLink>
                      </span>
                    )}
                  </motion.div>
                )
            )}
          </HStack>

          <HStack spacing="3">
            {/* <colorModeSwitcher /> */}
            <Box display={{ base: 'none', md: 'inline' }}>
              <AnchorLink to="#contact-me" title="Contact Me" className="stripped" stripHash>
                <ButtonComponent text="Contact Me"></ButtonComponent>
              </AnchorLink>
            </Box>
            <MobileDrawer />
          </HStack>
        </Flex>
      </div>
    </chakra.header>
  );
};

export default NavBar;
