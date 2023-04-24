import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import LoginLayout from "@/layouts/login";
import { TierCard, tierCardProps } from "@/components/tierCard";

function Profile() {
  const userName: String = "Oliver Tuesta";
  const userEmail: String = "sample@email.com";

  const tierCardData: tierCardProps[] = [
    {
      id: 1,
      title: "FREE",
      data: ["Acceso a busqueda en respositorios open source"],
      isCurrent: true,
    },
    {
      id: 2,
      title: "8$",
      data: ["Todos los beneficios de tier 1", "Acceso a busqueda en repositorios relevantes"],
      isCurrent: false,
    },
    {
      id: 3,
      title: "15$",
      data: [
        "Todos los beneficios de tier 2",
        "Acceso a busqueda en repositorios top",
        "Acceso beta a nuevos features",
      ],
      isCurrent: false,
    },
  ];

  return (
    <>
      <div className="dark-bg full-height">
        <LoginLayout>
          <Text as="h1" fontSize="4xl" fontWeight="semibold" textAlign="left">
            Mi Perfil
          </Text>
          <Text marginTop={4}>Nombre: {userName}</Text>
          <Text marginTop={2}>Correo electrónico: {userEmail}</Text>
          <Text marginTop={8} as="h2" fontSize="2xl" fontWeight="semibold">
            Plan de subscripción
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" paddingTop={6} gap={14}>
            {tierCardData.map((tierCard) => (
              <GridItem key={tierCard.id}>
                <TierCard
                  id={tierCard.id}
                  title={tierCard.title}
                  data={tierCard.data}
                  isCurrent={tierCard.isCurrent}
                />
              </GridItem>
            ))}
          </Grid>
        </LoginLayout>
      </div>
    </>
  );
}

export default Profile;
