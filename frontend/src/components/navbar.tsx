import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export function Navbar() {
  return (
    <>
      <Flex maxW="4xl" fontSize="md" textDecoration="underline" justifyContent="end" marginTop={8}>
        <Link as={NextLink} marginEnd="10" href="/login">
          Login
        </Link>
        <Link as={NextLink} href="/signup">
          Sign up
        </Link>
      </Flex>
    </>
  );
}
