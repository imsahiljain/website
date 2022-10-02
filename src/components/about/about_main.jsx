import React from "react";

import {
  Container,
  Heading,
  Stack,
  Text,
  Link,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const MainAbout = () => {
  return (
    <>
      <Container as="section" maxW="6xl" pt={[4, 8]} mt="6">
        <Grid templateColumns="repeat(9, 1fr)" gap={6}>
          <GridItem w="100%" colSpan={6} h="10">
            <Stack spacing={[4, 8]}>
              <Heading
                fontFamily="Circular-BB"
                fontSize="6xl"
                letterSpacing="-3.5px"
              >
                About me
              </Heading>
              <Text fontFamily="Circular-S" fontSize="2xl">
                Loving the process and eventually the results too. Hello there!
                I'm Sahil Jain, a 15-year-old Delhi high school junior. At my
                high school, I'm currently studying PCM and Computer Science.
                I'm enthusiastic about Web development and Programming, and I'm
                intrigued by ML/AI & Astrophysics. I'm a frontend web developer
                who is presently learning React and Typescript, with the goal of
                learning backend coding in the coming months. I often attend
                hackathons, cryptic hunts, and tech symposiums, and have won 10+
                events, including first place at the IIT Bombay 2021 Techfest.
                I've always loved sports, and the one that drew me in the most
                was Basketball. I've been playing since fourth grade and have
                won numerous competitions ranging from Interschool to Zonals to
                winning Interzonals, the most notable of which was winning the
                Delhi State Basketball Championship as captain and leading the
                Delhi state team to Sub-Junior Basketball Nationals in Odisha.
                Apart from all of this, I've been interested in fine arts, and I
                still am now, and I also hold a 5-year diploma in fine arts.
                Have won numerous painting contests, including one organized by
                the All India Association of Montfort Schools at the national
                level. Want to collaborate on projects and connect with me?
              </Text>
              {/* <Link fontSize="xl" pl="1" color="#dedede">
            Know more &rarr;
          </Link> */}
            </Stack>
          </GridItem>
          <GridItem w="100%" colSpan={3} h="10" bg="blue.500">
            <Image
              boxSize="200px"
              borderRadius="lg"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w="full"
              h="40vh"
            />
          </GridItem>
          {/* <GridItem w="100%" h="10" bg="blue.500" /> */}
        </Grid>
      </Container>
    </>
  );
};

export default MainAbout;
