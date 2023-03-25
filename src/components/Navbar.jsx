import { HStack, Text, textDecoration } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <HStack
      color="gray.800"
      fontSize="sm"
      textColor="blackAlpha.600"
      mr="3.0em"
      gap=".7em"
      display={["none", "none", "none", "flex"]}
    >
      <NavLink to="/">
        <Text
          _hover={{ textColor: "blackAlpha.900", textDecoration: "underline" }}
        >
          Home
        </Text>
      </NavLink>
      <NavLink to="shopping">
        <Text
          _hover={{ textColor: "blackAlpha.900", textDecoration: "underline" }}
        >
          Produtos
        </Text>
      </NavLink>
      <NavLink to="company">
        <Text
          _hover={{ textColor: "blackAlpha.900", textDecoration: "underline" }}
        >
          Empresa
        </Text>
      </NavLink>
      <NavLink to="contact">
        <Text
          _hover={{ textColor: "blackAlpha.900", textDecoration: "underline" }}
        >
          Contato
        </Text>
      </NavLink>
    </HStack>
  );
}
