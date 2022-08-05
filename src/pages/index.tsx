import * as React from 'react'
import { Box, Center, Text, Flex } from '@chakra-ui/react'
import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout>
        <Center h='80vh' color='black'>
          <Box>
            <Text fontSize='2xl'>
              Hi! 👋, Im
              Adeniyi Olamide.
              A fullstack developer with 4yrs+ experience, I love to solve technical problems and provide sustainable solutions to such problems.
            </Text>
          </Box>
          <Flex w={'100'} justifyContent={'space-between'} position={'absolute'} bottom={0}>
              <Text>Scroll down for more</Text>
          </Flex>
          {/* <div class="absolute bottom-0 flex justify-between w-full my-5 py-2">
          <div class="flex items-center">
            <div class="ml-2 mt-1" id="scroll-indicator" style="opacity:0;">
              Scroll down for more
            </div>
          </div> */}
        </Center>
    </Layout>
  )
}

export default IndexPage
