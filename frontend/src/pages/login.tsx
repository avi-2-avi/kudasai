import { useState } from "react";
import { Box, Button, FormControl, Input, FormHelperText, Text, Link } from "@chakra-ui/react";
import BeforeLoginLayout from "@/layouts/beforeLogin";
import NextLink from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitting form:", { email, password });
  };

  return (
    <BeforeLoginLayout>
      <Box maxWidth="sm" margin="auto">
        <Text as="h1" fontSize="4xl" fontWeight="semibold" textAlign="center" margin="1rem 0">
          Bienvenido de vuelta
        </Text>
        <Box color="gray.800">
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
          <NextLink href="/search">Continuar</NextLink>
        </Button>

        <Text marginTop="4" textAlign="center">
          ¿No tienes una cuenta?{" "}
          <Link href="/signup" fontWeight="bold" as={NextLink}>
            Regístrate
          </Link>
        </Text>
      </Box>
    </BeforeLoginLayout>
  );
}

export default Login;
