import { useState } from "react";
import { Box, Button, FormControl, Input, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import BeforeLoginLayout from "@/layouts/beforeLogin";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    console.log(response)
  };

  return (
    <>
      <BeforeLoginLayout>
        {" "}
        <Box maxWidth="md" margin="auto" textAlign="center" marginY="35px">
          <Text as="h1" fontSize="4xl" fontWeight="semibold" textAlign="center" margin="1rem 0">
            Crear un cuenta
          </Text>
          <Text>
            Create una cuenta para poder disfrutar de Tier gratuito de KudasIA y guardar artículos
            coincidentes en tus marcadores.
          </Text>
        </Box>
        <Box maxWidth="sm" margin="auto">
          <Box color="gray.800">
          <FormControl id="name" marginBottom="4">
              <Input
                variant="filled"
                bg="white"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nombre completo"
                _focus={{ bg: "white" }}
              />
            </FormControl>
            <FormControl id="email" marginBottom="4">
              <Input
                variant="filled"
                bg="white"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Correo electrónico"
                _focus={{ bg: "white" }}
              />
            </FormControl>
            <FormControl id="password" marginBottom="4">
              <Input
                _focus={{ bg: "white" }}
                variant="filled"
                bg="white"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Contraseña"
              />
            </FormControl>
          </Box>

          <Button
            colorScheme="pink"
            width={"100%"}
            onClick={handleSubmit}
            marginY={6}
            px={10}
            bgColor="#AF5F7C"
          >
            <NextLink href="/login">¡Únete Ahora!</NextLink>
          </Button>

          <Text marginTop="4" textAlign="center">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" fontWeight="bold" as={NextLink}>
              Inicia sesión
            </Link>
          </Text>
        </Box>
      </BeforeLoginLayout>
    </>
  );
}

export default Signup;
