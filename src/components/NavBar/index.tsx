import React, { FC } from 'react';
import { Box, Button, chakra, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import { Link } from 'gatsby';
import MobileDrawer from './Drawer';
// import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { motion } from 'framer-motion';
import ButtonComponent from '../UI/Button';
import Links from './links.json';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useLocation } from '@reach/router';
import './index.css';

// const colorModeSwitcher = () => {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Box onClick={() => toggleColorMode()}>
//       {colorMode === 'light' ? <IoMdMoon cursor="pointer" size="26px" /> : <IoMdSunny cursor="pointer" size="26px" />}
//     </Box>
//   );
// };

const NavBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode == 'light') toggleColorMode();

  const { pathname, href } = useLocation();

  return (
    <chakra.header id="header">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
        <Flex w="100%" h="10vh" minHeight="70px" maxHeight="80px" py="5" align="center" justify="space-between" mb={10}>
          {/* Logo */}
          <Text fontSize="2xl" casing={'uppercase'}>
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
                    whileHover={{ borderBottom: '2px solid blue' }}
                  >
                    {link.url.includes('.pdf') ? (
                      <a href={link.url} target={'_blank'}>
                        <Button variant="nav">{link.name}</Button>
                      </a>
                    ) : (
                      <AnchorLink to={link.url} title={link.title} className="stripped" stripHash>
                        <Button variant="nav">{link.name}</Button>
                      </AnchorLink>
                    )}
                  </motion.div>
                )
            )}
          </HStack>

          {/* Call to action items */}
          <HStack spacing="3">
            {/* <colorModeSwitcher /> */}
            <Box display={{ base: 'none', md: 'inline' }}>
              <Link to="#contact-me">
                <ButtonComponent text="Contact Me"></ButtonComponent>
              </Link>
            </Box>
            <MobileDrawer />
          </HStack>
        </Flex>
      </motion.div>
    </chakra.header>
  );
};

export default NavBar;
