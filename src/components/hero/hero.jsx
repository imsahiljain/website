import React from "react";

import { Container, Heading, Stack, Text, Link } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Container as="section" maxW="6xl" pt={[4, 8]} mt="6">
        <Stack spacing={[4, 8]}>
          <Heading
            fontFamily="Circular-BB"
            fontSize="6xl"
            letterSpacing="-3.5px"
          >
            Hello there, I&apos;m{" "}
            <Link style={{ color: "#e67cf2", fontWeight: "bold" }}>Sahil,</Link>
          </Heading>
          <Text fontFamily="Circular-S" fontSize="3xl">
            a 16 y/o Delhi 12th grade student at{" "}
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
              Montfort School
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
          <Text fontFamily="Circular-S" fontSize="3xl">
            <b>Want to connect?</b> Drop a mail @{" "}
            <Link
              // fontSize='2X\'
              href="mailto:sahil2006sheenu@gmail.com"
              style={{
                color: "#05d7a0",
                fontWeight: "bold",
                textDecoration: "none",
                borderBottom: "2px dashed #05d7a0",
                paddingBottom: "1px",
              }}
            >
              sahil2006sheenu@gmail.com
            </Link>
          </Text>
          {/* <Link fontSize="xl" pl="1" color="#dedede">
            Know more &rarr;
          </Link> */}
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
