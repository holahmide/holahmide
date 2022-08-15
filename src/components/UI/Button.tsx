import React from 'react';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const buttonVariant = {
  tap: { scale: 0.9 },
  hover: { scale: 1.1 }
};

const ButtonComponent = ({ text }: { text: any }) => {
  return (
    <motion.button whileTap={buttonVariant.tap} whileHover={buttonVariant.hover}>
      <Button mt={2}>{text}</Button>
    </motion.button>
  );
};

export default ButtonComponent;
