import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
Link;
export default function Partners() {
  return (
    <Box as="section" w="100%" justifyItems="end">
      <Heading
        as="h4"
        fontSize={["lg", "xl", "2xl"]}
        color="blackAlpha.700"
        mb="1em"
        textAlign="center"
      >
        Nossos parceiros e colaboradores
      </Heading>
      <Flex justifyContent={"center"} wrap="wrap">
        <Link to="https://foodtechhub.com.br/" target="_blank">
          <Image src="/imgs/logo01.png" />
        </Link>
        <Link to="https://bresil.cirad.fr/pt" target="_blank">
          <Image src="/imgs/logo02.png" />
        </Link>

        <Link to="https://www.fao.org/brasil/pt/" target="_blank">
          <Image src="/imgs/logo03.png" />
        </Link>
        <Link to="https://www.livestockdialogue.org/" target="_blank">
          <Image src="/imgs/logo04.png" />
        </Link>
        <Link to="https://www.embrapa.br/en/international" target="_blank">
          <Image src="/imgs/logo05.png" />
        </Link>
        <Link to="https://www5.usp.br/" target="_blank">
          <Image src="/imgs/logo06.png" />
        </Link>
      </Flex>
    </Box>
  );
}
