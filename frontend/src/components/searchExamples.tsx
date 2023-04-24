import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { MdOutlineWbIncandescent } from "react-icons/md";

export function SearchExamples() {
  return (
    <>
      <Box maxW="xl" marginX="auto" textAlign="center">
        <Box maxW="xl" mx="auto" textAlign="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <MdOutlineWbIncandescent size={64} />
            <Text fontSize="2rem" mt={4}>
              Ejemplos de búsqueda
            </Text>
          </Box>
        </Box>
        <Grid templateColumns="repeat(2, 2fr)" gap={6} mt={4} alignSelf="center">
          <GridItem colSpan={1}>
            <a href="#">
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                background="whitesmoke"
                color="gray.600"
                minH={130}
              >
                <Text fontWeight="bold" mb={2}>
                  Vida extraterrestre
                </Text>
                <Text fontSize="sm" color="gray.500">
                  ¿Existe vida inteligente en el universo aparte de la nuestra?
                </Text>
              </Box>
            </a>
          </GridItem>
          <GridItem colSpan={1}>
            <a href="#">
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                background="whitesmoke"
                color="gray.600"
                minH={130}
              >
                <Text fontWeight="bold" mb={2}>
                  Gusto por el queso en animales
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Necesito una lista de los animales que tienen gusto por el queso
                </Text>
              </Box>
            </a>
          </GridItem>
          <GridItem colSpan={1}>
            <a href="#">
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                background="whitesmoke"
                color="gray.600"
                minH={130}
              >
                <Text fontWeight="bold" mb={2}>
                  Adicción a la cafeína
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Efectos de la cafeina en jovenes estudiantes universitarios entre 18 y 23 años en
                  latinoamerica
                </Text>
              </Box>
            </a>
          </GridItem>
          <GridItem colSpan={1}>
            <a href="#">
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                background="whitesmoke"
                color="gray.600"
                minH={130}
              >
                <Text fontWeight="bold" mb={2}>
                  Viajes en el tiempo
                </Text>
                <Text fontSize="sm" color="gray.500">
                  ¿Es posible viajar en el tiempo y volver al pasado?
                </Text>
              </Box>
            </a>
          </GridItem>
        </Grid>
      </Box>{" "}
    </>
  );
}
