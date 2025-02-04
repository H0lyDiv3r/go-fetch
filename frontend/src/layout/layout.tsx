import { Grid, GridItem } from "@chakra-ui/react";
import { Response, UrlForm } from "../scenes";

export const Layout = () => {
  return (
    <Grid
      templateColumns={"repeat(12,1fr)"}
      bg={"neutral.900"}
      color={"neutral.300"}
      fontSize={"xs"}
      overflow={"auto"}
    >
      <GridItem colSpan={{ base: 12, lg: 6 }} minW={"400px"} p={2}>
        <UrlForm />
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 6 }} overflow={"auto"} p={2}>
        <Response />
      </GridItem>
    </Grid>
  );
};
