import Head from 'next/head';
import { Button, Code, Text, Icon, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';


const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Icon color="black" name="logo" size="64px" />
      {auth.user ? (
        <EmptyState />
      ) : (
        // <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
