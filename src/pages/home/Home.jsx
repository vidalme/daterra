import BannerBusca from "./BannerBusca";
import Categories from "./Categories";
import Destaque from "./Destaque";
import Bundles from "./Bundles";
import Testimonials from "./Testimonials";
import DownloadApp from "./DownloadApp";
import Partners from "./Partners";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <BannerBusca />
      <Categories />
      <Destaque />
      <Bundles />
      <Testimonials />
      <DownloadApp />
      <Partners />
    </Box>
  );
}
