import type { ReactElement } from "react";
import { Box, FormControl, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import BookmarksTable from "@/components/bookmarksTable";
import { bookmarksDataProps } from "@/components/bookmarksTable";
import LoginLayout from "@/layouts/login";

function Bookmarks(props: bookmarksDataProps): ReactElement {
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  const bookmarksData: bookmarksDataProps[] = [
    {
      id: 1,
      title: "The Lord of the Rings",
      accuracy: 0.9,
      date: new Date(),
      year: 1954,
    },
    {
      id: 2,
      title: "The Hobbit",
      accuracy: 0.8,
      date: new Date(),
      year: 1937,
    },
    {
      id: 3,
      title: "The Silmarillion",
      accuracy: 0.7,
      date: new Date(),
      year: 1977,
    },
  ];

  return (
    <LoginLayout>
      <Box>
        <Text as="h1" fontSize="4xl" fontWeight="semibold" textAlign="left">
          Marcadores
        </Text>
        <FormControl id="searchInput" marginY="2rem">
          <InputGroup alignItems="center" alignContent="center" color="gray.800">
            <InputLeftElement pointerEvents="none">
              <SearchIcon />
            </InputLeftElement>
            <Input
              variant="filled"
              type="search"
              placeholder="Buscar en marcadores"
              onChange={(event) => handleInputChange(event)}
              bg="white"
              _focus={{ bg: "white" }}
            />
          </InputGroup>
        </FormControl>
        <BookmarksTable bookmarksData={bookmarksData} />
      </Box>
    </LoginLayout>
  );
}

export default Bookmarks;
