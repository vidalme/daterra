import {
  useState,
  useReducer,
  useContext,
  useEffect,
  createContext,
} from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//styles
import { ChakraProvider } from "@chakra-ui/react";
import { brandTheme } from "./themes/theme";

//layouts
import RootLayout from "./layout/RootLayout";
import ShoppingLayout from "./layout/ShoppingLayout";
import CompanyLayout from "./layout/CompanyLayout";
import ContactLayout from "./layout/ContactLayout";

//pages
import Home from "./pages/home/Home";

// navegacao
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="company" element={<CompanyLayout />} />
      <Route path="shopping" element={<ShoppingLayout />} />
      <Route path="contact" element={<ContactLayout />} />
    </Route>
  )
);

export const ProductsContext = createContext(null);

const cachedJson = JSON.parse(localStorage.getItem("user"));
const cachedUser = cachedJson ? cachedJson : {};
console.log(cachedUser);
// localStorage.setItem("user", JSON.stringify(a));

export default function LojaApp() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const res = await fetch("/data/db.json");
        const json = await res.json();
        setProdutos(json);
      } catch (error) {
        console.log("erro brabo");
        console.log(error.message);
      }
    }
    fetchProdutos();
  }, []);

  return (
    <ProductsContext.Provider value={{ produtos }}>
      <ChakraProvider theme={brandTheme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ProductsContext.Provider>
  );
}

function createUser(name, cart, favoriteProducts) {
  return (user = {
    name,
    cart,
    favoriteProducts,
  });
}
