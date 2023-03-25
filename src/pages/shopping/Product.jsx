import {
  Flex,
  Image,
  Heading,
  Text,
  Grid,
  Square,
  Circle,
} from "@chakra-ui/react";

import { AiOutlineShopping } from "react-icons/ai";

export default function Product() {
  return (
    <Grid
      bg="white"
      w="16.2em"
      border="solid 1px"
      borderColor="blackAlpha.100"
      borderRadius="3xl"
      p="1.5rem"
    >
      <Image
        src="/imgs/products/banana.jpg"
        alt="banana"
        boxSize="140px"
        justifySelf="center"
      />
      <Heading color="blackAlpha.800" as="h4" fontSize="lg" mt=".2rem">
        Banana
      </Heading>
      <Text color="blackAlpha.700" fontSize="sm">
        1 kG
      </Text>
      <Text mt="0.5rem" color="blackAlpha.800" fontSize="lg" fontWeight="bold">
        R$ 24,00
      </Text>
      <Flex gap=".6rem" alignItems="center" mt="1rem">
        <Square
          size="xs"
          w="30px"
          h="30px"
          fontSize="3xl"
          color="green.400"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "green.400", color: "white" }}
          userSelect="none"
        >
          -
        </Square>
        <Text fontSize="xl">2</Text>
        <Square
          size="xs"
          w="30px"
          h="30px"
          fontSize="2xl"
          color="green.400"
          mr="auto"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "green.400", color: "white" }}
          userSelect="none"
        >
          +
        </Square>

        <Circle
          bg="green.400"
          size="35px"
          cursor="pointer"
          _hover={{ bg: "green.500" }}
        >
          <AiOutlineShopping color="white" size="1.2rem" />
        </Circle>
      </Flex>
    </Grid>
  );
}
