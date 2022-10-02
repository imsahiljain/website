import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Spacer,
  Stack,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  //   <Container w="9xl" mt="200px">
  //     <Divider w="1000px" />
  //     <Stack
  //       // w='6xl'
  //       pt="8"
  //       pb="12"
  //       justify="space-between"
  //       //   direction={{ base: "column-reverse", md: "row" }}
  //       align="center"
  //     >
  //       <Text fontSize="sm" color="subtle">
  //         &copy; {new Date().getFullYear()} Made by me.
  //       </Text>
  //       <ButtonGroup variant="ghost">
  //         <IconButton
  //           as="a"
  //           href="#"
  //           aria-label="LinkedIn"
  //           icon={<FaLinkedin fontSize="1.25rem" />}
  //         />
  //         <IconButton
  //           as="a"
  //           href="#"
  //           aria-label="GitHub"
  //           icon={<FaGithub fontSize="1.25rem" />}
  //         />
  //         <IconButton
  //           as="a"
  //           href="#"
  //           aria-label="Twitter"
  //           icon={<FaTwitter fontSize="1.25rem" />}
  //         />
  //       </ButtonGroup>
  //     </Stack>
  //   </Container>
  <Container
    as={Stack}
    d={{ base: "none", md: "flex" }}
    maxW="6xl"
    py={9}
    spacing={4}
    mt="16vh"
  >
    <Divider />
    <HStack>
      <Text fontSize="xl" color="subtle" fontWeight="bold">
        made by{" "}
        <Link
          style={{
            // textDecoration: "underline wavy lightblue",
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
      </ButtonGroup>
      {/* <Link href="#">
        <Button as="a" variant="ghost" fontSize="lg">
          About
        </Button>
      </Link>
      <Link href="#">
        <Button as="a" variant="ghost" fontSize="lg">
          Projects
        </Button>
      </Link>
      <Link href="#">
        <Button as="a" variant="ghost" fontSize="lg">
          Awards
        </Button>
      </Link> */}
    </HStack>
  </Container>
);
