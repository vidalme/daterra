import {
  Box,
  Heading,
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";

import { MdSearch } from "react-icons/md";

export default function BannerBusca() {
  return (
    <Box
      as="section"
      bg="green.100"
      h={["250px", "380px", "420px"]}
      bgImage="url('/imgs/searchBG.png')"
      bgPosition={["right -50px bottom", "right -70px bottom", "right  bottom"]}
      bgRepeat="no-repeat"
      bgSize={["850px", "auto"]}
      borderRadius={["0", "2.2rem"]}
      justifyContent="center"
    >
      <Box pt={["4em", "8em", "8em"]} pl={["2em", "3em", "4em"]}>
        <Heading as="h1" fontSize={["1.5em", "2.0em", "2.6em"]}>
          Faça sua feira com
        </Heading>
        <Heading as="h1" fontSize={["1.5em", "2.0em", "2.6em"]}>
          comida de verdade
        </Heading>
        <Heading
          as="h3"
          color="green.500"
          fontSize={["1.0em", "1.5em", "1.8em"]}
          pt={[".2em", ".4em", "1em"]}
        >
          #Entrega Grátis
        </Heading>
        <InputGroup
          w={["80%", "75%", "65%"]}
          maxW="600px"
          mt={["1rem", "1.8rem"]}
          colorScheme="green"
        >
          <InputLeftElement pl="5px" color="blackAlpha.700">
            <MdSearch />
          </InputLeftElement>
          <Input
            focusBorderColor="green.200"
            placeholder=""
            borderRadius="full"
            size="md"
            variant="outline"
            bgColor="white"
            fontSize="sm"
            color="blackAlpha.700"
          ></Input>
          <InputRightElement>
            <Button
              colorScheme="green"
              borderRadius="full"
              px="3rem"
              mr="3.5rem"
              color="white"
              bgColor="green.400"
              fontSize="sm"
            >
              Procurar
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
}
