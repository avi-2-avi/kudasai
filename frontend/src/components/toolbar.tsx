import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import React from "react";

export function Toolbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box height="4rem" className="dark-bg">
        <Box display="flex" alignItems="center" justifyContent="flex-start" cursor="pointer">
          <Text fontSize="2rem" marginX="1rem" color="pink.100">
            <HamburgerIcon onClick={onOpen} />
          </Text>
        </Box>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bgColor="#D5B7C7" maxWidth="200px">
            <DrawerCloseButton />
            <DrawerBody paddingTop="10">
              <Text paddingTop="2">
                <Link onClick={onClose} as={NextLink} href="/search">
                  Búsqueda
                </Link>
              </Text>
              <Text paddingTop="2">
                <Link onClick={onClose} as={NextLink} href="/bookmarks">
                  Marcadores
                </Link>
              </Text>
              <Text paddingTop="2">
                <Link onClick={onClose} as={NextLink} href="/profile">
                  Mi Perfil
                </Link>
              </Text>
            </DrawerBody>

            <DrawerFooter alignSelf="start">
              <Text paddingTop="2">Log out</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
