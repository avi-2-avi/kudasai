import {
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

export interface tierCardProps {
  id: number;
  title: string;
  data: string[];
  isCurrent: boolean;
}

export const TierCard = ({ id, title, data, isCurrent }: tierCardProps) => {
  return (
    <>
      <Card align="center" minH={370}>
        <CardHeader justifyContent="center">
          <Heading textAlign="center" fontSize="xl">
            TIER {id}
          </Heading>
          <Heading textAlign="center" paddingTop={6} fontSize="5xl">
            {title}
          </Heading>
        </CardHeader>
        <CardBody>
          <UnorderedList>
            {data.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </UnorderedList>
        </CardBody>
        {isCurrent ? (
          <Button colorScheme="pink" marginY={6} px={10} bgColor="#AF5F7C">
            Subscripción actual
          </Button>
        ) : (
          <Button colorScheme="pink" marginY={6} px={10} bgColor="#AF5F7C">
            Adquirir ahora
          </Button>
        )}
      </Card>
    </>
  );
};
