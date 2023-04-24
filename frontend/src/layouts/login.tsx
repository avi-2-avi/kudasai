import { Box, Container } from "@chakra-ui/react";
import { Toolbar } from "@/components/toolbar";
import { Footer } from "@/components/footer";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toolbar />
      <Box className="dark-bg" minHeight="100vh" color="white">
        <Container maxWidth="5xl" paddingBottom="4rem">
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default LoginLayout;
