import { StarIcon } from "@chakra-ui/icons";
import {
  Flex,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <Box my={["-1em", "0em", "5em"]} mx="1em">
      <Heading
        as="h4"
        fontSize={["lg", "xl", "2xl"]}
        color="blackAlpha.700"
        mb="1em"
        textAlign="center"
      >
        O que nossos clientes falam de nós
      </Heading>
      <Flex justifyContent="center" flexWrap={"wrap"}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Flex>
    </Box>
  );
}

function Testimonial() {
  return (
    <Card boxShadow="md" m="1em" minW="300px" maxW="350px" mb="3em">
      <CardHeader>
        <Flex>
          <Avatar></Avatar>
          <Flex flexFlow={"column"} ml="1em" mb={".25em"}>
            <Heading fontSize={"2xl"} color="blackAlpha.800">
              Andre Vidal
            </Heading>
            <Text fontSize={"md"} color="blackAlpha.700">
              Programador
            </Text>{" "}
            <Box>
              <StarIcon color={"yellow.400"} />
              <StarIcon color={"yellow.400"} />
              <StarIcon color={"yellow.400"} />
              <StarIcon color={"yellow.400"} />
              <StarIcon color={"gray.300"} />
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody mt="-1em">
        <Text fontSize="sm" color={"gray.500"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
          aspernatur cupiditate reiciendis veritatis laudantium eaque rem
          voluptas, rerum labore quam?
        </Text>
      </CardBody>
    </Card>
  );
}
