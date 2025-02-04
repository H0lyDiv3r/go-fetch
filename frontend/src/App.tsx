import { MakeRequest } from "../wailsjs/go/request/Request";
import { useRequestStore } from "./store/store";
import { Layout } from "./layout/layout";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box h={"100vh"} bg={"neutral.900"}>
      <Layout />
    </Box>
  );
}

export default App;
