import { Box, Text, List, ListItem, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  BsInstagram,
  BsMeta,
  BsPinterest,
  BsYoutube,
  BsWhatsapp,
  BsTiktok,
} from "react-icons/bs";

export default function Footer() {
  const cor01 = "#ECECED";
  const cor02 = "#585869";

  return (
    <Box
      bg="#17162D"
      borderTopRadius={[null, "2.2em"]}
      mt="5em"
      pl="3em"
      pt="2.5em"
      pb="2em"
    >
      <Text
        fontWeight={"bold"}
        fontSize={["2xl", "3xl", "4xl"]}
        color={cor02}
        mb="1em"
      >
        daTerra
      </Text>
      <Flex>
        <Flex
          borderRight={["none", "none", "none", "solid 1px"]}
          borderRightColor={["", "", "", cor02]}
          gap="1.2em"
          pr={["2em", "3em"]}
          display={["grid", "grid", "grid", "flex"]}
        >
          <Link>
            <BsInstagram size={22} color={cor02} />
          </Link>
          <Link>
            <BsYoutube size={22} color={cor02} />
          </Link>
          <Link>
            <BsWhatsapp size={22} color={cor02} />
          </Link>
          <Link>
            {" "}
            <BsTiktok size={22} color={cor02} />
          </Link>
          <Link>
            <BsMeta size={22} color={cor02} />
          </Link>
          <Link>
            {" "}
            <BsPinterest size={22} color={cor02} />
          </Link>
        </Flex>

        <Flex pl={["1em", "2em", "3em"]}>
          <Flex color="white" gap="2em" display={["grid", "grid", "flex"]}>
            <List>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text color={cor01}>Home</Text>
                </Link>
              </ListItem>
            </List>

            <List>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text color={cor01}>Produtos</Text>
                </Link>
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text fontSize={"sm"} color={cor02}>
                    Categorias
                  </Text>
                </Link>
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text fontSize={"sm"} color={cor02}>
                    Mais Vendidos
                  </Text>
                </Link>
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text fontSize={"sm"} color={cor02}>
                    Cestas
                  </Text>
                </Link>
              </ListItem>
            </List>

            <List>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text color={cor01}>Empresa</Text>
                </Link>
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text fontSize={"sm"} color={cor02}>
                    Nossa Historia
                  </Text>
                </Link>
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text fontSize={"sm"} color={cor02}>
                    Missão
                  </Text>
                </Link>
              </ListItem>
            </List>
            <List>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text color={cor01}>Contato</Text>
                </Link>
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text fontSize={"sm"} color={cor02}>
                    Fale conosco
                  </Text>
                </Link>
              </ListItem>
              <ListItem _hover={{ textDecoration: "underline" }}>
                <Link>
                  <Text fontSize={"sm"} color={cor02}>
                    Entre na equipe
                  </Text>
                </Link>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
      <Text textAlign={"center"} mt="5em" color={cor02}>
        Todos os direitos reservados &#174;
      </Text>
    </Box>
  );
}
