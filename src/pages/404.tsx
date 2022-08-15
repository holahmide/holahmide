import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { Center } from '@chakra-ui/react';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <Center>
          Page Not Found!
          <Link to="/">Go home</Link>.
        </Center>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
