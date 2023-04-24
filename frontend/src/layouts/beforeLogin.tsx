import { Box, Container } from "@chakra-ui/react";
import { Footer } from "@/components/footer";

function BeforeLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box
        className="dark-bg"
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        minHeight="100vh"
        color="white"
      >
        <Container maxWidth="5xl" paddingBottom="4rem">
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default BeforeLoginLayout;
