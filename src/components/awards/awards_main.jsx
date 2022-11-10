import React from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Footer } from "../footer/footer";
import ta from "../../data/tech.js";
import bb from "../../data/bb.js";

const MainAwards = () => {
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
            Awards
          </Heading>
          <Text
            fontFamily="Circular-S"
            fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
          >
            I've been involved in a variety of extracurricular activities and
            competitions at my school over the years. Here are some of my awards
            —
          </Text>
          <Heading
            fontFamily="Circular-B"
            fontSize="4xl"
            letterSpacing="-1.5px"
          >
            Tech
          </Heading>
          <Text
            fontFamily="Circular-S"
            fontSize={{ base: "lg", md: "xl", lg: "xl" }}
            color="#d6d6d6"
          >
            <UnorderedList>
              {ta.map((award) => {
                return (
                  <ListItem color={award.color}>
                    {award.comp} — <b>{award.position}</b>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Text>

          <Heading
            fontFamily="Circular-B"
            fontSize="4xl"
            letterSpacing="-1.5px"
          >
            Basketball
          </Heading>
          <Text
            fontFamily="Circular-S"
            fontSize={{ base: "lg", md: "xl", lg: "xl" }}
            color="#d6d6d6"
          >
            <UnorderedList>
              {bb.map((award) => {
                return (
                  <ListItem color={award.color}>
                    {award.comp} — <b>{award.position}</b>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Text>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default MainAwards;
