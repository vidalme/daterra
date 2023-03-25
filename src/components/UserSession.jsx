import {
  Icon,
  Text,
  Flex,
  Avatar,
  AvatarBadge,
  Badge,
  Circle,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

export default function UserSession() {
  return (
    <Flex alignItems="center">
      <Flex alignItems="center" gap="1em" mr={["1em", "1em", "2em"]}>
        <Circle p=".6rem" color="red.700" bg="red.100" position="relative">
          <Badge
            position="absolute"
            top="-8px"
            right="-8px"
            borderRadius="2rem"
            bg="red.400"
            color="white"
            w="20px"
            h="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize=".7rem" textAlign="center">
              32
            </Text>
          </Badge>
          <Icon as={FaRegHeart} boxSize=".8rem" />
        </Circle>

        <Circle p=".6rem" color="green.700" bg="green.100" position="relative">
          <Badge
            position="absolute"
            top="-8px"
            right="-8px"
            borderRadius="2rem"
            bg="green.400"
            color="white"
            w="20px"
            h="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize=".7rem" p=".1rem">
              5
            </Text>
          </Badge>
          <Icon as={GrCart} boxSize=".9rem" />
        </Circle>
      </Flex>

      <Flex
        gap=".4rem"
        alignItems="center"
        display={["none", "none", "flex"]}
        mr="1rem"
      >
        <Text fontSize="sm" color="blackAlpha.700">
          Olá
        </Text>
        <Text fontSize="md" color="blackAlpha.800" fontWeight="bold">
          Usuário
        </Text>
      </Flex>
      <Flex alignItems="center" gap=".5rem" mr=".5em">
        <Avatar name="Andre Vidal" size="sm" bg="purple.300">
          <AvatarBadge boxSize=" 1.4em" bg="green.600" />
        </Avatar>
        <NavLink>
          <ChevronDownIcon boxSize="1.2rem" />
        </NavLink>
      </Flex>
    </Flex>
  );
}
