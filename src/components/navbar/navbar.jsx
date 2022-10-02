import React from "react";
import {
  Button,
  Container,
  Divider,
  HStack,
  Spacer,
  Stack,
  Text,
  Avatar,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Container
      as={Stack}
      d={{ base: "none", md: "flex" }}
      maxW="6xl"
      py={9}
      spacing={4}
    >
      <HStack>
        <Link to="/">
          <Avatar
            name="Dan Abrahmov"
            size="lg"
            borderRadius="lg"
            src="/pfp2.jpeg"
          />
        </Link>
        <Spacer />
        <Spacer />
        <Link to="/about">
          <Button as="a" variant="ghost" fontSize="lg">
            About
          </Button>
        </Link>
        <Link to="/projects">
          <Button as="a" variant="ghost" fontSize="lg">
            Projects
          </Button>
        </Link>
        <Link to="/awards">
          <Button as="a" variant="ghost" fontSize="lg">
            Awards
          </Button>
        </Link>
      </HStack>
      <Divider />
    </Container>
  );
};
