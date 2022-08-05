import React, { FC } from 'react'
import { Box, Button, chakra, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { Link } from 'gatsby'
import MobileDrawer from './Drawer'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'

const NavBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <chakra.header id="header">
        <Flex
            w="100%"
            h='20vh'
            minHeight='70px'
            maxHeight='80px'
            py="5"
            align="center"
            justify="space-between"
            border='1px'
            borderColor='blue'
        >
            {/* Logo */}
            <Text fontSize='2xl' casing={'uppercase'}><b>ola.dev</b></Text>
            {/* <Image src={Logo.src} h="50px" /> */}

            {/* Nav Items */}
            <HStack as="nav" spacing="5" display={{ base: 'none', md: 'inline' }}>
                {/* {data.map((item, i) => ( */}
                    {/* <Link key={i}> */}
                    <Link to="/">
                        <Button variant="nav"> Home </Button>
                    </Link>
                    <Link to ="/">
                        <Button variant="nav"> Projects </Button>
                    </Link>
                    <Link to ="/">
                        <Button variant="nav"> Resume </Button>
                    </Link>
                {/* ))} */}
            </HStack>
            {/* Call to action items */}
            <HStack spacing="3">
                <Box onClick={() => toggleColorMode()}>
                    {colorMode === 'light'
                      ? <IoMdMoon cursor="pointer" size="26px" />
                      : <IoMdSunny cursor="pointer" size="26px" />}
                </Box>
                <Button aria-label="Contact Me">
                    Contact Me
                </Button>
                <MobileDrawer />
            </HStack>
        </Flex>
    </chakra.header>
  )
}

export default NavBar
