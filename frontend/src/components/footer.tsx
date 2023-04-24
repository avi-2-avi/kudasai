import { Text } from "@chakra-ui/react";

export function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <Text className="dark-bg" textAlign="center" p={4} fontSize="xs">
        © {currentYear} Sigma. All Rights Reserved.
      </Text>
    </>
  );
}
