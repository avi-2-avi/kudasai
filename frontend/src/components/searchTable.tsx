import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import type { ReactElement } from "react";

export interface searchDataProps {
  id: number;
  title: string;
  accuracy: number;
  bookmarked?: boolean;
  author: string;
  year: number;
}

function SearchTable({ searchData }: { searchData: searchDataProps[] }): ReactElement {
  return (
    <Box overflowX="auto" marginX="2rem" borderRadius="5" background="white" color="gray.600">
      <Table variant="striped">
        <Thead color="gray.900">
          <Tr>
            <Th>Title</Th>
            <Th>Accuracy</Th>
            <Th>Author</Th>
            <Th>Year</Th>
          </Tr>
        </Thead>
        <Tbody>
          {searchData.map((data) => (
            <Tr key={data.id}>
              <Td>{data.title}</Td>
              <Td>{data.accuracy}</Td>
              <Td>{data.author}</Td>
              <Td>{data.year}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default SearchTable;
