import { CloseIcon } from "@chakra-ui/icons";
import { Circle, VStack, Text, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { NavLink } from "react-router-dom";

export default function MobileNavbar({ mobNavbar, setMobNavbar }) {
  if (!mobNavbar) {
    return (
      <HamburgerIcon
        onClick={() => {
          setMobNavbar(true);
        }}
        color="green.500"
        boxSize="1.5em"
        display={["flex", "flex", "flex", "none"]}
        cursor="pointer"
        ml="1em"
      />
    );
  } else {
    return (
      <Box position="absolute" top=".0em" left="0px" right="0px" zIndex="999">
        <Circle
          onClick={() => {
            setMobNavbar(false);
          }}
          _hover={{ bg: "green.700" }}
          h="40px"
          w="40px"
          position="absolute"
          top="1em"
          right="1em"
        >
          <CloseIcon boxSize={5} color="white" />
        </Circle>
        <VStack display={["flex", "flex", "flex", "none"]} bgColor="green.600">
          <VStack
            onClick={() => {
              setMobNavbar(false);
            }}
            position="relative"
            fontSize="lg"
            color="white"
            py="2em"
            alignItems="start"
            left="-30%"
          >
            <NavLink to="/">
              <Text
                p=".5em"
                _hover={{
                  textColor: "blackAlpha.900",
                  textDecoration: "underline",
                }}
              >
                Home
              </Text>
            </NavLink>
            <NavLink to="shopping">
              <Text
                p=".5em"
                _hover={{
                  textColor: "blackAlpha.900",
                  textDecoration: "underline",
                }}
              >
                Produtos
              </Text>
            </NavLink>
            <NavLink to="company">
              <Text
                p=".5em"
                _hover={{
                  textColor: "blackAlpha.900",
                  textDecoration: "underline",
                }}
              >
                Empresa
              </Text>
            </NavLink>
            <NavLink to="contact">
              <Text
                p=".5em"
                _hover={{
                  textColor: "blackAlpha.900",
                  textDecoration: "underline",
                }}
              >
                Contato
              </Text>
            </NavLink>
          </VStack>
        </VStack>
      </Box>
    );
  }
}
