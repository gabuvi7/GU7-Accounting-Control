import { Box, SimpleGrid } from "@chakra-ui/react";
import Card from "components/Card";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <SimpleGrid minChildWidth="405px" spacing="6" padding="10px">
    <Box justifySelf="center" alignSelf="center">
      <Card />
    </Box>
    <Box justifySelf="center" alignSelf="center">
      <Card />
    </Box>
  </SimpleGrid>
);

export default Home;
