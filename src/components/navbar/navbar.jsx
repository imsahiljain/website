import React from "react";
import {
  Button,
  Container,
  Divider,
  HStack,
  Spacer,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

export const Navbar = () => {
  const router = useRouter();
  return (
    <Container
      as={Stack}
      d={{ base: "none", md: "flex" }}
      maxW="6xl"
      py={9}
      spacing={4}
    >
      <HStack>
        <Link href="/">
          <Avatar
            name="Sahil Jain"
            size="lg"
            borderRadius="lg"
            src="/pfp2.jpeg"
            alt="Sahil Jain's Photo"
          />
        </Link>
        <Spacer />
        <Spacer />
        <Button
          onClick={() => router.push("/")}
          cursor="pointer"
          as="a"
          variant="ghost"
          fontSize="lg"
        >
          Home
        </Button>
        <Button
          onClick={() => router.push("/artwork")}
          cursor="pointer"
          as="a"
          variant="ghost"
          fontSize="lg"
        >
          Artwork
        </Button>
      </HStack>
      <Divider />
    </Container>
  );
};
