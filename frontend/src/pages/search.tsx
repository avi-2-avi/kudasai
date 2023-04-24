import { useState } from "react";
import { Box, FormControl, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchExamples } from "@/components/searchExamples";
import { searchDataProps } from "@/components/searchTable";
import SearchTable from "@/components/searchTable";
import LoginLayout from "@/layouts/login";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  const handleOnSubmit = (event: any) => {
    // Lanza el api
    // Espera a que el api responsa
    // Oka, entonces llena tabla
  };

  const wordCount = searchInput.split(" ").length - 1;

  const searchData: searchDataProps[] = [
    {
      id: 1,
      title: "The Great Gatsby",
      accuracy: 4.5,
      author: "F. Scott Fitzgerald",
      year: 1925,
      bookmarked: true,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      accuracy: 4.7,
      author: "Harper Lee",
      year: 1960,
    },
    {
      id: 3,
      title: "1984",
      accuracy: 4.4,
      author: "George Orwell",
      year: 1949,
      bookmarked: true,
    },
    {
      id: 4,
      title: "Animal Farm",
      accuracy: 4.3,
      author: "George Orwell",
      year: 1945,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      accuracy: 4.1,
      author: "J.D. Salinger",
      year: 1951,
    },
    {
      id: 6,
      title: "Brave New World",
      accuracy: 4.2,
      author: "Aldous Huxley",
      year: 1932,
      bookmarked: true,
    },
    {
      id: 7,
      title: "Lord of the Flies",
      accuracy: 4.0,
      author: "William Golding",
      year: 1954,
    },
    {
      id: 8,
      title: "Pride and Prejudice",
      accuracy: 4.6,
      author: "Jane Austen",
      year: 1813,
    },
    {
      id: 9,
      title: "The Picture of Dorian Gray",
      accuracy: 4.2,
      author: "Oscar Wilde",
      year: 1890,
    },
    {
      id: 10,
      title: "One Hundred Years of Solitude",
      accuracy: 4.4,
      author: "Gabriel García Márquez",
      year: 1967,
    },
  ];

  return (
    <LoginLayout>
      <Box>
        <Text as="h1" fontSize="4xl" fontWeight="semibold" textAlign="left">
          B&uacute;squeda
        </Text>
        <FormControl id="searchInput" marginY="2rem">
          <InputGroup color="gray.800">
            <Input
              variant="filled"
              type="search"
              placeholder="Introducir terminos de consulta de b&uacute;squeda"
              onChange={(event) => handleInputChange(event)}
              onSubmit={handleOnSubmit}
              bg="white"
              _focus={{ bg: "white" }}
            />

            <InputLeftElement pointerEvents="none">
              <SearchIcon />
            </InputLeftElement>
          </InputGroup>
        </FormControl>

        <Text marginTop="2" marginLeft="4" textAlign="left">
          {wordCount} / 20
        </Text>

        {/* <SearchTable searchData={searchData} /> */}

        {wordCount < 1 ? <SearchExamples /> : <div></div>}
      </Box>
    </LoginLayout>
  );
}

export default Search;
