import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { IoMdMenu } from 'react-icons/io';
import React, { FC } from 'react';
import Links from './links.json';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { motion } from 'framer-motion';

const MobileDrawer: FC = () => {
  // Add Contact Button
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <Flex display={{ md: 'none' }}>
      {/* Menu Button */}
      <Button onClick={onOpen} color="#FF6B46">
        <IoMdMenu size="26px" />
      </Button>

      {/* Drawer Component */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody style={{ padding: 0, margin: 0 }} bgColor="gray.800">
            <Center style={{ width: '100%' }}>
              <VStack style={{ marginTop: '30vh', width: '100%', textAlign: 'center' }}>
                {Links.map((link, index) => (
                  <motion.div
                    key={index}
                    style={{
                      display: 'block',
                      paddingBottom: '10px',
                      width: '100%'
                    }}
                    whileHover={{ color: 'blue', scale: 1.1 }}
                    onClick={onToggle}
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
                ))}
              </VStack>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MobileDrawer;
