import React from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";
// import Image from "next/image";
import { Footer } from "../footer/footer";

const MainArtwork = () => {
  return (
    <>
      <Container
        as="section"
        maxW="6xl"
        pt={[4, 8]}
        mt={{ base: 1, md: 4, lg: 4 }}
      >
        <Stack spacing={[4, 8]}>
          <Heading
            fontFamily="Circular-BB"
            fontSize="6xl"
            letterSpacing="-3.5px"
          >
            Artwork
          </Heading>
          <Text
            fontFamily="Circular-S"
            fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
          >
            I've painted ever since I was in elementary school, and I also have
            a <b>5-year diploma in Fine Arts</b>. I've also won numerous
            painting competitions. Here are a few of my works —
          </Text>
          <SimpleGrid
            mt="4"
            columns={{ base: 1, md: 2, lg: 2 }}
            spacingX="40px"
            spacingY="20px"
          >
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/eagle.jpeg"
                width="100%"
                height="100%"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/sher.jpeg"
                width="100%"
                height="100%"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/hampi.jpeg"
                width="100%"
                height="100%"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/still-life.jpeg"
                width="100%"
                height="100%"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/real.jpeg"
                width="100%"
                height="100%"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/sculpture.jpeg"
                width="100%"
                height="100%"
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/thor.jpeg"
                width="100%"
                height="100%"
              />
            </Box>
            <Box>
              <Image
                borderRadius="20px"
                src="/paintings/canvas.jpeg"
                width="100%"
                height="100%"
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
