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
  Link,
} from "@chakra-ui/react";
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
      <Text fontSize="xl" color="subtle" fontWeight="bold">
        made by{" "}
        <Link
          style={{
            textDecoration: "none",
            borderBottom: "1.5px dashed #fff",
            paddingBottom: "1px",
            fontWeight: "bold",
          }}
        >
          me
        </Link>{" "}
        . &copy; {new Date().getFullYear()}
      </Text>
      <Spacer />
      <Spacer />
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="GitHub"
          icon={<FaGithub fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Instagram"
          icon={<FaInstagram fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </HStack>
  </Container>
);
