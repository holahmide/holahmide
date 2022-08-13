import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, useDisclosure, VStack } from '@chakra-ui/react';
import { IoMdMenu } from 'react-icons/io';
import React, { FC } from 'react';
import { Link } from 'gatsby';
import Links from './links.json';
import LinkComponent from '../Link';

const MobileDrawer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef<HTMLButtonElement | null>(null)
  // const btnRef = React.useRef()

  return (
    <Flex display={{ md: 'none' }}>
      {/* Menu Button */}
      <Button onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>

      {/* Drawer Component */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <DrawerBody>
            <VStack alignItems="left">
              {/* {data.map((item, i) => ( */}
              {Links.map((link, index) => (
                <LinkComponent key={index} url={link.url} name={link.name} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MobileDrawer;
