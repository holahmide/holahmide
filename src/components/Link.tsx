import { Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import { motion } from 'framer-motion';

const LinkComponent = ({ url, name }: { url: string; name: string }) => {
  return (
    <motion.div
      style={{ display: 'inline' }}
      whileHover={{ borderBottom: '1px solid blue' }}
    >
      <Link to={url} target={url.includes('.pdf') ? '_blank' : '_self'}>
        <Button variant="nav">{name}</Button>
      </Link>
    </motion.div>
  );
};

export default LinkComponent;
