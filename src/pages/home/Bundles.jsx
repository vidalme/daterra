import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import Product from "../shopping/Product";
export default function Bundles() {
  return (
    <Box
      bg="green.100"
      borderRadius={["0rem", "2.2rem"]}
      my="4em"
      pb={["2rem", "3em", "4em"]}
    >
      <Heading
        as="h4"
        fontSize={["lg", "xl", "2xl"]}
        color="green.600"
        pl={["1rem", "2rem", "3rem"]}
        pt="2.5rem"
      >
        Cestas pré montadas
      </Heading>

      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        rowGap="2rem"
        justifyItems="center"
        mt="1.5rem"
      >
        <GridItem>
          <Product />
        </GridItem>
        <GridItem>
          <Product />
        </GridItem>
        <GridItem>
          <Product />
        </GridItem>
        <GridItem>
          <Product />
        </GridItem>
        <GridItem>
          <Product />
        </GridItem>
      </Grid>
    </Box>
  );
}
