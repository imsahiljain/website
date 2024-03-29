import React from "react";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Hero = () => {
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
            Hi, I&apos;m{" "}
            <Link
              href="https://www.google.com"
              style={{
                color: "#e67cf2",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Sahil.
            </Link>
            <Text
              fontSize="xl"
              letterSpacing="-0.1px"
              fontFamily="Circular-S"
              fontWeight="500"
              color="#d6d6d6"
            >
              developer · athlete · artist
            </Text>
          </Heading>

          <Text
            // fontFamily="Circular-S"
            fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
            letterSpacing="-0.2px"
          >
            a 17 y/o high school senior at{" "}
            <Link
              href="https://www.montfortschooldelhi.in/"
              style={{
                color: "#f36464",
                textDecoration: "none",
                fontWeight: "bold",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(243, 100, 100, 0.25) 40%)",

                paddingBottom: "1px",
              }}
            >
              Montfort School, Delhi
            </Link>
            . I&apos;m passionate about web dev, programming, hackathons,
            startups, space, sports, and, surprisingly, chemistry. I enjoy
            competing; I&apos;m a{" "}
            <Link
              href="/"
              style={{
                color: "#ecc94b",
                textDecoration: "none",
                fontWeight: "bold",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(236, 201, 75, 0.25) 40%)",
                paddingBottom: "1px",
              }}
            >
              national basketball player
            </Link>
            , an{" "}
            <Link
              href="/artwork"
              style={{
                color: "#ed8936",
                textDecoration: "none",
                fontWeight: "bold",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(237, 137, 54, 0.25) 40%)",
                paddingBottom: "1px",
              }}
            >
              artist
            </Link>
            , a frontend web developer learning backend. Currently, I&apos;m
            reading{" "}
            <Link
              href="/"
              style={{
                color: "#4299e1",
                textDecoration: "none",
                fontWeight: "bold",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(66, 153, 225, 0.25) 40%)",
                paddingBottom: "1px",
              }}
            >
              Zero to One by Peter Thiel.
            </Link>{" "}
          </Text>
          <Text
            // fontFamily="Circular-S"
            fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
            letterSpacing="-0.2px"
          >
            Feel free to reach out via email at{" "}
            <Link
              href="mailto:emailofsahiljain@gmail.com"
              style={{
                color: "#05d7a0",
                fontWeight: "bold",
                textDecoration: "none",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(5, 214, 158, 0.25) 40%)",
                paddingBottom: "1px",
              }}
            >
              emailofsahiljain@gmail.com
            </Link>{" "}
            or through any of my socials! Check out my resume{" "}
            <Link
              href="/resume.pdf"
              target="_blank"
              style={{
                color: "#bdbdbd",
                textDecoration: "none",
                fontWeight: "bold",
                paddingBottom: "1px",
              }}
            >
              here
            </Link>
            .
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
