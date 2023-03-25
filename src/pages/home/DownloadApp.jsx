import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { FaApple, FaAndroid } from "react-icons/fa";

export default function DownloadApp() {
  return (
    <Flex
      as="section"
      bg="green.100"
      borderRadius="2.2rem"
      my="4em"
      pb="4em"
      bgImg="url('/imgs/dlapp.png')"
      bgRepeat="no-repeat"
      bgPosition={[null, "bottom 0em left -12em", "bottom  left -5em"]}
      bgSize={[null, "500px", "600px"]}
      display={["none", "flex"]}
      h={[null, "20em", "26em"]}
      alignItems="center"
    >
      <Box ml={[null, "13.5em", "28em"]} mt="3em">
        <Heading
          as="h4"
          fontSize={[null, "3xl", "5xl"]}
          color="green.700"
          mb=".5em"
        >
          Baixe o aplicativo!
        </Heading>
        <Text fontSize={14} color="gray.500" mb="1em" pr="1em" maxW={500}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          inventore ipsam veniam. Nostrum iusto recusandae dolore aliquam ex,
          distinctiox.
        </Text>
        <Flex gap="1em">
          <Button colorScheme={"green"} size="sm">
            <Flex gap="1em">
              <FaApple size={20} />
              Apple
            </Flex>
          </Button>
          <Button colorScheme={"green"} size="sm">
            <Flex gap="1em">
              <FaAndroid size={20} />
              Android
            </Flex>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
