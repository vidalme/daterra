import { useState } from "react";

//pages
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import UserSession from "../components/UserSession";
import Footer from "../components/Footer";

//navegacao
import { Outlet } from "react-router-dom";

//css
import { Flex, HStack, Grid, GridItem, Text } from "@chakra-ui/react";

export default function RootLayout() {
  const [mobNavbar, setMobNavbar] = useState(false);

  return (
    <Flex justifyContent="center">
      <Grid h="100%" w={["100%", "95%"]} maxW="1280">
        <GridItem as="header">
          <Flex as="nav" alignItems="center" my="20px">
            <MobileNavbar setMobNavbar={setMobNavbar} mobNavbar={mobNavbar} />
            <Logo />
            <Flex ml="auto">
              <Navbar />
              <UserSession />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem as="main">
          <Outlet />
        </GridItem>
        <GridItem as="footer">
          <Footer />
        </GridItem>
      </Grid>
    </Flex>
  );
}

function Logo() {
  return (
    <HStack fontWeight="bold" alignItems="center" gap=".5em" pl="1em">
      <Text fontSize={["xl", "2xl", "3xl"]} color="green.500">
        Toda Feira
      </Text>
    </HStack>
  );
}
