import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Container, Image, Box, Text, Flex, Button, Grid, GridItem } from "@chakra-ui/react";
import router from "next/router";

export default function Home() {
  const onJoinNow = () => {
    router.push("/signup");
  };

  return (
    <main className="dark-bg">
      <Flex minHeight="100vh" direction="column" textColor="#FFFFF0">
        <Box
          backgroundImage="url('landing-bg.png')"
          backgroundSize="cover"
          backgroundPosition="center center"
          minHeight="100vh"
        >
          <Container maxW="5xl">
            <Navbar />
            <Text mt={20} mb={4} fontSize="5xl">
              Kudas<span style={{ color: "#D5B7C7" }}>AI</span>
            </Text>
            <Text fontWeight="light" fontSize="2xl">
              Abre tu mente a lo extraordinario:
            </Text>
            <Text fontWeight="light" fontSize="2xl">
              Bienvenido/a a una nueva era de de investigación ágil
            </Text>
            <Button colorScheme="pink" onClick={onJoinNow} marginY={6} px={10} bgColor="#AF5F7C">
              ¡Únete Ahora!
            </Button>
          </Container>
        </Box>
        <Container mt="48" mb="24" maxW="2xl">
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Image width="200px" src="support1.png" />
            </GridItem>
            <GridItem>
              <Text fontSize="3xl" color="#D5B7C7">
                Encuentra artículos coincidentes
              </Text>
              <Text mt={4} fontSize="lg">
                A través de coincidencias porcentuales entre las fuentes y tu búsqueda
              </Text>
            </GridItem>
          </Grid>
        </Container>
        <Container my="24" maxW="2xl">
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Image width="200px" src="support2.png" />
            </GridItem>
            <GridItem>
              <Text fontSize="3xl" color="#D5B7C7">
                Almacena tus búsquedas
              </Text>
              <Text mt={4} fontSize="lg">
                Guarda para después los artículos relevantes que haz encontrado
              </Text>
            </GridItem>
          </Grid>
        </Container>
        <Container my="24" maxW="2xl">
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Image width="200px" src="support3.png" />
            </GridItem>
            <GridItem>
              <Text fontSize="3xl" color="#D5B7C7">
                Pruebalo gratuitamente
              </Text>
              <Text mt={4} fontSize="lg">
                Accede a repositorios abiertos de información ahora.
              </Text>
            </GridItem>
          </Grid>
        </Container>
        <Container width="max" mb={8} justifyContent="center">
          <Button colorScheme="pink" onClick={onJoinNow} marginY={6} px={10} bgColor="#AF5F7C">
            ¡Únete Ahora!
          </Button>
        </Container>

        <Footer />
      </Flex>
    </main>
  );
}
