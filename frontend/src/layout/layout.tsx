import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Response, UrlForm } from "../scenes";

export const Layout = () => {
  return (
    <Grid
      templateColumns={"repeat(12,1fr)"}
      height={"100vh"}
      bg={"neutral.900"}
      color={"neutral.300"}
      fontSize={"xs"}
    >
      <GridItem width={"200px"} bg={"gray.800"}>
        aaa
      </GridItem>
      <GridItem colSpan={{ base: 10, lg: 6 }} minW={"400px"} p={2}>
        <UrlForm />
      </GridItem>
      <GridItem colSpan={4} hideBelow={"lg"} overflow={"auto"}>
        <Response />
      </GridItem>
    </Grid>
  );
};
