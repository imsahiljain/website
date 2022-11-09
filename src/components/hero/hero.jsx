import React from "react";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Container as="section" maxW="6xl" pt={[4, 8]} mt="4">
        <Stack spacing={[4, 8]}>
          <Heading
            fontFamily="Circular-BB"
            fontSize="6xl"
            letterSpacing="-3.5px"
          >
            Hi, I&apos;m{" "}
            <Link
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
              developer · player · artist
            </Text>
          </Heading>

          <Text fontFamily="Circular-S" fontSize="3xl" letterSpacing="-0.2px">
            a 16 y/o high school senior at{" "}
            <Link
              href="https://www.google.com"
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
            . I&apos;m enthusiastic about Web development and Programming, and
            I&apos;m intrigued by ML/AI, Science and Sports. I&apos;m a{" "}
            <Link
              style={{
                color: "#ecc94b",
                textDecoration: "none",
                fontWeight: "bold",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(236, 201, 75, 0.25) 40%)",
                paddingBottom: "1px",
              }}
            >
              National level Basketball player
            </Link>
            , an{" "}
            <Link
              style={{
                color: "#ed8936",
                textDecoration: "none",
                fontWeight: "bold",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(237, 137, 54, 0.25) 40%)",
                paddingBottom: "1px",
              }}
              to="/artwork"
            >
              artist
            </Link>
            , a frontend web dev who is presently learning Next.js & Typescript,
            and have won 10+ tech events, including 1st place at the{" "}
            <Link
              style={{
                color: "#4299e1",
                textDecoration: "none",
                fontWeight: "bold",
                background:
                  "linear-gradient(180deg,rgba(255,255,255,0) 60%, rgba(66, 153, 225, 0.25) 40%)",
                paddingBottom: "1px",
              }}
            >
              IIT Bombay Techfest &apos;21
            </Link>
            .
          </Text>
          <Text fontFamily="Circular-S" fontSize="3xl" letterSpacing="-0.2px">
            Feel free to reach out via email at{" "}
            <Link
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
            or through any of my socials!
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
