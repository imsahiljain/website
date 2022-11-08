import React from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { Footer } from "../footer/footer";

const MainArtwork = () => {
  return (
    <>
      <Container as="section" maxW="6xl" pt={[4, 8]} mt="6">
        <Stack spacing={[4, 8]}>
          <Heading
            fontFamily="Circular-BB"
            fontSize="6xl"
            letterSpacing="-3.5px"
          >
            Artwork
          </Heading>
          <Text fontFamily="Circular-S" fontSize="2xl">
            I've painted ever since I was in elementary school, and I also have
            a <b>5-year diploma in Fine Arts</b>. I've also won numerous
            painting competitions. Here are a few of my works —
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            spacingX="40px"
            spacingY="20px"
          >
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/eagle.jpeg"
                w="full"
                h="full"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/sher.jpeg"
                w="full"
                h="full"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/hampi.jpeg"
                w="full"
                h="full"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/still-life.jpeg"
                w="full"
                h="full"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/real.jpeg"
                w="full"
                h="full"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/sculpture.jpeg"
                w="full"
                h="full"
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/thor.jpeg"
                w="full"
                h="full"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/canvas.jpeg"
                w="full"
                h="full"
              />
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default MainArtwork;
