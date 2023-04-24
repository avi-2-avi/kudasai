import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import type { ReactElement } from "react";

export interface bookmarksDataProps {
  id: number;
  title: string;
  accuracy: number;
  date: Date;
  year: number;
}

function BookmarksTable({ bookmarksData }: { bookmarksData: bookmarksDataProps[] }): ReactElement {
  return (
    <Box overflowX="auto" marginX="2rem" borderRadius="15" background={"white"} color="gray.600">
      <Table variant="striped">
        <Thead color={"gray.900"}>
          <Tr>
            <Th>Titulo</Th>
            <Th>Consulta</Th>
            <Th>Presicion</Th>
            <Th>Año</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookmarksData.map((data) => (
            <Tr key={data.id}>
              <Td>{data.title}</Td>
              <Td>{data.date.getDate()}</Td>
              <Td>{data.accuracy}</Td>
              <Td>{data.year}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default BookmarksTable;
