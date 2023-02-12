import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  rest?: any;
}

const buttonVariant = {
  tap: { scale: 0.9 },
  hover: { scale: 1.1 }
};

const ButtonComponent: FC<Props> = ({ text, rest }) => {
  return (
    <motion.button whileTap={buttonVariant.tap} whileHover={buttonVariant.hover} {...rest}>
      <Button bg="gray.700" color="#FF6B46" mt={2}>
        {text}
      </Button>
    </motion.button>
  );
};

export default ButtonComponent;
