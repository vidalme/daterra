import {
  Flex,
  Image,
  Heading,
  Text,
  Grid,
  Square,
  Circle,
} from "@chakra-ui/react";
import { useContext, useReducer } from "react";
import { UserContext } from "../../LojaApp";

import { AiOutlineShopping } from "react-icons/ai";

function createInitialState(user) {
  return { counter: 0, user: { ...user } };
}

function reducer(state, action) {
  console.log(state.user);
  switch (action.type) {
    case "DECREMENT":
      if (state.counter - 1 <= 0) {
        return { counter: 0, user: { ...state.user } };
      }
      return { counter: state.counter - 1 };

    case "INCREMENT":
      return { counter: state.counter + 1, user: { ...state.user } };

    case "ADD_TO_CART":
      if (state.counter > 0) {
        console
          .log
          // `adicionar no carrinho ${state.counter} ${action.payload.name} para o ${state.user.name}`
          ();

        const newProducts = [];
        for (let i = 0; i < state.counter; i++) {
          newProducts.push(action.payload);
        }
        return {
          counter: 0,
          user: { ...state.user, cart: [...state.user.cart, ...newProducts] },
        };
      } else {
        return { counter: 0, user: { ...state.user } };
      }

    default:
      break;
  }
}

export default function Product(produto) {
  const { user } = useContext(UserContext);

  const [state, dispatch] = useReducer(reducer, user, createInitialState);

  return (
    <Grid
      bg="white"
      w="16.2em"
      border="solid 1px"
      borderColor="blackAlpha.100"
      borderRadius="3xl"
      p="1.5rem"
    >
      <Image
        src={"/imgs/products/" + produto.imgUrl}
        alt="banana"
        boxSize="140px"
        justifySelf="center"
      />
      <Heading color="blackAlpha.800" as="h4" fontSize="lg" mt=".2rem">
        {produto.name}
      </Heading>
      <Text color="blackAlpha.700" fontSize="sm">
        1 kG
      </Text>
      <Text mt="0.5rem" color="blackAlpha.800" fontSize="lg" fontWeight="bold">
        {produto.price}
      </Text>
      <Flex gap=".6rem" alignItems="center" mt="1rem">
        <Square
          size="xs"
          w="30px"
          h="30px"
          fontSize="3xl"
          color="green.400"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "green.400", color: "white" }}
          userSelect="none"
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </Square>
        <Text fontSize="xl">{state.counter}</Text>
        <Square
          size="xs"
          w="30px"
          h="30px"
          fontSize="2xl"
          color="green.400"
          mr="auto"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "green.400", color: "white" }}
          userSelect="none"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </Square>

        <Circle
          bg="green.400"
          size="35px"
          cursor="pointer"
          _hover={{ bg: "green.500" }}
          onClick={() => {
            console.log(user);
            dispatch({ type: "ADD_TO_CART", payload: produto });
          }}
        >
          <AiOutlineShopping color="white" size="1.2rem" />
        </Circle>
      </Flex>
    </Grid>
  );
}
