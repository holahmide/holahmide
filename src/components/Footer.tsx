import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box>
      <hr />
      <Box
        display="flex"
        justifyContent={'space-between'}
        style={{ justifyContent: 'space-between', color: '#999999' }}
        pt={3}
        pb={3}
      >
        <Text>&copy; Copyright {'2022'}</Text>
        <Text>Adeniyi Olamide</Text>
      </Box>
    </Box>
  );
};

export default Footer;
