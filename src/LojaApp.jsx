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

export default function LojaApp() {
  return (
    <ChakraProvider theme={brandTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
