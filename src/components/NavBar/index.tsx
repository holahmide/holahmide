/* eslint-disable react/jsx-key */
import React, { FC } from 'react';
import { Box, chakra, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import { Link } from 'gatsby';
import MobileDrawer from './Drawer';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { motion } from 'framer-motion';
import ButtonComponent from '../Button';
import Links from './links.json';
import LinkComponent from '../Link';

const NavBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <chakra.header id="header">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
        <Flex w="100%" h="20vh" minHeight="70px" maxHeight="80px" py="5" align="center" justify="space-between">
          {/* Logo */}
          <Text fontSize="2xl" casing={'uppercase'}>
            <b>ola.dev</b>
          </Text>
          {/* <Image src={Logo.src} h="50px" /> */}

          {/* Nav Items */}
          <HStack as="nav" spacing="5" display={{ base: 'none', md: 'inline' }}>
            {Links.map((link, index) => (
              <LinkComponent key={index} url={link.url} name={link.name} />
            ))}
          </HStack>
          {/* Call to action items */}
          <HStack spacing="3">
            <Box onClick={() => toggleColorMode()}>
              {colorMode === 'light' ? <IoMdMoon cursor="pointer" size="26px" /> : <IoMdSunny cursor="pointer" size="26px" />}
            </Box>
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
