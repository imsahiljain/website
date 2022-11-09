import React from "react";
import {
  Button,
  Container,
  Divider,
  HStack,
  Spacer,
  Stack,
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
          {/* <Avatar
            name="Sahil Jain"
            size="lg"
            borderRadius="lg"
            src="/pfp2.jpeg"
          /> */}
          <Image
            boxSize="70px"
            objectFit="cover"
            borderRadius="lg"
            src="/pfp2.jpeg"
            alt="Sahil Jain's Photo"
          />
        </Link>
        <Spacer />
        <Spacer />
        <Link to="/">
          <Button as="a" variant="ghost" fontSize="lg">
            Home
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
