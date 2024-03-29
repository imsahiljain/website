import * as React from "react";
import {
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Spacer,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => (
  <Container
    as={Stack}
    d={{ base: "none", md: "flex" }}
    maxW="6xl"
    py={9}
    spacing={4}
    mt="8vh"
  >
    <Divider />
    <HStack>
      <Text
        fontSize={{ base: "lg", md: "xl", lg: "xl" }}
        color="subtle"
        fontWeight="bold"
      >
        made by{" "}
        <Link
          href="https://github.com/imsahiljain"
          target="_blank"
          style={{
            textDecoration: "none",
            borderBottom: "1.5px dashed #fff",
            paddingBottom: "1px",
            fontWeight: "bold",
          }}
        >
          me
        </Link>{" "}
      </Text>
      <Spacer />
      <Spacer />
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/imsahiljain"
          target="_blank"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="https://github.com/imsahiljain"
          target="_blank"
          aria-label="GitHub"
          icon={<FaGithub fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="https://twitter.com/sahiljainx30"
          target="_blank"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="https://www.instagram.com/sahiljainx30"
          target="_blank"
          aria-label="Instagram"
          icon={<FaInstagram fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </HStack>
  </Container>
);
