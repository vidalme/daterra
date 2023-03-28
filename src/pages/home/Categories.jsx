import { TbApple, TbSalad, TbCarrot, TbCheese, TbMeat } from "react-icons/tb";
import { MdOutlineLocalDrink } from "react-icons/md";
import { Text, Box, Heading, Center, Grid, GridItem } from "@chakra-ui/react";

export default function Categories() {
  return (
    <Box as="section" my="3em" mx="1em">
      <Heading as="h4" fontSize={["lg", "xl", "2xl"]} color="blackAlpha.800">
        Categorias
      </Heading>

      <Box mt="1rem">
        <Grid
          display="grid"
          rowGap="1.5em"
          columnGap="1em"
          justifyItems="center"
          gridTemplateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(6, 1fr)",
          ]}
        >
          <GridItem>
            <Center
              bg="blackAlpha.50"
              w="7em"
              px="1em"
              py="2.2em"
              gap="1em"
              borderRadius="2xl"
              display="flex"
              flexFlow="column"
              cursor="pointer"
              color="gray.500"
              _hover={{
                color: "gray.600",
                bg: "blackAlpha.100",
              }}
            >
              <TbApple size="2em" title="Frutas" />
              <Text fontWeight="bold">Frutas</Text>
            </Center>
          </GridItem>

          <GridItem>
            <Center
              bg="blackAlpha.50"
              borderRadius="2xl"
              w="7em"
              px="2em"
              py="2.2em"
              gap="1em"
              cursor="pointer"
              display="flex"
              flexFlow="column"
              color="gray.500"
              _hover={{
                color: "gray.600",
                bg: "blackAlpha.100",
              }}
            >
              <TbSalad size="2em" title="Verduras" />
              <Text fontWeight="bold">Verduras</Text>
            </Center>
          </GridItem>

          <GridItem>
            <Center
              bg="blackAlpha.50"
              borderRadius="2xl"
              w="7em"
              px="2em"
              py="2.2em"
              gap="1em"
              cursor="pointer"
              display="flex"
              flexFlow="column"
              color="gray.500"
              _hover={{
                color: "gray.600",
                bg: "blackAlpha.100",
              }}
            >
              <TbCarrot size="2em" title="Legumes" />
              <Text fontWeight="bold">Legumes</Text>
            </Center>
          </GridItem>

          <GridItem>
            <Center
              bg="blackAlpha.50"
              borderRadius="2xl"
              w="7em"
              px="2em"
              py="2.2em"
              gap="1em"
              cursor="pointer"
              display="flex"
              flexFlow="column"
              color="gray.500"
              _hover={{
                color: "gray.600",
                bg: "blackAlpha.100",
              }}
            >
              <TbCheese size="2em" title="Lacticinios" />
              <Text fontWeight="bold">Lacticinios</Text>
            </Center>
          </GridItem>

          <GridItem>
            <Center
              bg="blackAlpha.50"
              borderRadius="2xl"
              w="7em"
              px="2em"
              py="2.2em"
              gap="1em"
              cursor="pointer"
              display="flex"
              flexFlow="column"
              color="gray.500"
              _hover={{
                color: "gray.600",
                bg: "blackAlpha.100",
              }}
            >
              <TbMeat size="2em" title="Carnes" />
              <Text fontWeight="bold">Carnes</Text>
            </Center>
          </GridItem>

          <GridItem>
            <Center
              bg="blackAlpha.50"
              borderRadius="2xl"
              w="7em"
              px="2em"
              py="2.2em"
              gap="1em"
              cursor="pointer"
              display="flex"
              flexFlow="column"
              color="gray.500"
              _hover={{
                color: "gray.600",
                bg: "blackAlpha.100",
              }}
            >
              <MdOutlineLocalDrink size="2em" title="Bebidas" />
              <Text fontWeight="bold">Bebidas</Text>
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
